import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { offers } from '../offers';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {

	offers = offers;

	info = new FormGroup ({
		name: new FormControl(''),
		email: new FormControl(''),
		type: new FormControl (''),

	})

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  	var x = this.info.value
  	console.log(x)
  	this.info.reset()
  }

}
