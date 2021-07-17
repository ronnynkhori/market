import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  slideOpts = {
    slidesPerView: 3.1,
  }

  slideOpts2 = {
    slidesPerView: 4.1,
  }

  ngOnInit() {}

  notifications() {
    this.router.navigate(['notifications'])
  }

  detailedView() {
    this.router.navigate(['item-detail'], { replaceUrl: false })
  }

  viewAll() {
    this.router.navigate(['item-list'], { replaceUrl: false })
  }
}
