import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {
  constructor(private actRoute: ActivatedRoute) {
    // there are two way to fetch data

    //1.Route param(direct values)
    console.log("***1.Route param(direct values***)");
    console.log(this.actRoute.snapshot.params);
    console.log(this.actRoute.snapshot.params['id']);
    console.log(this.actRoute.snapshot.params['name']);






    //2.param map(observable)
    console.log("***2.param map(observable***)");
    console.log(this.actRoute.paramMap);
    this.actRoute.paramMap.subscribe({
      next: (res: any) => {
        console.log(res.params);
        console.log(res.params.id);
        console.log(res.params.name);

      },
      error: (err: any) => {
        console.log(err);
      }
    })

  }

}
