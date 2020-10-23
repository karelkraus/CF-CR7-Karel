import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { offers } from '../offers';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.sass']
})
export class TravelDetailComponent implements OnInit {
	offer;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(offer) {
   this.cartService.addToCart(offer);
 }

  ngOnInit(): void {
  	this.route.paramMap.subscribe(params => {
	this.offer = offers[+params.get('offerId')];
  });
  }

}
