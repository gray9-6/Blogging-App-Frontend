/**
 * PostService is a service class responsible for handling HTTP requests related to posts in the frontend application.
 * It provides methods for creating new posts and retrieving all existing posts from the backend server.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// The base URL of the backend application
const BASIC_URL = 'http://localhost:8080/';  // hamari backend app ka url

@Injectable({
  providedIn: 'root'
})
export class PostService {

  /**
   * Constructs a new instance of the PostService.
   *
   * @param http An instance of HttpClient used for making HTTP requests.
   */
  // api's ko call karne ke liye HttpClient ko inject kar lenge
  constructor(private http: HttpClient) { }

  /**
   * Creates a new post by sending a POST request to the backend server.
   *
   * @param data The data representing the new post to be created.
   * @returns An Observable that emits the response from the server.
   */
  createNewPost(data: any): Observable<any> {
    return this.http.post(BASIC_URL + `api/posts` + `/savePost`, data);
  }

  /**
   * Retrieves all posts from the backend server by sending a GET request.
   *
   * @returns An Observable that emits the response containing all posts from the server.
   */
  getAllPosts(): Observable<any> {
    return this.http.get(BASIC_URL + `api/posts` + `/getPosts`);
  }
}
