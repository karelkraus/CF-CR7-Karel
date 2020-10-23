import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { BlogComponent } from './blog/blog.component';
import { TravelComponent } from './travel/travel.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
	{
		path:'', component: HeroComponent
	},{
		path:'blog', component: BlogComponent
	},{
		path:'travels', component: TravelComponent
	},{
		path:'travels/:offerId', component: TravelDetailComponent
	},{
		path:'cart', component: CartComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
