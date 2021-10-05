import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SivaComponent } from './siva.component';

describe('SivaComponent', () => {
  let component: SivaComponent;
  let fixture: ComponentFixture<SivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
