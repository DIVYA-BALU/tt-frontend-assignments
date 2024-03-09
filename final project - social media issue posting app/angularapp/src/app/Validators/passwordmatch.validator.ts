import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


//to check the confirm password and password matches or not
export const passwordmatch: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('userPassword');
    const confirmpassword = control.get('confirmPassword');
    if (password && confirmpassword && password?.value != confirmpassword?.value) {
        return {
            passwordmismatcherror: true
        }
    }
    return null;
}