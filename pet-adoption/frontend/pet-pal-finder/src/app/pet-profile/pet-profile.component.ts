import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PetPostService } from '../service/pet-post.service';
import { PetPost } from '../models/models';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { AdoptionFormComponent } from '../adoption-form/adoption-form.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pet-profile',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './pet-profile.component.html',
  styleUrls: ['./pet-profile.component.scss'],
})
export class PetProfileComponent {
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private petPostService: PetPostService,
    private authService: AuthService,
    private router: Router
  ) {}

  private getSubscription: Subscription = new Subscription();

  petPost: PetPost = {
    _id: '',
    category: '',
    breed: '',
    quantity: 0,
    gender: '',
    weight: 0,
    isInfected: false,
    posterId: {
      _id: '',
      name: '',
      email: '',
      organizationPhoto: '',
      location: {
        doorNo: '',
        street: '',
        city: '',
        district: '',
        state: '',
        country: '',
      },
      contactNumber: 0,
      status: '',
    },
    images: [],
    description: '',
    isAdopted: false,
    postedDate: new Date(),
  };

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AdoptionFormComponent, {
      width: '150vh',
      height: '90vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        petPostId: this.petPost._id,
        posterId: this.petPost.posterId._id,
      },
    });
  }

  adopt() {
    if (this.authService.isAuthenticated()) {
      this.openDialog('30ms', '30ms');
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'No Access',
        showCancelButton: true,
        confirmButtonText: 'Login',
        text: 'Login to Access this feature',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['auth']);
        }
      });
    }
  }

  ngOnInit() {
    const id: string = this.route.snapshot.paramMap.get('id') || '';
    console.log(id);
    this.getSubscription = this.petPostService.getPetPost(id).subscribe({
      next: (val) => {
        this.petPost = val;
      },
    });
  }

  ngOnDestory() {
    this.getSubscription.unsubscribe();
  }
}
