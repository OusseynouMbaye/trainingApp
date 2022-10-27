import { Component } from '@angular/core';
import { Item } from './item';
import { ITEMS } from './mock-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Training Application for Swimmer';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems: Item[] = ITEMS;

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }
}
