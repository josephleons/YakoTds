import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrypostComponent } from './trypost.component';

describe('TrypostComponent', () => {
  let component: TrypostComponent;
  let fixture: ComponentFixture<TrypostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrypostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrypostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
