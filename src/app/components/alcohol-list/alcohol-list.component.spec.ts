import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholListComponent } from './alcohol-list.component';

describe('AlcoholListComponent', () => {
  let component: AlcoholListComponent;
  let fixture: ComponentFixture<AlcoholListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlcoholListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
