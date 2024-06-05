import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEidtCateComponent } from './admin-eidt-cate.component';

describe('AdminEidtCateComponent', () => {
  let component: AdminEidtCateComponent;
  let fixture: ComponentFixture<AdminEidtCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEidtCateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEidtCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
