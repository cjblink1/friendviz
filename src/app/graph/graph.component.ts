import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { GraphService } from './graph.service';
declare var require: any;
const graph = require('../../assets/friends.json');

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  private svg: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
  private g: d3.Selection<d3.BaseType, {}, HTMLElement, any>;
  private zoom;
  private currentSelected: any;
  private currentSelectedData: any;

  constructor(private graphService: GraphService) {
    graphService.addObserver(this);
  }

  ngOnInit() {

    this.svg = d3.select('svg');
    const width = parseInt(this.svg.style('width'), 10);
    const height = parseInt(this.svg.style('height'), 10);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const manyBodyForce = d3.forceManyBody();
    manyBodyForce.strength(-30);

    const linkForce = d3.forceLink().id(function (d: any) { return d.id; });
    linkForce.distance(30);

    const simulation = d3.forceSimulation()
      // .force('collision', d3.forceCollide(30))
      .force('link', linkForce)
      .force('charge', manyBodyForce)
      .force('center', d3.forceCenter(width / 2, height / 2));

    this.g = this.svg.append('g').attr('class', 'everything');
    console.log(this.g.attr('transform'));

    const link = this.g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(graph.links)
      .enter().append('line')
      .attr('stroke-width', function (d: any) { return Math.sqrt(d.value); });


    const dragstarted = (d) => {
      if (!d3.event.active) {
        simulation.alphaTarget(0.3).restart();
      }
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = (d) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    };

    const dragended = (d) => {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    };

    const clicked = (d, index, nodes) => {
      d3.select(this.currentSelected).attr('class', '');
      this.currentSelected = nodes[index];
      this.currentSelectedData = d;
      d3.select(this.currentSelected).attr('class', 'selected');
    };

    const node = this.g.append('g')
      .attr('class', 'nodes')
      .selectAll('circle')
      .data(graph.nodes)
      .enter().append('circle')
      .attr('r', 5)
      .attr('fill', function (d: any) { return color(d.group); })
      .on('click', clicked)
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    // Zoom functions
    const zoom_actions = () => {
      this.g.attr('transform', d3.event.transform);
    };

    // add zoom capabilities

    this.zoom = d3.zoom();
    const zoom_handler = this.zoom
      .on('zoom', zoom_actions);

    zoom_handler(this.svg);


    node.append('title')
      .text(function (d: any) { return d.id; });

    simulation
      .nodes(graph.nodes)
      .on('tick', ticked);

    simulation.force<any>('link')
      .links(graph.links);


    function ticked() {
      link
        .attr('x1', function (d: any) { return d.source.x; })
        .attr('y1', function (d: any) { return d.source.y; })
        .attr('x2', function (d: any) { return d.target.x; })
        .attr('y2', function (d: any) { return d.target.y; });

      node
        .attr('cx', function (d: any) { return d.x; })
        .attr('cy', function (d: any) { return d.y; });
    }
  }

  handle(event) {
    switch (event) {
      case 'reset': {
        this.svg.call(this.zoom.transform, d3.zoomIdentity);
      }
    }
  }

}
