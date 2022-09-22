import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss']
})
export class LogisticsComponent implements OnInit, OnDestroy {

  iframeHeight: string = '4664px';

  pageIndex = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(res => {
      console.log(res);

      this.pageIndex = res['page'];
    });
  }
  ngOnDestroy() {
  }

  setIframeHeight() {
    switch (this.pageIndex) {
      case '1': {
        if (!this.detectmob()) {
          this.iframeHeight = (window.innerWidth * 3500 / 774) + 'px';

        } else {
          this.iframeHeight = (window.innerWidth * 3500 / 640) + 'px';
        }
        break;
      }
      case '2': {
        if (!this.detectmob()) {
          this.iframeHeight = (window.innerWidth * 2000 / 774) + 'px';

        } else {
          this.iframeHeight = (window.innerWidth * 1830 / 640) + 'px';
        }
        break;
      }
      case '3': {
        if (!this.detectmob()) {
          this.iframeHeight = (window.innerWidth * 2100 / 774) + 'px';

        } else {
          this.iframeHeight = (window.innerWidth * 1950 / 640) + 'px';
        }
        break;
      }
    }

    console.log(this.iframeHeight);
  }

  detectmob() {
    if (navigator.userAgent.match(/Android/i)
      // || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      // || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
    ) {
      return true;
    }
    else {
      return false;
    }
  }
}
