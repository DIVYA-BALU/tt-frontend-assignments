import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Branch, Permission, Role, UserDetails } from 'src/app/core/models/API.model';
import { BranchService } from 'src/app/core/services/branch.service';
import { RolePermissionService } from 'src/app/core/services/role-permission.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent {

  userDetailsForm: FormGroup = new FormGroup({});
  availableRoles: Role[] = [];
  availablePermissions: Permission[] = [];
  otherPermissions: Permission[] = [];
  availableBranches: Branch[] = [];

  private rolesSubscription: Subscription = new Subscription;
  private permissionsSubscription: Subscription = new Subscription;
  private branchesSubscription: Subscription = new Subscription;
  private updateUserSubscription: Subscription = new Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserDetails, private formBuilder: FormBuilder, private rolepermissionService: RolePermissionService, private userDetailsService: UserDetailsService, private branchService: BranchService, private dialog: MatDialog) { }

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      _id: [this.data._id],
      name: [this.data.name, [Validators.required]],
      emailId: [this.data.emailId, [Validators.required, Validators.email]],
      role: [this.data.role],
      permissions: this.formBuilder.array([]),
      branchIds: this.formBuilder.array([])
    });

    this.rolesSubscription = this.rolepermissionService.getAllRoles().subscribe({
      next: (roles) => {
        this.availableRoles = roles;
        this.userDetailsForm.setControl('roles', this.buildRolesCheckboxes());
      }
    });

    this.permissionsSubscription = this.rolepermissionService.getAllPermissions().subscribe({
      next: (permissions) => {
        this.availablePermissions = permissions;
        this.userDetailsForm.setControl('permissions', this.buildPermissionsCheckboxes());
      }
    })

    this.branchesSubscription = this.branchService.getAllBranches().subscribe({
      next: (branches) => {
        this.availableBranches = branches;
        this.userDetailsForm.setControl('branchIds', this.buildBranchesCheckboxes());
      }
    })

  }

  buildRolesCheckboxes() {
    const checkboxes = this.availableRoles.map(role => {
      return this.formBuilder.control(this.data.role.name === role.name);
    });
    return this.formBuilder.array(checkboxes);
  }

  buildBranchesCheckboxes() {
    const checkboxes = this.availableBranches.map(branch => {
      return this.formBuilder.control(this.data.branchIds?.includes(branch._id));
    });
    return this.formBuilder.array(checkboxes);
  }

  buildPermissionsCheckboxes() {

    const availablePermissionNames = this.availablePermissions.map(permission => permission.name);
    const dataPermissionNames = this.data.permissions?.map(permission => permission.name) ?? [];

    const checkboxes = availablePermissionNames.map(permissionName => {
      const isChecked = dataPermissionNames.includes(permissionName);
      return this.formBuilder.control(isChecked);
    });

    return this.formBuilder.array(checkboxes);
  }

  checkRolePermission(permission: Permission): boolean {
    const rolePermissions = this.userDetailsForm.value.role.permissions;
    return !rolePermissions.find((rolePermission: Permission) => rolePermission._id === permission._id);
  }

  onSubmit() {

    const selectedBranches = this.userDetailsForm.value.branchIds
      .map((checked: boolean, index: number) => checked ? this.availableBranches[index]?._id : null)
      .filter((value: string | null) => value !== null);

    this.userDetailsForm.value.branchIds = selectedBranches;

    const selectedPermissions = this.userDetailsForm.value.permissions
      .map((checked: boolean, index: number) => checked ? this.availablePermissions[index] : null)
      .filter((value: Permission | null) => value !== null);

    this.userDetailsForm.value.permissions = selectedPermissions;

    if (this.userDetailsForm.value.branchIds.length > 0 || this.userDetailsForm.value.role.name === 'ADMIN') {
      this.updateUserSubscription = this.userDetailsService.updateUser(this.userDetailsForm.value).subscribe({
        next: () => {
          this.closeUpdateUserForm();
          this.userDetailsService.setPaginatedUsersSubject();
          Swal.fire('User Updated Successfully');
        }, error: () => {
          Swal.fire('Error Occured');
        }
      }
      );
    }
    else {
      Swal.fire('Branch Field required');
    }
  }

  closeUpdateUserForm() {
    this.dialog.closeAll();
  }

  ngOnDestroy() {
    if (this.rolesSubscription) {
      this.rolesSubscription.unsubscribe();
    }
    if (this.permissionsSubscription) {
      this.permissionsSubscription.unsubscribe();
    }
    if (this.branchesSubscription) {
      this.branchesSubscription.unsubscribe();
    }
    if (this.updateUserSubscription) {
      this.updateUserSubscription.unsubscribe();
    }
  }

}
