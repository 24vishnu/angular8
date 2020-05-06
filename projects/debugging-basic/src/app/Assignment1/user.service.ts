import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
    activeUser = ['vishnu', 'nikhil'];
    inactiveUser = ['Udal singh', 'akhilesh'];

    constructor(private counterService: CounterService) {}

    setActive(id: number) {
        this.activeUser.push(this.inactiveUser[id]);
        this.inactiveUser.splice(id, 1);
        this.counterService.incrementInactiveToActive();
    }

    setInActive(id: number) {
        this.inactiveUser.push(this.activeUser[id]);
        this.activeUser.splice(id, 1);
        this.counterService.incrementActiveToInactive();
    }
}
