import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { PostData } from './post.model';

@Injectable({
    providedIn: 'root'
})

// tslint:disable:object-literal-key-quotes
export class PostService {
    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    createAndStorePosts(title: string, content: string) {
        // code logic...
        const postData: PostData = {'title': title, 'content': content};
        return this.http.post<{name: string}>(
                'https://ng-complete-guide-5dd47.firebaseio.com/posts.json',
                postData
            ).subscribe(
                (responseResult) => console.log(responseResult),
                err => this.error.next(err.message)
            );
    }

    fetchPosts() {
        // code logic...
        let setParam = new HttpParams();
        setParam = setParam.append('id', '1');
        setParam = setParam.append('name', 'vishnu');

        return this.http.get<{[key: string]: PostData}>(
            'https://ng-complete-guide-5dd47.firebaseio.com/posts.json',
            {
                // set custom HttpHeader
                headers: new HttpHeaders({'Custom-header': 'hello vishnu'}),
                // set HttpParam in url
                // params: new HttpParams().set('id', 'one')
                // set group of HttpParams
                params: setParam
            })
        .pipe(map( responseData => {
            const postsArray: PostData[] = [];
            for (const key in responseData) {
                if (responseData.hasOwnProperty(key)) {
                postsArray.push({...responseData[key], id: key});
                }
            }
            return postsArray;
            }),
            catchError(errorRes => {
                return throwError(errorRes);
            })
        );
    }

    deletePosts() {
        return this.http.delete(
            'https://ng-complete-guide-5dd47.firebaseio.com/posts.json'
            );
    }
}
