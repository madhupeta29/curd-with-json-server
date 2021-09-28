import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {


  text = "Harinatha";
  isShow: boolean  = true;
  constructor() { }

  ngOnInit() {
    this.text += "harinata"
  }

  toggle() {
    this.isShow = !this.isShow;
  }

}
