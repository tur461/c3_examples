(function(){
    let graphSelector = document.getElementById('dropdown--graph-selector');
    let graph = {
        DONUT: 0,
        LINE: 1,
        HZBAR: 2,
        STACKBAR: 3,
        drawDonut: drawDonut,
        drawLine: drawLine,
    };

    let selectedGraph = graph.DONUT;

    graph.drawDonut('#section--chart-area');
    
    graphSelector.onchange = function(e){
        e.preventDefault();
        e.stopPropagation();
        selectedGraph = +e.target.value; // + => cast string to int
        switch(selectedGraph){
            case graph.DONUT:
                console.log('drawing donut graph');
                graph.drawDonut('#section--chart-area');
                break;
            case graph.LINE:
                console.log('drawing line graph');
                graph.drawLine('#section--chart-area');
                break;
            case graph.HZBAR:
                break;
            case graph.STACKBAR:
                break;
        }
    }
})();