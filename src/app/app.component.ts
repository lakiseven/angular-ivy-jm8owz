import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
   template: `
    <div class="card">
      <app-card-one></app-card-one>
      <app-card-two></app-card-two>
    </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}

