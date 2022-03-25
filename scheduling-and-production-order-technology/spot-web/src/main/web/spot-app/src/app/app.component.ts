import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {first, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpClient]
})
export class AppComponent {
  title = 'spot-app';
  message = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8081/message').pipe(
      first(),
      tap(result => console.log('Message received from the server: ', result)),
      map(result => this.message = (result as any).message)
    ).subscribe();
  }
}