import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  allRestaurants: any[] = [
    {
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cooking: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
    },
    {
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cooking: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
    },
    {
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cooking: ['Italian', 'Mexican'],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 100,
    },
  ];
  @ViewChild('searchInput') searchInput: any;
  query: string = '';
  restaurants: any[] = [];
  isLoading: boolean = false;
  model: any = {
    icon: 'search-outline',
    title: 'No restaurants record found',
  };

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.searchInput.setFocus();
    }, 500);
  }

  async onSearchChange(event: any) {
    this.query = event.detail.value;

    if (this.query) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = this.allRestaurants.filter((restaurant) =>
          restaurant.short_name.includes(this.query)
        );
        this.isLoading = false;
      }, 3000);
    }
  }
}
