import { Component, OnInit } from '@angular/core';
import { AppShareComponent } from 'src/app/commons/app.share.component';
import { TestService } from '../../requests/test.service';

export class HomeProps {

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends AppShareComponent<HomeProps> implements OnInit{

  constructor(
   
  ) {
    super();
  }
  ngOnInit(): void {
    this.test()
  }


  test() {
    // this.testService.getImg()
  }
}
