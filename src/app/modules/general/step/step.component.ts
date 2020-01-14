import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachService } from './../../application/services/teach.service';
@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
  idStep:any;
  detailTeach:any;
  constructor(private route: ActivatedRoute,
    private router: Router,public teachservice:TeachService) { }

  ngOnInit() {
    this.route.pathFromRoot[2].params.subscribe(res =>{
      this.idStep = res.idStep;
      this.detailTeach =  this.teachservice.getServices()[this.idStep - 1];
    })


 
  }

}
