import { Component } from '@angular/core';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.scss']
})
export class StoreManagementComponent {
  selectedTabIndex: number = 0;
  
  tabChanged(index: number) {
    this.selectedTabIndex = index;
  }
}
