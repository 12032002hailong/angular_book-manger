import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { BookReducer } from './books/book.reducer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-manager';
}
