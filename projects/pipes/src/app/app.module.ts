import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MakingHttpComponent } from './components/making-http/making-http.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';
import { AuthInterceptorService } from './components/making-http/auth-interceptor.service';
import { LoggingInterceptorService } from './components/making-http/logging-intecptor.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    ShortenPipe,
    FilterPipe,
    MakingHttpComponent,
    PipeExampleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
