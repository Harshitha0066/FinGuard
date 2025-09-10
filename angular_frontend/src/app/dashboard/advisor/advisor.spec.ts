import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advisor } from './advisor';

describe('Advisor', () => {
  let component: Advisor;
  let fixture: ComponentFixture<Advisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Advisor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advisor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
