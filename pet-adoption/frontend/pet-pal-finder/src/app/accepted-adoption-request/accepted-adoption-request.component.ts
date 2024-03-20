import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionDetail } from '../models/models';
import { AdoptionService } from '../service/adoption.service';
import { AuthService } from '../service/auth.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RequesterProfileComponent } from '../requester-profile/requester-profile.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accepted-adoption-request',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './accepted-adoption-request.component.html',
  styleUrls: ['./accepted-adoption-request.component.scss'],
})
export class AcceptedAdoptionRequestComponent {
  constructor(
    private dialog: MatDialog,
    private adoptionService: AdoptionService,
    private authService: AuthService
  ) {}

  adoptionDetails: AdoptionDetail[] = [];
  isLoading: boolean = false;
  currentPage: number = 0;
  id: string = '';
  private idSubscription: Subscription = new Subscription();
  private statusSubscription: Subscription = new Subscription();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const documentHeight = document.body.scrollHeight;
    if (scrollPosition + windowHeight >= documentHeight && !this.isLoading) {
      this.loadData();
    }
  }

  loadData() {
    this.isLoading = true;
    this.statusSubscription = this.adoptionService
      .getAdoptionStatusOfPoster(this.id, 'accepted', this.currentPage)
      .subscribe({
        next: (val) => {
          this.adoptionDetails = [...this.adoptionDetails, ...val];
          this.isLoading = false;
          this.currentPage++;
        },
      });
  }

  click(type: string, id: string) {
    const data = { type, id };
    this.openDialog('30ms', '30ms', data);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    data: { type: string; id: string }
  ): void {
    this.dialog.open(RequesterProfileComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
      data: data,
    });
  }

  ngOnInit() {
    this.idSubscription = this.authService.sharedId$.subscribe({
      next: (id) => {
        this.id = id;
        this.loadData();
      },
    });
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }
}
