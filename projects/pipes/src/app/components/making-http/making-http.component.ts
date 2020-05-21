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

  constructor(private http: HttpClient, private postService: PostService) { }

  ngOnInit() {
    this.postService.fetchPosts();
  }

  onCreatePost(postData: PostData) {
    // Send Http request
    this.postService.createAndStorePosts(postData.title, postData.content);
  }

  onFetchPosts() {
    this.postService.fetchPosts();
  }

  onClearPosts() {}

}
