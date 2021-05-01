import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-allemployees',
  templateUrl: './allemployees.component.html',
  styleUrls: ['./allemployees.component.css']
})
export class AllemployeesComponent implements OnInit {
  public users:any;
  constructor(private companyService :CompanyServiceService) { }

  ngOnInit(): void {
    //this.getCompany();
    this.companyService.getUsers().subscribe(data =>{
      this.users = data;
    })
  }
    
 public removeUser(userName:string){
  let response = this.companyService.deleteUser(userName);
    response.subscribe(data => this.users = data);
  }
 
 


// private getCompany(){
//   this.companyService.getUsers().subscribe(data =>{
//     this.users = data;
//   })
//}

}
