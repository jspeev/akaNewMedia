import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckedOutBooksComponent } from './checked-out-books/checked-out-books.component';
import {AuthGuard} from "../guards/auth.guard";
import {CheckedOutBooksHistoryComponent} from "./checked-out-books-history/checked-out-books-history.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: CheckedOutBooksComponent },
  { path: 'history',  component: CheckedOutBooksHistoryComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckedOutRoutingModule { }
