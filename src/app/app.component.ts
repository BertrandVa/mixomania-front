import { Component } from '@angular/core';
import { AlcoholService } from './services/alcohol.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mixomania-front';

  constructor(private alcoholService:AlcoholService){
    console.log('app component constructor called');
  }

  ngOnInit() {
    }

}
