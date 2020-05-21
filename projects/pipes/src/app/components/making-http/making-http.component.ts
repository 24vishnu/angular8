import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PostData } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-making-http',
  templateUrl: './making-http.component.html',
  styleUrls: ['./making-http.component.scss']
})
export class MakingHttpComponent implements OnInit {

  loadedPosts: PostData[] = [];
  isFetching = false;
  error: string = null;
  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.isFetching =  true;
    this.postService.fetchPosts().subscribe(
      result => {
        this.isFetching = false;
        this.loadedPosts = result;
      },
      error => {
        this.error = error.message;
        console.log(error.message);
      }
    );
  }

  onCreatePost(postData: PostData) {
    // Send Http request
    this.postService.createAndStorePosts(
      postData.title,
      postData.content)
      .subscribe(
        (responseResult) => console.log(responseResult),
        err => console.log(err)
    );
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts().subscribe(
      result => {
        this.isFetching = false;
        this.loadedPosts = result;
      },
      error => {
        this.error = error.message;
        console.log(error.message);
      }
    );
  }

  onClearPosts() {
    this.postService.deletePosts()
      .subscribe(
        res => {
          this.loadedPosts = [];
        }
      );
  }

}
