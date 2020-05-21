import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MakingHttpComponent } from './components/making-http/making-http.component';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
