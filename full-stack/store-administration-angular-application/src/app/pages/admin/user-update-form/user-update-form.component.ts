import { Component, Inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Branch, Permission, Role, UserDetails } from 'src/app/core/models/API.model';
import { BranchService } from 'src/app/core/services/branch.service';
import { RolePermissionService } from 'src/app/core/services/role-permission.service';
import { UserDetailsService } from 'src/app/core/services/user-details.service';
import { PopUpComponent } from '../../pop-up/pop-up.component';
import { AuthService } from 'src/app/core/services/auth.service';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: UserDetails, private formBuilder: FormBuilder, private rolepermissionService: RolePermissionService, private userDetailsService: UserDetailsService, private branchService: BranchService, private dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.data);

    this.userDetailsForm = this.formBuilder.group({
      _id: [this.data._id],
      name: [this.data.name, [Validators.required]],
      emailId: [this.data.emailId, [Validators.required, Validators.email]],
      role: [this.data.role],
      permissions: this.formBuilder.array([]),
      branchesId: this.formBuilder.array([], this.branchesValidator())
    });

    this.rolepermissionService.getAllRoles().subscribe({
      next: (roles) => {
        console.log(roles);

        this.availableRoles = roles;
        this.userDetailsForm.setControl('roles', this.buildRolesCheckboxes());
      }
    });

    this.rolepermissionService.getAllPermissions().subscribe({
      next: (permissions) => {
        this.availablePermissions = permissions;
        this.userDetailsForm.setControl('permissions', this.buildPermissionsCheckboxes1());
      }
    })

    this.branchService.getAllBranches().subscribe({
      next: (branches) => {
        this.availableBranches = branches;
        this.userDetailsForm.setControl('branchesId', this.buildBranchesCheckboxes());
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
      return this.formBuilder.control(this.data.branchesId?.includes(branch._id));
    });
    return this.formBuilder.array(checkboxes);
  }

  buildPermissionsCheckboxes() {
    const checkboxes = this.availablePermissions.map(permission => {
      return this.formBuilder.control(this.data.permissions?.includes(permission));
    });
    return this.formBuilder.array(checkboxes);
  }

  buildPermissionsCheckboxes1() {
    
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

branchesValidator(): ValidatorFn {
  return (formArray: AbstractControl): { [key: string]: any } | null => {
    if (!formArray || !(formArray instanceof FormArray)) {
      return { invalidFormArray: true };
    }
    const selectedBranches = (formArray as FormArray).controls.filter(control => control && control.value);
    return selectedBranches.length > 0 ? null : { noBranchSelected: true };
  };
}

  onSubmit() {
    console.log(this.userDetailsForm.value);

    const selectedBranches = this.userDetailsForm.value.branchesId
    .map((checked: boolean, index: number) => checked ? this.availableBranches[index]?._id : null)
    .filter((value: string | null) => value !== null);

  this.userDetailsForm.value.branchesId = selectedBranches;

  const selectedPermissions = this.userDetailsForm.value.permissions
    .map((checked: boolean, index: number) => checked ? this.availablePermissions[index] : null)
    .filter((value: Permission | null) => value !== null);

  this.userDetailsForm.value.permissions = selectedPermissions;

  console.log(this.userDetailsForm.value.role);
  
    if (this.userDetailsForm.value.branchesId.length > 0 || this.userDetailsForm.value.role.name === 'ADMIN') {
      this.userDetailsService.updateUser(this.userDetailsForm.value).subscribe({
        next: () => {
          this.userDetailsService.setPaginatedUsersSubject();
          this.dialog.open(PopUpComponent, {
            data: {
              message: 'User Updated Successfully',
            },
          });
        },error: () => {
          this.dialog.open(PopUpComponent, {
            data: {
              message: 'Error Occured',
            },
          });
        }
      }
      );
    }
    else{
      this.dialog.open(PopUpComponent, {
        data: {
          message: 'Branch Field is needed',
        },
      });
    }
  }

  closeUpdateUserForm() {
    this.dialog.closeAll();
  }
}
