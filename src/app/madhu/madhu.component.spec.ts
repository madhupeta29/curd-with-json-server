import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadhuComponent } from './madhu.component';

describe('MadhuComponent', () => {
  let component: MadhuComponent;
  let fixture: ComponentFixture<MadhuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadhuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadhuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
