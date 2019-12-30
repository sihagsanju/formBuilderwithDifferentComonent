import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormService } from '../form.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  get form(): FormGroup {
    return this.formService.form;
  }
  constructor(private formService: FormService) { }

  ngOnInit() {
  }

  async submit(data: any) {
    if (!this.formService.isValid) {
      return;
    }

    this.formService.createData(data);

    alert(`Thanks!`);

    // if (this.editMode) {
      // update api endpoint call
    // } else {
      // create api endpoint call
    // }
  }

  reset() {
    this.formService.resetForm();
  }

}
