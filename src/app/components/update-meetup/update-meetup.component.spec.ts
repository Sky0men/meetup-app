import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMeetupComponent } from './update-meetup.component';

describe('UpdateMeetupComponent', () => {
  let component: UpdateMeetupComponent;
  let fixture: ComponentFixture<UpdateMeetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMeetupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
