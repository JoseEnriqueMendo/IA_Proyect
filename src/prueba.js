
export  function Dkjistra(){
    var Graph = require('node-dijkstra');

    var g = new Graph();
    
    g.addVertex('A', {B:1});
    g.addVertex('B', {A:1, C:9, D: 4});
    g.addVertex('C', {B:9, D:1});
    g.addVertex('D', {C:1, B:4});
    
    console.log(g.path('A', 'C')); // => ['A', 'B', 'C', 'D']

}

