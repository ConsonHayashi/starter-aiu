import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QinglinInputComponent } from './qinglin-input.component';

describe('QinglinInputComponent', () => {
  let component: QinglinInputComponent;
  let fixture: ComponentFixture<QinglinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QinglinInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QinglinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
