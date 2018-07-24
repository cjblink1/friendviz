import { Component } from '@angular/core';
import * as d3 from 'd3';
import { Simulation, SimulationNodeDatum, SimulationLinkDatum } from 'd3';
declare var require: any;
const graph = require('../assets/miserables.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {

    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    var color = d3.scaleOrdinal(d3.schemeCategory10);

    var simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(function (d: any) { return d.id; }))
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2));


    var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function (d: any) { return Math.sqrt(d.value); });


    let dragstarted = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    let dragged = (d) => {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    let dragended = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("r", 5)
      .attr("fill", function (d: any) { return color(d.group); })
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    node.append("title")
      .text(function (d: any) { return d.id; });

    simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

    simulation.force<any>("link")
      .links(graph.links);

    simulation.force("link")

    function ticked() {
      link
        .attr("x1", function (d: any) { return d.source.x; })
        .attr("y1", function (d: any) { return d.source.y; })
        .attr("x2", function (d: any) { return d.target.x; })
        .attr("y2", function (d: any) { return d.target.y; });

      node
        .attr("cx", function (d: any) { return d.x; })
        .attr("cy", function (d: any) { return d.y; });
    }
  }
}
