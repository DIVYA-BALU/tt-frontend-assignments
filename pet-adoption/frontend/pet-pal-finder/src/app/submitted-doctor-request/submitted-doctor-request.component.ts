import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AppointmentStatus, AppointmentUpdate, Rating } from '../models/models';
import { AuthService } from '../service/auth.service';
import { DateConverterPipe } from '../pipes/date-converter.pipe';
import { RatingComponent } from '../rating/rating.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-submitted-doctor-request',
  standalone: true,
  imports: [CommonModule, DateConverterPipe, MatDialogModule],
  templateUrl: './submitted-doctor-request.component.html',
  styleUrls: ['./submitted-doctor-request.component.scss'],
})
export class SubmittedDoctorRequestComponent {
  constructor(
    private veterinaryDoctorService: VeterinaryDoctorService,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  appointment:AppointmentUpdate={
    id: '',
    status: '',
    date: new Date
  }
  private idSubscription: Subscription = new Subscription();
  private getUpdateSubscription: Subscription = new Subscription();
  private getSubscription: Subscription = new Subscription();

  appointmentStatuses: AppointmentStatus[] = [];
  userId: string = '';
  date: Date = new Date();

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    data: {}
  ): void {
    this.dialog.open(RatingComponent, {
      width: '50vh',
      height: '50vh',
      enterAnimationDuration,
      exitAnimationDuration,
      data: data,
    });
  }

  loadData()
{
  this.getSubscription = this.veterinaryDoctorService.getRequestStatus(this.userId).subscribe({
    next: (val) => {
      this.appointmentStatuses = val;
    },
  });
}
  visited(statusId: string, doctorId: string) {
    const data:Rating = {
      _id: '',
      veterinaryDoctorId: doctorId,
      rating: 0,
      raterId: this.userId
    };
    this.openDialog('30ms', '30ms', data);
    this.appointment.status = "visited";
    this.appointment.id = statusId;
    this.getUpdateSubscription = this.veterinaryDoctorService.updateAppointment(this.appointment).subscribe(
      {next: (val)=>{
        console.log(val);
        this.loadData()
      }}
    )
  }

  ngOnInit() {
    this.idSubscription = this.authService.sharedId$.subscribe({
      next: (id) => {
        this.userId = id;
        this.loadData()
      },
    });
  }

  ngonDestroy(){
    this.idSubscription.unsubscribe()
    this.getSubscription.unsubscribe()
    this.getUpdateSubscription.unsubscribe()
  }
}
