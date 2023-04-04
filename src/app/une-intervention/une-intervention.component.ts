import { Component, Input, OnInit } from '@angular/core';
import { Intervention } from '../models/Intervention';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-une-intervention',
  templateUrl: './une-intervention.component.html',
  styleUrls: ['./une-intervention.component.css']
})
export class UneInterventionComponent {
  @Input() theInter!: Intervention;
  uneInter!: Intervention;

  constructor(private route: ActivatedRoute, private router: Router, private interventionsService: InterventionsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
  if (id!==undefined) {
    this.interventionsService.getInterventionById(+id).subscribe(cd => this.uneInter = cd);
  }
  else{
  this.uneInter = this.theInter;
  }
  }
 
}
