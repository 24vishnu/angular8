import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostData } from './post.model';

@Component({
  selector: 'app-making-http',
  templateUrl: './making-http.component.html',
  styleUrls: ['./making-http.component.scss']
})
export class MakingHttpComponent implements OnInit {

  loadedPosts = [];
  isFetching = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: PostData) {
    // Send Http request
    this.http.post<{name: string}>('https://ng-complete-guide-5dd47.firebaseio.com/posts.json', postData).subscribe(
      (responseResult) => console.log(responseResult),
      err => console.log(err)
    );
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {}

  private fetchPosts() {
    this.isFetching = true;
    this.http.get<{[key: string]: PostData}>('https://ng-complete-guide-5dd47.firebaseio.com/posts.json')
    .pipe(map( responseData => {
      const postsArray: PostData[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          // const element = responseData[key];
          postsArray.push({...responseData[key], id: key});
          // postsArray.push(element);
        }
      }
      return postsArray;
    }))
    .subscribe(
      result => {
        this.isFetching = false;
        console.log(result);
        this.loadedPosts = result;
      }
    );
  }
}
