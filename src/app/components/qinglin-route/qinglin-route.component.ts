import { Component, Input, OnInit } from '@angular/core';

type QinglinRouteBlockType = "angular" | "ionic" | "font-awesome";

export interface QinglinRoute {
  routeBlockLinK: string;
  routeBlockType: QinglinRouteBlockType;
  routeBlockImg: string;
  routeBlockName: string;
}

@Component({
  selector: 'app-qinglin-route',
  templateUrl: './qinglin-route.component.html',
  styleUrls: ['./qinglin-route.component.scss'],
})
export class QinglinRouteComponent implements OnInit {
  @Input() route: QinglinRoute;
  
  constructor() { }

  ngOnInit() {}

}
