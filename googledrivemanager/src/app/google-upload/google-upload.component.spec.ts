import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleUploadComponent } from './google-upload.component';

describe('GoogleUploadComponent', () => {
  let component: GoogleUploadComponent;
  let fixture: ComponentFixture<GoogleUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleUploadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
