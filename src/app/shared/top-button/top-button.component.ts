import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-button',
  templateUrl: './top-button.component.html',
  styleUrls: ['./top-button.component.scss']
})
export class TopButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoTop() {
    window.scrollTo(0, 0);
    // document.body.scrollTo(0, 0);
  }

}
