import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFormComponent } from './people-form.component';

describe('PeopleFormComponent', () => {
  let component: PeopleFormComponent;
  let fixture: ComponentFixture<PeopleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
