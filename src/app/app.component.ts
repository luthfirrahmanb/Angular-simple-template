import { Component, ViewChild } from '@angular/core';;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  works: any;
  name: string;
  labels: string[] = ['HTML/CSS', 'TypeScript', 'Javascript'];
  data: number[] = [80, 75, 75];
  type: string = 'doughnut';
  socialMedia: any;
  datasets: any[] = [
    {
      data: this.data,
      backgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56"
      ],
      hoverBackgroundColor: [
        "#000",
        "#36A2EB",
        "#FFCE56"
      ],
    }];
  constructor() {

    /**
     * For Work Experience
     */
    this.works = [{
      id: 1, responsibility: "Research, Developing feature for Selasar platform and maintaining Selasar front end",
      name: 'PT Selasar Indonesia Baru', year: 'Sep 2017 -  Now', as: 'Front End Developer', photo: '../assets/images/selasar.png', portofolio: 'none'
    },
    {
      id: 2, responsibility: 'Create Internal System with Ionic 3, MariaDB and Fireloop, Normalization Internal Database, migration from MSSQL to MariaDB, and Create Web Admin for input Bank Loan and Insurance Data with Ionic 3 and Loopback',
      name: 'PT Indodev Niaga Internet', year: "Apr 2017 - Aug 2017", as: 'Mobile App Developer', photo: '../assets/images/dataon.png', portofolio: 'Internal System (Ionic 3, Socket.IO, Moment.Js, Loopback)'
    },
    {
      id: 3, responsibility: "Customize client's HR System By their order, Support Client on site or on the phone, and give them Training about our HR Systems",
      name: 'PT Indodev Niaga Internet', year: 'Nov 2016 -  Apr 2017', as: 'Software Maintenance Staff Jr', photo: '../assets/images/dataon.png', portofolio: 'none'
    }];

    /**
     * For social Media on footer
     */
    this.socialMedia = [
      {icon:"fa fa-facebook-square", link:"#"},
      {icon:"fa fa-github-square", link:"#"},
      {icon:"fa fa-linkedin-square", link:"#"},
      {icon:"fa fa-instagram", link:"#"},
    ];
    

  }

  
}
