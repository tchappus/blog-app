import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Author, Blog, Post } from './types';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(
    private http: HttpClient
  ) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('Author');
  }

  getAuthor(id: number): Observable<Author> {
    return this.http.get<Author>(`Author/${id}`);
  }

  createAuthor(author: Author): Observable<Author> {
    return this.http.post<Author>('Author', author);
  }

  updateAuthor(author: Author): Observable<any> {
    return this.http.put<any>(`Author/${author.id}`, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(`Author/${id}`)
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('Blog');
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(`Blog/${id}`);
  }

  createBlog(Blog: Blog): Observable<Blog> {
    return this.http.post<Blog>('Blog', Blog);
  }

  updateBlog(Blog: any): Observable<any> {
    return this.http.put<any>(`Blog/${Blog.id}`, Blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete<any>(`Blog/${id}`);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('Post');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`Post/${id}`);
  }

  createPost(Post: Post): Observable<Post> {
    return this.http.post<Post>('Post', Post);
  }

  updatePost(Post: any): Observable<any> {
    return this.http.put<any>(`Post/${Post.id}`, Post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`Post/${id}`)
  }
}
