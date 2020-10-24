import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
	items;

	payment = new FormGroup ({
		firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]),
		lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z ]*')]),
		email: new FormControl('', [Validators.required, Validators.email]),
		number: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.pattern('[0-9]*')]),

	})

  constructor(private cartService: CartService) { }

  sendForm: boolean = false

  ngOnInit(): void {
  	this.items = this.cartService.getItems();

  }

    get total()
  {
    return this.items.reduce((sum,x)=>
    ({quantity:1, price:sum.price+x.price}),
    {quantity:1, price:0}).price;
  }

  get discountTen() {
  	return this.items.reduce((sum,x)=>
    ({quantity:1, price:sum.price+x.price}),
    {quantity:1, price:0}).price*0.9;
  }

  get discountTwenty() {
  	return this.items.reduce((sum,x)=>
    ({quantity:1, price:sum.price+x.price}),
    {quantity:1, price:0}).price*0.8;
  }

  onSubmit() {
    this.sendForm = true;
    if(this.payment.valid) {
  	var y = this.payment.value
  	console.log(y)
  	this.payment.reset()
    this.sendForm = false
    }
  }

}
