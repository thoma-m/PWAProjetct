import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachService {
  features = [
    {
        icon: 'far fa-chart-bar',
        type: 'Charts',
        description: 'Mettre à jour son poste de travail',
        full: '<h3>Vérifier que l\'on possède la dernière version de NodeJS</h3><code>npm -v</code><p>Si il y a un résultat on update npm à la dernière version stable <br><code>npm install -g npm@latest</code></p><h3>Installer ou mettre à jour angular/cli</h3><code>npm install -g @angular/cli@latest</code>',
        image: 'angular.png',
        link: 'step/1'
      },
      {
        icon: 'far fa-chart-bar',
        type: 'Charts',
        description: 'Cloner ce projet et le configurer',
        full:'<h3>Cloner le projet à ladresse suivante : <br> <code></code></h3><br><h5>FRONT-END</h5><p>Ensuite, se rendre dans le dossier <br><code>cd pwa_demo</code><br>Puis faire l\'installation des modules nodes<br><code>npm i</code><h5>Génération de la <a href="https://tools.ietf.org/html/draft-ietf-webpush-vapid-01" target="_blank">VAPID</a> key (WebPush)</h5><p><code>npm install web-push -g</code><br><code>web-push generate-vapid-keys</code><br><br>Conservez soigneusement les 2 clés et venez saisir votré clé publique dans la configuration Vapid (serverPublicKey) dans src/app/app.component.ts</p><br><h4>Développement</h4><code>npm run start</code> in your browser http://localhost:4200<h4>Compilation</h4><code>npm run build</code> ( without SSR)<br><code>npm run build:ssr</code> ( with SSR)<h4>Production</h4><code>npm run serve:ssr</code> in your browser http://localhost:4000 <br><br><h5>BACK-END</h5><p>Change directory <code> cd api</code></p><p><code>npm i</code></p><h5>Vérifiez que vous avez bien  installé PostgreSQL</h5><code>postgres --help</code><br><p>change login and password for postgreSQL in file api/config.json and USER and DATABASE exists<br><code>npm run app</code> (database creation)</p><h5>Developpement</h5><code>npm run start</code> in your browser http://localhost:5200<p><h5>Tests API</h5>in your browser http://localhost:5200/movies</p>',
        image: 'npm.jpg',
        link: 'step/2'
      },
      {
      icon: 'far fa-chart-bar',
      type: 'HttpClient',
      description: 'Apeller une api externe',
      image: 'showcase-httpclient.png',
      link: 'httpclient'
    }
    // {
    //   icon: 'far fa-chart-bar',
    //   type: 'Charts',
    //   description: 'Integrate the open-source library Chart.js',
    //   image: 'showcase-charts.png',
    //   link: 'chartjs'
    // },
    // {
    //   icon: 'far fa-chart-bar',
    //   type: 'Components',
    //   description: 'Smartphone Component with Input, Output and Event Emitter',
    //   image: 'showcase-components.png',
    //   link: 'components'
    // },
    // {
    //   icon: 'far fa-chart-bar',
    //   type: 'Services',
    //   description: 'Use services to view a playlist and a youtube player',
    //   image: 'showcase-services-playlist-youtube.png',
    //   link: 'services'
    // },
    // {
    //   icon: 'far fa-chart-bar',
    //   type: 'HttpClient',
    //   description: 'Use an external API with the HttpClient module',
    //   image: 'showcase-httpclient.png',
    //   link: 'httpclient'
    // },
    // {
    //   icon: 'far fa-chart-bar',
    //   type: 'Responsive Images list',
    //   description: 'Display a Responsive List of Images',
    //   image: 'showcase-responsive-images-list.png',
    //   link: 'movies-images-list'
    // },
  ];
  constructor() { }


  getServices() {
    return this.features;
  }
}
