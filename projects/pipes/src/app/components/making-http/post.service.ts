import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PostData } from './post.model';

@Injectable({
    providedIn: 'root'
})

// tslint:disable:object-literal-key-quotes
export class PostService {
    constructor(private http: HttpClient) {}

    createAndStorePosts(title: string, content: string) {
        // code logic...
        const postData: PostData = {'title': title, 'content': content};
        this.http.post<{name: string}>(
                'https://ng-complete-guide-5dd47.firebaseio.com/posts.json',
                postData
            ).subscribe(
                (responseResult) => console.log(responseResult),
                err => console.log(err)
            );
    }

    fetchPosts() {
        // code logic...
        this.http.get<{[key: string]: PostData}>('https://ng-complete-guide-5dd47.firebaseio.com/posts.json')
        .pipe(map( responseData => {
        const postsArray: PostData[] = [];
        for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key});
            }
        }
        return postsArray;
        })
        )
        .subscribe(
        result => {
        }
        );
    }
}
