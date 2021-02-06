import { Component, OnInit } from '@angular/core';
import { Alcohol } from 'src/app/models/alcohol.model';
import { AlcoholService } from 'src/app/services/alcohol.service';

@Component({
  selector: 'app-alcohol-list',
  templateUrl: './alcohol-list.component.html',
  styleUrls: ['./alcohol-list.component.css']
})
export class AlcoholListComponent implements OnInit {
  alcohols?: Alcohol[];
  currentAlcohol?: Alcohol;
  currentIndex = -1;
  name = '';

  constructor(private alcoholService: AlcoholService) { }

  ngOnInit(): void {
    this.retrieveAlcohols();
  }

  retrieveAlcohols(): void{
    this.alcoholService.getAll().subscribe(
      data => {
        this.alcohols = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveAlcohols();
    this.currentAlcohol = undefined;
    this.currentIndex = -1;
  }

  setActiveAlcohol(alcohol: Alcohol, index: number): void {
    this.currentAlcohol = alcohol;
    this.currentIndex = index;
  }

  searchName(): void {
    this.alcoholService.findByName(this.name).subscribe(
      data => {
        this.currentAlcohol = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
