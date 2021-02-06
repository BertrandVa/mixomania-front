import { Component, OnInit } from '@angular/core';
import { AlcoholService } from 'src/app/services/alcohol.service' ;
import { ActivatedRoute, Router } from '@angular/router';
import { Alcohol } from 'src/app/models/alcohol.model';

@Component({
  selector: 'app-alcohol-details',
  templateUrl: './alcohol-details.component.html',
  styleUrls: ['./alcohol-details.component.css']
})
export class AlcoholDetailsComponent implements OnInit {
  currentAlcohol: Alcohol = {
    name: ''
  };
  message = '';

  constructor( private alcoholService: AlcoholService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAlcohol(this.route.snapshot.params.id);
  }

  getAlcohol(id: string): void {
    this.alcoholService.get(id).subscribe(
      data => {
        this.currentAlcohol = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  updateAlcohol(): void {
    this.alcoholService.update(this.currentAlcohol.id, this.currentAlcohol).subscribe(
      response => {
        console.log(response);
        this.message = response.message;
      }, error => {
        console.log(error);
      });
  }

  deleteAlcohol(): void {
    this.alcoholService.delete(this.currentAlcohol.id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/alcohols']);
      }, error => {
        console.log(error);
      });
  }
}
