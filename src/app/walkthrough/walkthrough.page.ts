import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walkthrough',
  templateUrl: './walkthrough.page.html',
  styleUrls: ['./walkthrough.page.scss'],
})
export class WalkthroughPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  gotoLogin() {
    this.router.navigate(['login']);
  }
}
