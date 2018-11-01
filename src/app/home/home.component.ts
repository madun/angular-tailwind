import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  providers: [DataService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  campaigns$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCampaign().subscribe(
      data => this.campaigns$ = data.result
    )
  }

}
