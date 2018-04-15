import { Component, AfterViewInit } from '@angular/core';
import {ArticleService} from "../services/article.service";
import {Article} from "../models/article";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements AfterViewInit {

  public article: Article = new Article();
  public id: number;
  public error: boolean = false;

  constructor(
    private articleService:ArticleService, 
    private route:ActivatedRoute, 
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
  }

  ngAfterViewInit() {
    this.articleService.getArticleDetails(this.id).subscribe(
      article => {
      this.article = article;
    }, error => {
      if(error.status == 404) {
        this.error = true;
      }
    });
  }
}