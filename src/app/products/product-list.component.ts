import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
	// selector: 'pm-products',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = false;
	filteredProducts: IProduct[];
	private _listFilter: string;
	errorMessage: string;
	products: IProduct[] = [
		{
			"productId": 2,
			"productName": "Garden Cart",
			"productCode": "GDN-0023",
			"releaseDate": "March 18, 2019",
			"description": "15 gallon capacity rolling garden cart",
			"price": 32.99,
			"starRating": 4.2,
			"imageUrl": "assets/images/garden_cart.png"
		},
		{
			"productId": 5,
			"productName": "Hammer",
			"productCode": "TBX-0048",
			"releaseDate": "May 21, 2019",
			"description": "Curved claw steel hammer",
			"price": 8.9,
			"starRating": 4.8,
			"imageUrl": "assets/images/hammer.png"
		}
	];

	constructor(private productService: ProductService) {
	}

	//Getter for listFilter property
	get listFilter(): string {
		return this._listFilter;
	}

	//Setter for listFilter property
	set listFilter(value: string) {
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	// Event method for when user clicks on star rating
	onRatingClicked(message: string): void {
		this.pageTitle = 'Product List: ' + message;
	}

	// filters the product list based on argument filter
	performFilter(filterBy: string): IProduct[] {
		filterBy = filterBy.toLocaleLowerCase();
		return this.products.filter((product: IProduct) =>
			product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
	}

	toggleImage(): void {
		this.showImage = !this.showImage;
	}

	ngOnInit(): void {
		this.productService.getProducts().subscribe({
			next: products => {
				this.products = products;
				this.filteredProducts = this.products;
				},
			error: err => this.errorMessage = err
		});
		
	}
}
