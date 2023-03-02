import { Component } from '@angular/core';
import { items } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products = items;
  total = 0;

  selected(id: number) {
    this.products[id].isSelected = !this.products[id].isSelected;

    if (!this.products[id].isSelected) {
      this.total += this.products[id].price
    } else {
      this.total -= this.products[id].price
    }
    
  }
}
