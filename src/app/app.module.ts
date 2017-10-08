import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile.component'
// import {GithubService } from './services/githubservice'; 
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers:[
    // GithubService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
