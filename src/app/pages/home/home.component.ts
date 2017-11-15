import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  homeTitle = 'this is a home title';
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToTest() {
    this.router.navigate(['testparam', 5, 'value']);
    // testparam/5
  }

}
