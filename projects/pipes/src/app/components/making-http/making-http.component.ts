import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PostData } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-making-http',
  templateUrl: './making-http.component.html',
  styleUrls: ['./making-http.component.scss']
})
export class MakingHttpComponent implements OnInit, OnDestroy {

  loadedPosts: PostData[] = [];
  isFetching = false;
  error: string = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe( erroeMessage => this.error = erroeMessage);

    this.isFetching =  true;
    this.postService.fetchPosts().subscribe(
      result => {
        this.isFetching = false;
        this.loadedPosts = result;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error.message);
      }
    );
  }

  onCreatePost(postData: PostData) {
    // Send Http request
    this.postService.createAndStorePosts(
      postData.title,
      postData.content);
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

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
