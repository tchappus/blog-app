import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { BlogService } from './blog.service';
import { Author, Blog, Post } from './types';

describe('BlogService', () => {
  let service: BlogService;
  let httpClientSpy: { get: jasmine.Spy, put: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    service = new BlogService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAuthors', () => {
    const expected: Author[] = [
      {
        id: 0,
        firstName: 'foo',
        lastName: 'bar',
        userName: 'foobar',
        joinTimestamp: '2021-01-01',
        blogs: []
      }
    ]
    
    httpClientSpy.get.and.returnValue(of(expected))

    service.getAuthors().subscribe(
      x => expect(x).toEqual(expected, 'expected authors'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get.calls.first().args[0]).toEqual('Author');
  });

  it('should getAuthor', () => {
    const expected: Author = {
        id: 0,
        firstName: 'foo',
        lastName: 'bar',
        userName: 'foobar',
        joinTimestamp: '2021-01-01',
        blogs: []
    };
    
    httpClientSpy.get.and.returnValue(of(expected))

    service.getAuthor(0).subscribe(
      x => expect(x).toEqual(expected, 'expected author'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get.calls.first().args[0]).toEqual('Author/0');
  });

  it('should createAuthor', () => {
    const newAuthor: Author = {
        firstName: 'foo',
        lastName: 'bar',
        userName: 'foobar'
    };

    const expected: Author = {
        id: 1,
        joinTimestamp: '',
        ...newAuthor
    };
    
    httpClientSpy.post.and.returnValue(of(expected));

    service.createAuthor(newAuthor).subscribe(
      x => expect(x).toEqual(expected, 'expected author'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.post.calls.first().args[0]).toEqual('Author');
  });

  it('should updateAuthor', () => {
    const author: Author = {
        id: 1,
        joinTimestamp: '',
        firstName: 'foo',
        lastName: 'bar',
        userName: 'foobar'
    };
    
    httpClientSpy.put.and.returnValue(of(author));

    service.updateAuthor(author).subscribe(
      x => expect(x).toEqual(author, 'expected author'),
      fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.put.calls.first().args[0]).toEqual('Author/1');
  });

  it('should deleteAuthor', () => {
    httpClientSpy.delete.and.returnValue(of({}));

    service.deleteAuthor(0).subscribe(
      () => {},
      fail
    );
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.delete.calls.first().args[0]).toEqual('Author/0');
  });

  it('should getBlogs', () => {
    const expected: Blog[] = [
      {
        id: 0,
        name: 'foo',
        createdTimestamp: '2021-01-01',
        authorId: 0
      }
    ]
    
    httpClientSpy.get.and.returnValue(of(expected))

    service.getBlogs().subscribe(
      x => expect(x).toEqual(expected, 'expected Blogs'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get.calls.first().args[0]).toEqual('Blog');
  });

  it('should getBlog', () => {
    const expected: Blog = {
        id: 0,
        name: 'foo',
        createdTimestamp: '2021-01-01',
        authorId: 0
      };
    
    httpClientSpy.get.and.returnValue(of(expected))

    service.getBlog(0).subscribe(
      x => expect(x).toEqual(expected, 'expected Blog'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get.calls.first().args[0]).toEqual('Blog/0');
  });

  it('should createBlog', () => {
    const newBlog: Blog = {
      name: 'foo',
      authorId: 0
    }

    const expected: Blog = {
        id: 0,
        createdTimestamp: '',
        ...newBlog
    };
    
    httpClientSpy.post.and.returnValue(of(expected));

    service.createBlog(newBlog).subscribe(
      x => expect(x).toEqual(expected, 'expected Blog'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.post.calls.first().args[0]).toEqual('Blog');
  });

  it('should updateBlog', () => {
    const Blog: Blog = {
      id: 0,
      name: 'foo',
      createdTimestamp: '2021-01-01',
      authorId: 0
    };
    
    httpClientSpy.put.and.returnValue(of(Blog));

    service.updateBlog(Blog).subscribe(
      x => expect(x).toEqual(Blog, 'expected Blog'),
      fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.put.calls.first().args[0]).toEqual('Blog/0');
  });

  it('should deleteBlog', () => {
    httpClientSpy.delete.and.returnValue(of({}));

    service.deleteBlog(0).subscribe(
      () => {},
      fail
    );
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.delete.calls.first().args[0]).toEqual('Blog/0');
  });

  
  it('should getPosts', () => {
    const expected: Post[] = [
      {
        id: 0,
        title: 'foo',
        markdownText: '',
        isPublic: true,
        isDraft: false,
        attachmentUrls: '',
        postedTimestamp: '2021-01-01',
        blogId: 0,
        authorId: 0
      }
    ]
    
    httpClientSpy.get.and.returnValue(of(expected))

    service.getPosts().subscribe(
      x => expect(x).toEqual(expected, 'expected Posts'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get.calls.first().args[0]).toEqual('Post');
  });

  it('should getPost', () => {
    const expected: Post = {
      id: 0,
      title: 'foo',
      markdownText: '',
      isPublic: true,
      isDraft: false,
      attachmentUrls: '',
      postedTimestamp: '2021-01-01',
      blogId: 0,
      authorId: 0
    };
    
    httpClientSpy.get.and.returnValue(of(expected))

    service.getPost(0).subscribe(
      x => expect(x).toEqual(expected, 'expected Post'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.get.calls.first().args[0]).toEqual('Post/0');
  });

  it('should createPost', () => {
    const newPost: Post = {
      title: 'foo',
      markdownText: '',
      isPublic: true,
      isDraft: false,
      attachmentUrls: '',
      blogId: 0,
      authorId: 0
    }

    const expected: Post = {
        id: 0,
        postedTimestamp: '',
        ...newPost
    };
    
    httpClientSpy.post.and.returnValue(of(expected));

    service.createPost(newPost).subscribe(
      x => expect(x).toEqual(expected, 'expected Post'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.post.calls.first().args[0]).toEqual('Post');
  });

  it('should updatePost', () => {
    const Post: Post = {
      id: 0,
      title: 'foo',
      markdownText: '',
      isPublic: true,
      isDraft: false,
      attachmentUrls: '',
      postedTimestamp: '2021-01-01',
      blogId: 0,
      authorId: 0
    };
    
    httpClientSpy.put.and.returnValue(of(Post));

    service.updatePost(Post).subscribe(
      x => expect(x).toEqual(Post, 'expected Post'),
      fail
    );
    expect(httpClientSpy.put.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.put.calls.first().args[0]).toEqual('Post/0');
  });

  it('should deletePost', () => {
    httpClientSpy.delete.and.returnValue(of({}));

    service.deletePost(0).subscribe(
      () => {},
      fail
    );
    expect(httpClientSpy.delete.calls.count()).toBe(1, 'one call');
    expect(httpClientSpy.delete.calls.first().args[0]).toEqual('Post/0');
  });

});
