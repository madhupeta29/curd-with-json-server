import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsList;
  constructor(private ps: PostService) { }

  ngOnInit() {
    this.itemsList = [];
  }

}
