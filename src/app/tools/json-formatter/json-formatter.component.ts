import { Component } from '@angular/core';

@Component({
  selector: 'app-json-formatter',
  template: `
    <h2>JSON Formatter</h2>
    <textarea [(ngModel)]="input" rows="8" placeholder="Paste JSON..."></textarea>
    <button (click)="format()">Format</button>
    <pre>{{ output }}</pre>
  `,
  styles: [
    `textarea { width: 100%; margin-bottom: 1rem; }`,
    `pre { background: #f3f4f6; padding: 1rem; white-space: pre-wrap; }`
  ]
})
export class JsonFormatterComponent {
  input = '';
  output = '';

  format() {
    try {
      this.output = JSON.stringify(JSON.parse(this.input), null, 2);
    } catch (e) {
      this.output = 'Invalid JSON';
    }
  }
}