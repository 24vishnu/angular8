import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
    isAuthenticated = false;
    private authSubscription: Subscription;

    constructor(
        private dataStorage: DataStorageService,
        private authService: AuthService) {}


    ngOnInit() {
        this.authSubscription = this.authService.user.subscribe(
            user => {
                this.isAuthenticated = !!user;
            }
        );
    }
    onSaveData() {
        this.dataStorage.storeRecipe();
    }

    onFetchData() {
        this.dataStorage.fetchData().subscribe();
    }

    onLogout() {
        this.authService.logout();
    }

    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
