import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { offers } from '../offers';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {

  sendIt: boolean = false;

	offers = offers;

	info = new FormGroup ({
		name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-Z ]*')]),
		email: new FormControl('', [Validators.required, Validators.email]),
		type: new FormControl ('', [Validators.required, Validators.minLength(10)]),

	})

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sendIt = true;
    if(this.info.valid) {
  	var x = this.info.value
  	console.log(x)
  	this.info.reset()
    this.sendIt = false;
    }
  }

}
