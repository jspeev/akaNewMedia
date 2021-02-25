import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import { CheckedOutBooksHistoryComponent } from './checked-out-books-history/checked-out-books-history.component';
import { LibraryMatModule } from '../library-mat.module';
import { CheckedOutRoutingModule } from './checked-out-routing.module';

@NgModule({
  declarations: [
    CheckedOutBooksComponent,
    CheckedOutBooksHistoryComponent
  ],
  exports: [
    CheckedOutBooksComponent,
    CheckedOutBooksHistoryComponent
  ],
  imports: [
    CommonModule,
    CheckedOutRoutingModule,
    LibraryMatModule
  ]
})
export class CheckedOutModule { }
