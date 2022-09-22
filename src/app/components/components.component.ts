import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {

    iframeHeight: string = '4664px';

    constructor() {
    }

    ngOnInit() {
    }
    ngOnDestroy() {
    }

    setIframeHeight() {
        if (!this.detectmob()) {
            this.iframeHeight = (window.innerWidth * 2000 / 774) + 'px';

        } else {
            this.iframeHeight = (window.innerWidth * 1830 / 640) + 'px';
        }
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
