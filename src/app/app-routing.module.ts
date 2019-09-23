import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './view/product-list/product-list.component';
import { TopBarComponent } from './view/top-bar/top-bar.component';
import { ProductDetailsComponent } from './view/product-details/product-details.component';
import { CartComponent } from './view/cart/cart.component';
import { ShippingComponent } from './view/shipping/shipping.component';

const routes: Routes = [
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
