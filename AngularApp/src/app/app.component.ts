import { Component, OnInit } from '@angular/core';
import '../../src/assets/javascript/slider.js'; 
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/* ,'../../src/assets/css/main.css' */
export class AppComponent implements OnInit {
  title = 'AngularApp';

  ngOnInit() {
    /*   $(document).ready(function () {
        alert("qwe");
      }); */
  }



}


