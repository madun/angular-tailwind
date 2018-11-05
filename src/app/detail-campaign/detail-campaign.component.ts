import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

interface resultCampaign {
  result: Object
}

@Component({
  selector: 'app-detail-campaign',
  providers: [DataService],
  templateUrl: './detail-campaign.component.html',
  styleUrls: ['./detail-campaign.component.scss']
})
export class DetailCampaignComponent implements OnInit {

  campaign$: Object;
  constructor(private data: DataService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.campaign$ = params.slug)
  }

  ngOnInit() {
    this.data.getCampaignDetail<resultCampaign>(this.campaign$).subscribe(
      data => this.campaign$ = data.result
    )
  }

}
