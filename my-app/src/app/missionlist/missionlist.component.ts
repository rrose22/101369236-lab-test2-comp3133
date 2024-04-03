import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})

export class MissionlistComponent {
  missions : Mission [] = [];
  
  constructor(private spacexapiService:SpacexapiService , private rought : Router){
    this.getSpaceData()
  }

  getSpaceData(){
    this.spacexapiService.getAllData().subscribe(resp =>{
      this.missions = resp
      console.log(resp)
    })
  } 
  showDetails(flight_number : number){
    this.rought.navigate(['/missionDetails' , flight_number])
  }
  
}
