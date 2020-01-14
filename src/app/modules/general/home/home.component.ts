import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { TeachService } from './../../application/services/teach.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = environment.application.name;
  angular = environment.application.angular;
  bootstrap = environment.application.bootstrap;
  fontawesome = environment.application.fontawesome;

  features: any;

  constructor(
    private meta: Meta,
    private titleService: Title,private teachservice:TeachService) {
  }

  ngOnInit() {
    this.titleService.setTitle('angular.pwa: Application Web with Angular 8');
    this.meta.addTag({
      name: 'angular.pwa',
      content: 'danny pwa'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'This application was developed with Angular version 8.2.14 and bootstrap 4.4.1' +
          ' It applies Routing, Lazy loading, Server side rendering and Progressive Web App (PWA)'
      });
  }

}
