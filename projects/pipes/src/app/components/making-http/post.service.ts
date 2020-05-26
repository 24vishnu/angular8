import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Subject, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

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
                postData,
                {
                    observe: 'response',
                    responseType: 'json' // here text is not allowed becouse we specify the generic like {name: string }
                }
            ).subscribe(
                (responseResult) => {
                    // here we can use body, status, header, ok, statusText, url snd type
                    console.log(responseResult);
                },
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
                params: setParam,
                responseType: 'json' // here text is not allowed becouse we specify the generic like {[key: string]: PostData}
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
            'https://ng-complete-guide-5dd47.firebaseio.com/posts.json',
            {
                observe: 'events',
                responseType: 'text' // json is default response type, text, blob etc
            }
            )
            .pipe(tap(event => {
                console.log(event);
                // event have 5 types:
                // 0 => HttpEventType.Sent
                // 1 => HttpEventType.UploadProgress
                // 2 => HttpEventType.ResponseHeader
                // 3 => HttpEventType.DownloadProgress
                // 4 => HttpEventType.Response
                // 5 => HttpEventType.User
                if (event.type === HttpEventType.Sent) {
                    // ...
                }
            }));
    }
}
