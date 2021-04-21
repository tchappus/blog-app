import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AuthorComponent } from './author/author.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { NewPostComponent } from './new-post/new-post.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewBlogComponent } from './new-blog/new-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AuthorComponent,
    BlogListComponent,
    AuthorListComponent,
    PostComponent,
    PostListComponent,
    NewPostComponent,
    NewAuthorComponent,
    NewBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
