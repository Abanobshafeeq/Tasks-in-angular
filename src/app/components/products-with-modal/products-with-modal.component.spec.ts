import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsWithModalComponent } from './products-with-modal.component';

describe('ProductsWithModalComponent', () => {
  let component: ProductsWithModalComponent;
  let fixture: ComponentFixture<ProductsWithModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsWithModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsWithModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
