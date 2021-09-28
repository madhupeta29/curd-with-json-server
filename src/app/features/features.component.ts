import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Features } from '../features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  Personaldata:Features[];
  searchValue:string;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.httpClient.get('./assets/features.json').subscribe((result:Features[]) =>{
      this.Personaldata = result;
    })
  }

}
