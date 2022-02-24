import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LedgerReportDateInputPage } from './ledger-report-date-input.page';

describe('LedgerReportDateInputPage', () => {
  let component: LedgerReportDateInputPage;
  let fixture: ComponentFixture<LedgerReportDateInputPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgerReportDateInputPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LedgerReportDateInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
