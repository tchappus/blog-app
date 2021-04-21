import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorComponent } from './author/author.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'author-list', component: AuthorListComponent },
  { path: 'blog-list', component: BlogListComponent },
  { path: 'post-list', component: PostListComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'post', component: PostComponent },
  { path: 'new-author', component: NewAuthorComponent },
  { path: 'new-blog', component: NewBlogComponent },
  { path: 'new-post', component: NewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
