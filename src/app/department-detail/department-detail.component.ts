import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      You selected Department ID = {{departmentID}}<br/>


        <button (click) = showOverview() >Overview</button>
        <button (click) = showContact()>Contact</button>
        <router-outlet></router-outlet>
      <br/>
      
      <!--<button (click)="goPrevious(departmentID)">Previous</button>
      <button (click)="goNext(departmentID)">Next</button>-->
      
    </p>
    <div>
        <button (click)="goToDepartment()">Back</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
public departmentID;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      //let id = parseInt(this.route.snapshot.paramMap.get('id')); instead of snapshot we use paramap observable.
      //this.departmentID = id;
      this.route.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.departmentID = id;
      })
   }

   goPrevious(departmentID){
       let previousID = this.departmentID -1;
       this.router.navigate(['/departments', previousID]);
   }

   goNext(departmentID){
    let nextID = this.departmentID +1;
    this.router.navigate(['/departments', nextID]);
   }

   goToDepartment(){
      let selectedID = this.departmentID ? this.departmentID : null;
      //this.router.navigate(['/departments', {id: selectedID}]);
      this.router.navigate(['../', {id: selectedID}], {relativeTo: this.route});
   }

   showOverview(){
        this.router.navigate(['overview'],{relativeTo : this.route});
   }

   showContact(){
        this.router.navigate(['contact'],{relativeTo: this.route});
   }
   

}
