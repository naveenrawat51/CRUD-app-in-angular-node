import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService],
})
export class AppComponent {
  title = 'CRUD operations in Angular 5';
}
