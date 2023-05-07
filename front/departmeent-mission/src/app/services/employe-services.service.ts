import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee.model';
import {Observable, map} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EmployeServicesService {
  localUrl:string = environment.basurl + "/employee"
  constructor(private http :HttpClient) { }

  ajouterEmployee(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.localUrl}/save`,emp)
  }

  listerEmployee():Observable<Employee[]>{
      return this.http.get<Employee[]> (`${this.localUrl}/lister`);
  }

  deleteEmployee(id:number):Observable<Employee> {
    return this.http.delete<Employee>(`${this.localUrl}/delet/${id}`)
}

findEmployee(id: number): Observable<Employee> {
  return this.http.get(`${this.localUrl}/getbyid/${id}`).pipe(
    map((response:any) => response as Employee)
  );
}
}
