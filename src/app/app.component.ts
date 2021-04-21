import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog-app';
  tabs: any[] = [
    { title: 'Posts', route: 'post-list', active: true },
    { title: 'Blogs', route: 'blog-list' },
    { title: 'Authors', route: 'author-list' }
  ];

  constructor(
    private router: Router
  ) {
    this.router.navigate(['post-list']);
  }
 
  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }

  selectTabHandler(tab: any): void {
    this.router.navigate([tab.route]);
    tab.active = true;
  }

}
