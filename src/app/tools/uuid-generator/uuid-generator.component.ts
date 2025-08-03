import { Component } from '@angular/core';

@Component({
  selector: 'app-uuid-generator',
  template: `
    <h2>UUID Generator</h2>
    <button (click)="generate()">Generate UUID</button>
    <p *ngIf="uuid">{{ uuid }}</p>
  `,
  styles: [
    `button { padding: 0.5rem 1rem; margin-bottom: 1rem; }`,
    `p { font-family: monospace; font-size: 1.2rem; }`
  ]
})
export class UuidGeneratorComponent {
  uuid = '';

  generate() {
    this.uuid = crypto.randomUUID();
  }
}