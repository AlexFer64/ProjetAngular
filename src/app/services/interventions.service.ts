import { Injectable } from '@angular/core';
import { Intervention } from '../models/Intervention';
import { map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  constructor(private http: HttpClient) { }

  getAllInterventions(): Observable<Intervention[]> {
      return this.http.get<Intervention[]>('http://localhost:3001/Intervention');
  }

  getInterventionById(id: number): Observable<Intervention>{
    const cd = this.http.get<Intervention>('http://localhost:3001/Intervention/' + id);
    if(cd === undefined){
    throw new Error("CD non trouvé");
    }
   return cd;
  }

  addIntervention(cd: Intervention): Observable<Intervention>{
    return this.getAllInterventions().pipe(
      map(cds => [...cds].sort((a, b) => a.id - b.id)),
      map(cds_tries => cds_tries[cds_tries.length - 1]),
      map(cd_max => (cd.id = cd_max.id + 1)),
      switchMap(() => this.http.post<Intervention>('http://localhost:3001/Intervention', cd))
    );
  }
}
