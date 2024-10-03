import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDriveDocumentComponent } from './google-drive-document.component';

describe('GoogleDriveDocumentComponent', () => {
  let component: GoogleDriveDocumentComponent;
  let fixture: ComponentFixture<GoogleDriveDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleDriveDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleDriveDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
