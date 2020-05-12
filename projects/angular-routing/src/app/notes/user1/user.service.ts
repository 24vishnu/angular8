import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class UserService {
    // activatedEvent = new EventEmitter<boolean>();
    activatedEvent = new Subject<boolean>();
}
