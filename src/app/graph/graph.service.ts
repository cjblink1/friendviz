import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private observers = [];

  constructor() { }

  addObserver(o) {
    this.observers.push(o);
  }

  notify(event) {
    this.observers.forEach(observer => {
      observer.handle(event);
    });
  }

  zoomIn() {
    console.log("graph service zoom in");
    this.notify("zoomIn");
  }

  zoomOut() {
    this.notify("zoomOut");
  }

  reset() {
    this.notify("reset");
  }
}
