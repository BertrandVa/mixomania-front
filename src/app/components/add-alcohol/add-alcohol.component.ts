import { Component, OnInit } from '@angular/core';
import { Alcohol } from 'src/app/models/alcohol.model';
import { AlcoholService } from 'src/app/services/alcohol.service';

@Component({
  selector: 'app-add-alcohol',
  templateUrl: './add-alcohol.component.html',
  styleUrls: ['./add-alcohol.component.css']
})
export class AddAlcoholComponent implements OnInit {
  alcohol: Alcohol = {
    name: ''
  };
  submited= false;

  constructor(private alcoholService: AlcoholService) { }

  ngOnInit(): void {
  }

  saveAlcohol(): void {
    const data = {
      name: this.alcohol.name
    };

    this.alcoholService.create(data).subscribe(response => {
      console.log(response);
      this.submited = true;
    },
    error => {
      console.log(error);
    });
  }

  newAlcohol(): void {
    this.submited = false;
    this.alcohol = {
      name: ''
    };
  }

}
