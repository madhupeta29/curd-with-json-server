import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebbokComponent } from './facebbok.component';

describe('FacebbokComponent', () => {
  let component: FacebbokComponent;
  let fixture: ComponentFixture<FacebbokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebbokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebbokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
