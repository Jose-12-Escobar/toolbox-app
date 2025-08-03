import { Component } from '@angular/core';

@Component({
  selector: 'app-base64-encoder',
  template: `
    <h2>Base64 Encoder</h2>
    <textarea [(ngModel)]="text" rows="5" placeholder="Enter text..."></textarea>
    <button (click)="encode()">Encode</button>
    <textarea [value]="encoded" rows="5" readonly placeholder="Base64 output..."></textarea>
  `,
  styles: [
    `textarea { width: 100%; margin-bottom: 1rem; }`,
    `button { padding: 0.5rem 1rem; }`
  ]
})
export class Base64EncoderComponent {
  text = '';
  encoded = '';

  encode() {
    this.encoded = btoa(this.text);
  }
}