import { Component } from '@angular/core';
import { Intervention } from '../models/Intervention';
import { Observable } from 'rxjs';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-liste-interventions',
  templateUrl: './liste-interventions.component.html',
  styleUrls: ['./liste-interventions.component.css']
})
export class ListeInterventionsComponent {

  listIntervention$!: Observable<Intervention[]>;

  constructor(private interventionsService: InterventionsService) { }

  ngOnInit(): void {
    this.listIntervention$ = this.interventionsService.getAllInterventions();
  }
}
