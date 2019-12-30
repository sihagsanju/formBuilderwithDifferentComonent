import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormValidatorService } from './form-validator.service';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  public form: FormGroup;

  constructor(private fb: FormBuilder, private formValidator: FormValidatorService) {
    this.form = this.fb.group({
      likedItem : null,
      customerDetails: this.fb.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        phoneNumber: [null, Validators.required],
        address: this.fb.group({
          street: [null, Validators.required],
          houseNum: [null, Validators.required],
          city: [null, Validators.required],
          floor: [null, Validators.required],
        })
      })
    });
   }

   get isValid(): boolean {
    if (!this.form.valid) {
      this.formValidator.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }
  resetForm() {
    this.form.reset();
  }

  createData(data: any) {
    console.log('this is the data passing', data);
  }
}
