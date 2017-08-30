import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { voteComponent } from './vote.component';

describe('voteComponent', () => {
  let component: voteComponent;
  let fixture: ComponentFixture<voteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ voteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(voteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
