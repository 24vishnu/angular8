import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { Home1Component } from './notes/home1/home1.component';
import { User1Component } from './notes/user1/user1.component';


const appRoutes: Routes = [
    {path: '', component: Home1Component},
    {path: 'user/:id', component: User1Component},
    // {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children:
        [
            {path: ':id/:name', component: UserComponent},
        ]
    },
    {path: 'servers',
    // canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children:
      [
        {path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
        {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGaurd]},
      ]
    },
    // {path: 'not-found', component: PageNotFoundComponent},
    {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
    {path: '**', redirectTo: 'not-found'}
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
