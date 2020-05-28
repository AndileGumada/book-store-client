import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookService } from './sevices/book.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes : Routes =[

  {path : 'books', component : BookListComponent},
  {path : 'category/:id', component : BookListComponent},
  {path : '' ,redirectTo: '/books' ,pathMatch: 'full' },
  {path : '**', component : PageNotFoundComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes )
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
