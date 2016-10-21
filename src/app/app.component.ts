import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'Cart Items';
  total: number;
  items = [
    { name: 'item1', price: 1 },
    { name: 'item2', price: 2 }
  ];

  constructor() {
    this.calculate();
  }

  calculate() {
    this.total = this.items
      .reduce((sum, item) => sum + item.price, 0);
  };

}
