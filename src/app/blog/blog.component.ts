import { Component, OnInit } from '@angular/core';
import { blogs } from '../blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

	blogs = blogs;

  constructor() { }

  ngOnInit(): void {
  }

}
