import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QinglinRouteComponent } from './qinglin-route.component';

describe('QinglinRouteComponent', () => {
  let component: QinglinRouteComponent;
  let fixture: ComponentFixture<QinglinRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QinglinRouteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QinglinRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
