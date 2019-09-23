import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; // http services

@Injectable({
	providedIn: 'root'
})
export class CartService {
	item = [];

	constructor(private http:HttpClient) { }

	addToCart(product)
	{
		this.item.push(product);
	}
	getItems()
	{
		return this.item;
	}
	clearItems()
	{
		this.item = [];
		return this.item;
	}

	getShippingPrices(){
		return this.http.get('/assets/shipping.json');
	}
}
