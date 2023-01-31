import './style.css'
import * as d3 from 'd3'
import 'd3-attrs'
import 'd3-selection'
var i = 0;
let dummy = {
  "name":"dataaa",
  "children": [
  {
    "children": [
    {
      "children": [
      {
        "name": "Namechk",
        "type": "url",
        "url": "https://namechk.com/"
      },
      {
        "name": "Namechk (T)",
        "type": "url",
        "url": "https://github.com/HA71/Namechk"
      },
      {
        "name": "KnowEm",
        "type": "url",
        "url": "http://knowem.com/"
      },
      {
        "name": "NameCheckr",
        "type": "url",
        "url": "https://www.namecheckr.com/"
      },
      {
        "name": "UserSearch.org",
        "type": "url",
        "url": "https://usersearch.org/"
      },
      {
        "name": "WhatsMyName (T)",
        "type": "url",
        "url": "https://github.com/WebBreacher/WhatsMyName"
      },
      {
        "name": "Thats Them",
        "type": "url",
        "url": "https://thatsthem.com/"
      },
      {
        "name": "Check Usernames",
        "type": "url",
        "url": "http://checkusernames.com/"
      },
      {
        "name": "NameCheckup",
        "type": "url",
        "url": "https://namecheckup.com/"
      },
      {
        "name": "Instant Username Search",
        "type": "url",
        "url": "https://instantusername.com/"
      }],
      "name": "Username Search Engines",
      "type": "folder"
    },
    {
      "children": [
      {
        "name": "Amazon Usernames (M)",
        "type": "url",
        "url": "https://www.google.com/search?q=site:amazon.com+%3Cusername%3E"
      },
      {
        "name": "Amazon Wishlists",
        "type": "url",
        "url": "https://www.amazon.com/gp/registry/search.html/?ie=UTF8&type=wishlist"
      },
      {
        "name": "Github User (M)",
        "type": "url",
        "url": "https://api.github.com/users/%3Cusername%3E/events/public"
      },
      {
        "name": "Tinder Usernames (M)",
        "type": "url",
        "url": "https://www.gotinder.com/@%3Cusername%3E"
      },
      {
        "name": "Keybase",
        "type": "url",
        "url": "https://keybase.io/"
      },
      {
        "name": "MIT PGP Key Server",
        "type": "url",
        "url": "http://pgp.mit.edu/"
      }],
      "name": "Specific Sites",
      "type": "folder"
    }],
    "name": "Username",
    "type": "folder"}
  ]
  }

  //?*********************************** working code **********************************88//
// let svg = d3
//     .select("#app")
//     .append("svg")
//     .style("background", "black")
//     .attr("width",window.screen.width)
//     .attr("height",window.screen.height * 7);
//     const margin = {top:0,left:30,bottom:0,right:50}
// let width = document.body.clientWidth
// let height = document.body.clientHeight
// const innerHeight = height - margin.top - margin.bottom
// const innerWidth = width - margin.left - margin.right


// const tree = d3.tree().size([window.innerHeight , window.innerWidth])
// const root = d3.hierarchy(dummy)
// const links = tree(root).links()
// const linkPathGenerator = d3.linkHorizontal()
// .x(d=>d.y)
// .y(d=>d.x)

// svg.selectAll('path').data(links)
// .enter().append('path')
// .attr('d',linkPathGenerator)
// // .attr("stroke","white")

// svg.selectAll('text').data(root.descendants())
// .enter().append('text')
// .attr('x',d=>d.y)
// .attr('y',d=>d.x)
// .text(d=>d.data.name)
// .attr('dy','.32em')
// // .attr("stroke","white")
  //?*********************************** working code **********************************88//



var margin = [20, 120, 20, 140],
  width = 1280 - margin[1] - margin[3],
  height = 800 - margin[0] - margin[2],
  i = 0,
  duration = 1250,
  root;

var tree = d3.tree().size([height, width]);
const root = d3.hierarchy(dummy)

var diagonal = d3
  .linkHorizontal()
  .x(function (d) {
    return d.x;
  })
  .y(function (d) {
    return d.y;
  });

var vis = d3
  .select("#body")
  .append("svg:svg")
  .attr("width", width + margin[1] + margin[3])
  .attr("height", height + margin[0] + margin[2])
  .append("svg:g")
  .attr("transform", "translate(" + margin[3] + "," + margin[0] + ")");

// d3.json("arf.json", function (json) {

  root = dummy;
  root.x0 = height / 2;
  root.y0 = 0;

  function collapse(d) {
    // console.log(d);
    if (d.children) {
      d._children = d.children;
      d._children.forEach(collapse);
      d.children = null;
    }
  }
  root.children.forEach(d=>collapse(d));
  update(root);
// });

function update(source) {
  let x = document.getElementById("view-detail");

  // var duration = d3.event && d3.event.altKey ? 5000 : 500;

  // Compute the new tree layout.
  // var nodes = tree.nodes(root).reverse();
const treeRoot = d3.hierarchy(root);
  d3.tree(treeRoot);
// nodes
const nodes = treeRoot.descendants();
// links
// const links = treeRoot.links();




  // Normalize for fixed-depth.
  nodes.forEach(function (d) {
    d.y = d.depth * 180;
  });

  // Update the nodes…
  var node = vis.selectAll("g.node").data(nodes, function (d) {
    return d.id || (d.id = ++i);
  });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node
    .enter()
    .append("svg:g")
    .attr("class", "node")
    .attr("transform", function (d) {
      return "translate(" + source.y0 + "," + source.x0 + ")";
    })
    .on("click", function (d) {
      toggle(d);
      update(d);
    });

  nodeEnter
    .append("svg:circle")
    .attr("r", 1e-6)
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  nodeEnter
    .append("a")
    .attr("target", "_blank")
    .attr("xlink:href", function (d) {
      return d.url;
    })
    .append("svg:text")
    .attr("x", function (d) {
      return d.children || d._children ? -10 : 10;
    })
    .attr("dy", ".35em")
    .attr("text-anchor", function (d) {
      return d.children || d._children ? "end" : "start";
    })
    .text(function (d) {
      return d.name;
    })
    .style("fill: rgb(0, 0, 0)", function (d) {
      return d.free ? "black" : "#999";
    })
    .style("fill-opacity", 1e-6);

  nodeEnter.append("svg:title").text(function (d) {
    return d.description;
  });

  // Transition nodes to their new position.
  var nodeUpdate = node
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + d.y + "," + d.x + ")";
    });

  nodeUpdate
    .select("circle")
    .attr("r", 6)
    .style("fill", function (d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  nodeUpdate.select("text").style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node
    .exit()
    .transition()
    .duration(duration)
    .attr("transform", function (d) {
      return "translate(" + source.y + "," + source.x + ")";
    })
    .remove();

  nodeExit.select("circle").attr("r", 1e-6);

  nodeExit.select("text").style("fill-opacity", 1e-6);

  // Update the links…
  var link = vis.selectAll("path.link").data(treeRoot.links(nodes), function (d) {
    return d.target.id;
  });

  // Enter any new links at the parent's previous position.
  link
    .enter()
    .insert("svg:path", "g")
    .attr("class", "link")
    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y0 };
      return diagonal({ source: o, target: o });
    })
    .transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition links to their new position.
  link.transition().duration(duration).attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link
    .exit()
    .transition()
    .duration(duration)
    .attr("d", function (d) {
      var o = { x: source.x, y: source.y };
      return diagonal({ source: o, target: o });
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}
// Toggle children of a Children
function toggleAll(d) {
  if (d._children) {
    d._children.forEach(toggleAll);
    toggle(d);
  } else {
    if (!!d.children) {
      d.children.forEach(toggleAll);
      toggle(d);
    } else toggle(d);
  }
}
// Toggle children.
function toggle(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
}