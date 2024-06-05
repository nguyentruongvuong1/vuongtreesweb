import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEidtProductComponent } from './admin-eidt-product.component';

describe('AdminEidtProductComponent', () => {
  let component: AdminEidtProductComponent;
  let fixture: ComponentFixture<AdminEidtProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEidtProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEidtProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
