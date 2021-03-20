(function(){
    let graphSelector = document.getElementById('dropdown--graph-selector');
    let graph = {
        DONUT: 0,
        LINE: 1,
        HBAR: 2,
        VBAR: 3,
        STACKBAR: 4,
        drawDonut: drawDonut,
        drawLine: drawLine,
        drawVBar: drawVBar,
        drawHBar: drawHBar,
        drawStackedBar: drawStackedBar,
    };
    let targetTag = '#section--chart-area';

    let selectedGraph = graph.DONUT;

    graph.drawDonut(targetTag);
    
    graphSelector.onchange = function(e){
        e.preventDefault();
        e.stopPropagation();
        selectedGraph = +e.target.value; // + => cast string to int
        switch(selectedGraph){
            case graph.DONUT:
                console.log('drawing donut graph');
                graph.drawDonut(targetTag);
                break;
            case graph.LINE:
                console.log('drawing line graph');
                graph.drawLine(targetTag);
                break;
            case graph.HBAR:
                console.log('drawing horizontal bar graph');
                graph.drawHBar(targetTag);
                break;
            case graph.VBAR:
                console.log('drawing vertical bar graph');
                graph.drawVBar(targetTag);
                break;
            case graph.STACKBAR:
                console.log('drawing stacked bar graph');
                graph.drawStackedBar(targetTag);
                break;
        }
    }
})();