import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCreateBlog() {
    this.router.navigate(['new-blog']);
  }

}
