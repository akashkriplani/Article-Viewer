//Module Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { HttpModule } from "@angular/http";

//Component Imports
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//Services Imports
import { ArticleService } from './services/article.service';


const appRoutes : Routes = [
  {
    path: '',
    component:ArticleListComponent
  },
  {
    path:'article/:id',
    component: ArticleDetailsComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpModule ],
  declarations: [ AppComponent, ArticleListComponent, ArticleDetailsComponent, NavbarComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ ArticleService ]
})
export class AppModule { }
