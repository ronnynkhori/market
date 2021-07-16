import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.page.html',
  styleUrls: ['./startscreen.page.scss'],
})
export class StartscreenPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(()=>{
      this.router.navigate(['walkthrough'])
    }, 3000);
  }
}
