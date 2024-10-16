import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  
  Skills: string[] = [
    'assets/skills/html-5-svgrepo-com.png',
    'assets/skills/css-3-svgrepo-com.png',
    'assets/skills/js-official-svgrepo-com.png',
    'assets/skills/typescript-official-svgrepo-com.png',
    'assets/skills/angular-svgrepo-com.png',
    'assets/skills/bootstrap-svgrepo-com.png',
    'assets/skills/git-svgrepo-com.png',
    'assets/skills/github-color-svgrepo-com.png',
  ];

  constructor() {} 

  ngOnInit(): void {
  }

}
