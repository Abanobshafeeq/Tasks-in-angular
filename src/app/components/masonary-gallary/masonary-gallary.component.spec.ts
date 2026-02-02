import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonaryGallaryComponent } from './masonary-gallary.component';

describe('MasonaryGallaryComponent', () => {
  let component: MasonaryGallaryComponent;
  let fixture: ComponentFixture<MasonaryGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonaryGallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasonaryGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
