import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service/shared-service.service';
import { Router } from '@angular/router';
import { Authority } from '../model/Authority';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit{
  authorities: Authority[] = [];

  constructor(
    private sharedService: SharedServiceService,
    private route: Router
  ) {}

  name: string | null = localStorage.getItem('Role');

  logout() {
    localStorage.clear();
    this.sharedService.setLogout();
    this.route.navigate(['/login']);
  }

  hasPermission(permissionName: string) {
    return this.authorities.some((data) => {
      return data.authority === permissionName;
    });
  }

  createAccount!: boolean;
  userNews!: boolean;
  writeArticle!: boolean;
  manageArticle!: boolean;
  editArticle!: boolean;
  seeRejectedArticle!: boolean;
  writeNews!: boolean;
  manageNews!: boolean;
  editNews!: boolean;
  seeRejectedNews!: boolean;
  writeShortReads!: boolean;
  manageShortReads!: boolean;
  editShortReads!: boolean;
  seeRejectedShortReads!: boolean;
  userNewsApproved!: boolean;

  ngOnInit() {
    this.sharedService.permissionsData.subscribe((data) => {
      this.authorities = data;

      if (this.authorities) {
        this.writeArticle = this.hasPermission('WRITE_ARTICLE');
        this.manageArticle = this.hasPermission('MANAGE_ARTICLE');
        this.editArticle = this.hasPermission('EDIT_ARTICLE');
        this.seeRejectedArticle = this.hasPermission('SEE_REJECTED_ARTICLE');
        this.writeNews = this.hasPermission('WRITE_NEWS');
        this.manageNews = this.hasPermission('MANAGE_NEWS');
        this.editNews = this.hasPermission('EDIT_NEWS');
        this.seeRejectedNews = this.hasPermission('SEE_REJECTED_NEWS');
        this.writeShortReads = this.hasPermission('WRITE_SHORT_READS');
        this.manageShortReads = this.hasPermission('MANAGE_SHORT_READS');
        this.editShortReads = this.hasPermission('EDIT_SHORT_READS');
        this.seeRejectedShortReads = this.hasPermission(
          'SEE_REJECTED_SHORTREADS'
        );
        this.createAccount = this.hasPermission('CREATE_ACCOUNT');
        this.userNews = this.hasPermission('USER_NEWS');
        this.userNewsApproved = this.hasPermission('SEE_USERNEWS');
      }
    });
  }
}
