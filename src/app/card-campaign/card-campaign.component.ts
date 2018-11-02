import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-card-campaign',
  providers: [DataService],
  templateUrl: './card-campaign.component.html',
  styleUrls: ['./card-campaign.component.scss']
})
export class CardCampaignComponent implements OnInit {

  campaigns$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getCampaign().subscribe(
      data => this.campaigns$ = data
    )
  }

}
