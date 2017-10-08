import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';

// import { HTTP_PROVIDERS } from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ GithubService ]
})
export class AppComponent {
  title = 'app';
}
