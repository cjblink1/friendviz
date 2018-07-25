import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor(private graphService: GraphService) { }

  ngOnInit() {
  }

  reset() {
    this.graphService.reset();
  }

}
