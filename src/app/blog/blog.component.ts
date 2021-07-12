import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  blogPosts:any[] = [{ "path" : "Test.md", name: "Test" }];

  constructor(private markdownService: MarkdownService,
            ) { }

  ngOnInit(): void {
  }

}
