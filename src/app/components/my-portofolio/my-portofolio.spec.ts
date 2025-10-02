import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortofolio } from './my-portofolio';

describe('MyPortofolio', () => {
  let component: MyPortofolio;
  let fixture: ComponentFixture<MyPortofolio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPortofolio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPortofolio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
