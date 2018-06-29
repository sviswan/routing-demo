import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styles: []
})
export class DepartmentListComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  public departments = [
     {"id": 1, "name": "Angular"},
     {"id": 2, "name": "BootStrap"},
     {"id": 3, "name": "MVC"},
     {"id": 4, "name": "React"}
  ]
  onSelect(department){
      //this.router.navigate(['/departments',department.id]);
      this.router.navigate([department.id], {relativeTo: this.route});
    }
}
