import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentStatus, VeterinaryDoctor } from '../models/models';
import { VeterinaryDoctorService } from '../service/veterinary-doctor.service';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veterinary-doctor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './veterinary-doctor.component.html',
  styleUrls: ['./veterinary-doctor.component.scss']
})
export class VeterinaryDoctorComponent {


  constructor(private veterinaryDoctorService:VeterinaryDoctorService, private authService:AuthService, private router:Router){}

  veterinaryDoctors:VeterinaryDoctor[] = []

  appointment:AppointmentStatus = {
    _id: null,
    doctorId: {
      _id: '',
      name: '',
      profilePhoto: '',
      email: '',
      location: {
        doorNo: '',
        street: '',
        city: '',
        district: '',
        state: '',
        country: ''
      },
      degree: '',
      degreeCertificate: '',
      contactNumber: 0,
      status: '',
      isSubscribed: false
    },
    requesterId: '',
    requesterType: '',
    reason: '',
    status: 'initiated',
    requestedDate: null,
    acceptOrRejectedDate: null,
    appointmentDate: null
  };

  ngOnInit(){
    this.veterinaryDoctorService.getNearByDoctors().subscribe({
      next: (val)=>{
        this.veterinaryDoctors = val;
      }
    })
  }

  async sendRequest(id:string) {
    if(this.authService.isAuthenticated()){

      const { value: reason } = await Swal.fire({
        input: "textarea",
        inputLabel: "Reason",
        confirmButtonColor: "#ffd740",
        confirmButtonText: 'Request',
        inputPlaceholder: "Type your message here...",
        inputAttributes: {
          "aria-label": "Type your message here"
        },
        showCancelButton: true
        
      });
      if (reason) {
        this.appointment.doctorId._id = id;
      this.appointment.requestedDate = new Date;
      this.appointment.reason = reason;
      if(this.authService.hasAccess("ROLE_ADOPTER"))
      {
        this.appointment.requesterType = "ADOPTER"
      }
      else{
        this.appointment.requesterType = "ORGANIZATION"
      }
      this.authService.sharedId$.subscribe({
        next: (id) => {
          this.appointment.requesterId = id;
        }
      })
      console.log(this.appointment);
      this.veterinaryDoctorService.requestAppointment(this.appointment).subscribe({
        next: () => {
          Swal.fire({
            title: "Request Send",
            confirmButtonColor: "#ffd740",
            icon: "success"
          });
        },
        error: (error) => {
          Swal.fire({
            title: "Request Not Send",
            confirmButtonColor: "#ffd740",
            icon: "error"
          });
        }
      })
      
      }
    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'No Access',
        showCancelButton: true,
        confirmButtonText: 'Login',
        confirmButtonColor: "#ffd740",
        text: 'Login to Access this feature',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.router.navigate(['auth'])
        } 
      });
    }
    }
}
