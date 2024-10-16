import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Simple E-commerce',
      image: 'assets/projects/simple E-Commerce.png',
      link: 'https://mohamed-abdelhalim11.github.io/Simple-E-Commerse/'
    },
    {
      title: 'CRUD APP',
      image: 'assets/projects/CRUDS.png',
      link: 'https://mohamed-abdelhalim11.github.io/CRUDS/'
    },
    {
      title: 'Simple Dashboard',
      image: 'assets/projects/Simple Dashboard.png',
      link: 'https://mohamed-abdelhalim11.github.io/Simple-Dashboard/'
    },
    {
      title: 'Simple design with HTML&CSS',
      image: 'assets/projects/kasper.png',
      link: 'https://mohamed-abdelhalim11.github.io/Kasper/'
    }
    ];

  constructor() {}

  ngOnInit(): void {
  }


}
