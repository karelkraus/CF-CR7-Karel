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
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl(''),
		number: new FormControl (''),

	})

  constructor(private cartService: CartService) { }

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
  	var y = this.payment.value
  	console.log(y)
  	this.payment.reset()
  }

}
