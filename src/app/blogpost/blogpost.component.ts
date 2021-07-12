import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss']
})

export class BlogpostComponent implements OnInit {

  path: string = "";

  constructor(private markdownService: MarkdownService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.path = "assets/" + String(this.route.snapshot.paramMap.get('path'));
  }
}
