import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departement } from '../model/departemnet';
import {Observable, map} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  localUrl:string = environment.basurl + "/departements" ;

  constructor( private http :HttpClient) { }

  ajouterdepartement(dep :Departement):Observable<Departement>{
    return this.http.post<Departement>(`${this.localUrl}/save`, dep)

  }

  deletedepartement(id:number):Observable<Departement> {
    return this.http.delete<Departement>(`${this.localUrl}/delet/${id}`)
}

finddepartement(id: number): Observable<Departement> {
  return this.http.get(`${this.localUrl}/getbyid/${id}`).pipe(
    map((response:any) => response as Departement)
  );
}

listedepartements():Observable<Array <Departement>> {
  return this.http.get<Array <Departement>> (`${this.localUrl}/getall`)
}
}
