import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'HOME', url: '/tabs/home', icon: 'home' },
    { title: 'NOTIFICATIONS', url: '/tabs/notifications', icon: 'notifications' },
    { title: 'FAVORITES', url: '/tabs/favorites', icon: 'heart' },
    { title: 'WALLET', url: '/tabs/account', icon: 'wallet' },
    { title: 'CUSTOMER SUPPORT', url: '/tabs/support', icon: 'people' },
    { title: 'SETTINGS', url: '/tabs/settings', icon: 'cog' },
  ];
  constructor() {}
}
