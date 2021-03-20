(function(){
    // access to the dropdown list
    let graphSelector = document.getElementById('dropdown--graph-selector');
    let graph = {
        DONUT: 0,
        LINE: 1,
        HBAR: 2,
        VBAR: 3,
        STACKBAR: 4,
        drawDonut: drawDonut,           // from donut.js
        drawLine: drawLine,             // from line.js
        drawVBar: drawVBar,             // from bar_vertical.js
        drawHBar: drawHBar,             // from bar_horizontal.js
        drawStackedBar: drawStackedBar, // from bar_stacked.js
    };
    let targetTag = '#section--chart-area'; // id of the div where chart will be attached on

    let selectedGraph = graph.DONUT;
    
    // as you can see (in html) donut is selected by default
    // so lets draw it on load
    graph.drawDonut(targetTag);
    
    // dropdown change event listener
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