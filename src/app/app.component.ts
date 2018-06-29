import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-root',
  template: `
    {{title}}
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'dashboard';
}
