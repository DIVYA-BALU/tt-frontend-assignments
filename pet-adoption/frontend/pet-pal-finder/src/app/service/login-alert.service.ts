import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class LoginAlertService {
  constructor(private router: Router) {}

  requestLogin() {
    Swal.fire({
      icon: 'warning',
      title: 'No Access',
      showCancelButton: true,
      confirmButtonText: 'Login',
      confirmButtonColor: '#ffd740',
      text: 'Login to Access this feature',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['auth']);
      }
    });
  }
}
