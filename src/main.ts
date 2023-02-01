import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

import { ElasticContainerModule } from './elastic-container/elastic-container.module';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, ElasticContainerModule],
  template: `
    <h1>Elastic container demo</h1>
    <p>
      <button (click)="add()">Add</button>
      <button (click)="remove()">Remove</button>
    </p>
    <elastic-container>
      <div contenteditable>Try editing me</div>
      <div *ngFor="let item of items">{{item}}</div>
    </elastic-container>
  `,
})
export class App {
  items = [];

  add() {
    this.items = this.items.concat('Item');
  }

  remove() {
    this.items.pop();
  }
}

bootstrapApplication(App);
