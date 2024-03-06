import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funder } from 'src/app/model/funder';
import { FundersService } from 'src/app/services/funders.service';

@Component({
  selector: 'app-funderprofile',
  templateUrl: './funderprofile.component.html',
  styleUrls: ['./funderprofile.component.scss']
})
export class FunderprofileComponent {

  constructor(private fundersService: FundersService) {}

  ngOnInit() {
    this.getFunder();
  }

  funder:Funder = {
    _id : '',
    firstName : '',
    lastName : '',
    email :'',
    phoneNumber :'',
    countryOfBirth : '',
    countryOfResidence : '',
    address : '',
    city : '',
    state :'',
    zipCode : '',
    occupation : ''
  }


  getFunder() {
    this.fundersService.getFunder().subscribe(
      (response) => {
        this.funder = response
      }
    )
  }

onSubmit(funderForm: NgForm){}

  UpdateFunder() { 
    this.fundersService.updateFunder(this.funder).subscribe(
      (data) => {
        this.funder = data;
      }
    ) 
  }

}
