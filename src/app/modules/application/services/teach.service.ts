import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachService {
  features = [
   
    {
      icon: 'far fa-chart-bar',
      type: 'Charts',
      description: 'Integrate the open-source library Chart.js',
      image: 'showcase-charts.png',
      link: 'chartjs'
    },
    {
      icon: 'far fa-chart-bar',
      type: 'Components',
      description: 'Smartphone Component with Input, Output and Event Emitter',
      image: 'showcase-components.png',
      link: 'components'
    },
    {
      icon: 'far fa-chart-bar',
      type: 'Services',
      description: 'Use services to view a playlist and a youtube player',
      image: 'showcase-services-playlist-youtube.png',
      link: 'services'
    },
    {
      icon: 'far fa-chart-bar',
      type: 'HttpClient',
      description: 'Use an external API with the HttpClient module',
      image: 'showcase-httpclient.png',
      link: 'httpclient'
    },
    {
      icon: 'far fa-chart-bar',
      type: 'Responsive Images list',
      description: 'Display a Responsive List of Images',
      image: 'showcase-responsive-images-list.png',
      link: 'movies-images-list'
    }
  ];
  constructor() { }


  getServices() {
    return this.features;
  }
}
