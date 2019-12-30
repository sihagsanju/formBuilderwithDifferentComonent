import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-childaddress',
  templateUrl: './childaddress.component.html',
  styleUrls: ['./childaddress.component.css']
})
export class ChildaddressComponent implements OnInit {

  @Input() childAddressGroup: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
