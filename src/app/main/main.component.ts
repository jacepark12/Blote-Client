import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from '../_animation/index';

import {VoteService} from '../service/vote.service';

import * as web3 from 'Web3';

declare const $ : any;

@Component({
  moduleId: module.id.toString(),
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css', '../../assets/stylesheets/static.css'],
  animations: [fadeInAnimation],
  host:{'[@fadeInAnimation':''}
})
export class MainComponent implements OnInit {

  constructor(private vote:VoteService) { }

  ngOnInit() {
    $('#particle-background').particleground({
            dotColor: '#CFD8DC',
            lineColor: '#CFD8DC',
            directionX: 'center'
        });
    console.log(new web3().version.api);
    var web3 = new web3(); 
    console.log(web3);

  }

  about() {
    this.vote.vote();
    //var appUriScheme = "intent://#Intent;package=blote.org.bloteAndroid;scheme=callMyApp;end;";
    //document.location.href = appUriScheme;
  }
  

}
