import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseStatusComponent } from './choose-status.component';

describe('ChooseStatusComponent', () => {
  let component: ChooseStatusComponent;
  let fixture: ComponentFixture<ChooseStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
