import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Intervention } from '../models/Intervention';
import { InterventionsService } from '../services/interventions.service';

@Component({
  selector: 'app-add-inter',
  templateUrl: './add-inter.component.html',
  styleUrls: ['./add-inter.component.css']
})
export class AddInterComponent {
  formulaire!: FormGroup;
  currentIntervention$!: Observable<Intervention>;

  constructor(private formBuilder: FormBuilder, private interventionsService: InterventionsService, private router: Router){}

  ngOnInit():void{

    this.formulaire = this.formBuilder.group({
      nomTec: [null, [Validators.required, Validators.minLength(3)]],
      nomClient: [null, [Validators.required, Validators.minLength(1)]],
      adresseClient: [null, [Validators.required, Validators.minLength(1)]],
      marque: [null, [Validators.required, Validators.minLength(1)]],
      modele: [null, [Validators.required, Validators.minLength(1)]],
      dateMiseEnServcice: [null, [Validators.required, Validators.minLength(1)]],
      numSerie: [null, [Validators.required, Validators.minLength(1)]],
      description: [null, [Validators.required, Validators.minLength(1)]],
      tempsPasser: [null, [Validators.required, Validators.minLength(1)]]
    });

    this.currentIntervention$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        nomTec: formValue.nomTec,
        nomClient: formValue.nomClient,
        adresseClient: formValue.adresseClient,
        marque: formValue.marque,
        modele: formValue.modele,
        dateMiseEnService: formValue.dateMiseEnServcice,
        numSerie: formValue.numSerie,
        description: formValue.description,
        tempsPasser: formValue.tempPasser
      }
    )));
  }


 onSubmitForm(){
  let newIntervention: Intervention = {
    id: 0,
    nomTec: this.formulaire.get('nomTec')?.value,
    nomClient: this.formulaire.get('nomClient')?.value,
    adresseClient: this.formulaire.get('adresseClient')?.value,
    marque: this.formulaire.get('marque')?.value,
    modele: this.formulaire.get('modele')?.value,
    dateMiseEnService: this.formulaire.get('dateMiseEnService')?.value,
    numSerie: this.formulaire.get('numSerie')?.value,
    description: this.formulaire.get('description')?.value,
    tempsPasser: this.formulaire.get('tempsPasser')?.value
  };

  this.interventionsService.addIntervention(newIntervention).pipe(
    tap(() => this.router.navigateByUrl('/list'))
  ).subscribe();
 }
}
