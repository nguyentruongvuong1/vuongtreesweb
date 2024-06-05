import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCateComponent } from './admin-cate.component';

describe('AdminCateComponent', () => {
  let component: AdminCateComponent;
  let fixture: ComponentFixture<AdminCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
