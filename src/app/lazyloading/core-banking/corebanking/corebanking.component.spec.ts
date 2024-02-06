import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorebankingComponent } from './corebanking.component';

describe('CorebankingComponent', () => {
  let component: CorebankingComponent;
  let fixture: ComponentFixture<CorebankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorebankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorebankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
