import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 8.2.14' },
        { name: 'Angular Universal 8.2.6' },
        { name: 'Font Awesome 5.12.0' },
        { name: 'Bootstrap 4.4.1' },
        { name: 'JQuery 3.4.1' },
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'pg-promise' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
          englishTutorial: 'https://www.pwa.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'https://www.pwa.com/tutorials/routing-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'https://www.pwa.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'https://www.pwa.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'https://www.pwa.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'https://www.pwa.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'https://www.pwa.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'https://www.pwa.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'https://www.pwa.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'https://www.pwa.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'https://www.pwa.com/tutorials/search-engine-optimization-avec-angular',
        },
        {
          name: 'Components',
          englishTutorial: null,
          frenchTutorial: 'https://www.pwa.com/tutorials/components-avec-angular',
        },
        {
          name: 'Services',
          englishTutorial: null,
          frenchTutorial: 'https://www.pwa.com/tutorials/services-avec-angular',
        },
        {
          name: 'Responsive Images List',
          englishTutorial: null,
          frenchTutorial: null,
        },
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

}
