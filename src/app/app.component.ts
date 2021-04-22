import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';
  tabs: any[] = [
    { title: 'Posts', route: 'post-list', active: true, removable: false },
    { title: 'Blogs', route: 'blog-list', active: false, removable: false },
    { title: 'Authors', route: 'author-list', active: false, removable: false }
  ];

  tabTemplates: any = {
    'new-post': { title: 'New Post', route: 'new-post', removable: true },
    'new-blog': { title: 'New Blog', route: 'new-blog', removable: true },
    'new-author': { title: 'New Author', route: 'new-author', removable: true }
  }

  constructor(
    private router: Router
  ) {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      ).subscribe((navEnd) => {
        const url = (navEnd as NavigationEnd).urlAfterRedirects.substr(1);
        const tab = this.tabs.find(tab => tab.route === url);
        if (tab) {
          tab.active = true;
        } else if (this.tabTemplates[url]) {
          this.tabs.push({ active: true, ...this.tabTemplates[url]});
        } else {
          this.tabs[0].active = true;
          this.router.navigate([this.tabs[0].route]);
        }
      });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  }

  selectTabHandler(tab: any): void {
    tab.active = true;
    this.router.navigate([tab.route]);
  }

}
