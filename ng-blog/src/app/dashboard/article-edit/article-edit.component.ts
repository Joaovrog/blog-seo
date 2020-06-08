import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { DashboardService } from '../dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {
  article: Article = null;


  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const key: string = params.key;
      this.getArticle(key);
    });
  }

  getArticle(key: string): void {
    this.dashboardService.getArticle(key).subscribe( (article: Article) => {
      if(article === null) {
        this.router.navigateByUrl('404');
        return;
      }
      this.article = article;
    });
  };

}
