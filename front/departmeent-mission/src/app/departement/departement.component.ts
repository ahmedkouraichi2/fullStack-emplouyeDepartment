import { Component, OnInit } from '@angular/core';
import { Departement } from '../model/departemnet';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  departements! :Array <Departement>;
  constructor( private  departementService :DepartementService){

  }
  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
      this.departementService.listedepartements().subscribe(
        {
          next: (data:any)  =>{this.departements = data ;
             console.log(data);

          },
          error : (err)=>{
            console.log(err)
         }
        
        }
      )
  }

  deleteData(id:number){
     if(id != null || id != undefined){
       this.departementService.deletedepartement(id).subscribe(
         res => {
          this.reloadData();
         }
       )
     }else{
        alert("no id ");
     }
  }

}
