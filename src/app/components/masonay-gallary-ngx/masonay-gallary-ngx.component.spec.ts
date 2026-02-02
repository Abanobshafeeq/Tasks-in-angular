import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonayGallaryNgxComponent } from './masonay-gallary-ngx.component';

describe('MasonayGallaryNgxComponent', () => {
  let component: MasonayGallaryNgxComponent;
  let fixture: ComponentFixture<MasonayGallaryNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonayGallaryNgxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MasonayGallaryNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
