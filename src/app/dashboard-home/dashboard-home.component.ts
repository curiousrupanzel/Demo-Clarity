import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  imagesData: any[] = [
    {
      src: 'assets/image1.png',
      alt: '',
      title: ''
    },
    {
      src: 'assets/image2.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image3.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image4.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image5.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image6.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image7.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image8.png',
      alt: 'Lorem',
      title: 'Lorem'
    },
    {
      src: 'assets/image9.png',
      alt: 'Lorem',
      title: 'Lorem'
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
