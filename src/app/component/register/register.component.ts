import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/company';
import { CompanyServiceService } from 'src/app/company-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service:CompanyServiceService) { }
 company :Company= new Company();
 msg:any;
  ngOnInit(): void {
  }
  public registerNow(){
  let response= this.service.userRegisteration(this.company);
  response.subscribe(data =>{
    this.msg=data;
   })
  }

}
