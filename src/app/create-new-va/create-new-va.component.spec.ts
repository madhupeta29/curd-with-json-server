import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewVaComponent } from './create-new-va.component';

describe('CreateNewVaComponent', () => {
  let component: CreateNewVaComponent;
  let fixture: ComponentFixture<CreateNewVaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewVaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewVaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
