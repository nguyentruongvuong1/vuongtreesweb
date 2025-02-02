import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductByCateComponent } from './product-by-cate.component';

describe('ProductByCateComponent', () => {
  let component: ProductByCateComponent;
  let fixture: ComponentFixture<ProductByCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductByCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductByCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
