/* 
// WRITE YOUR JAVASCRIPT BELOW THIS COMMENT 
Your name :    Titah Mohamed Faouzi 
Date :  
Contact information : 
What does this script do ? 
...
*/

// Your scripting goes here...
/* Création de la div 1 */
let div = document.createElement("div");
div.id = "tabdiv1";
let container = document.getElementById("mw-content-text");

container.insertBefore(div, table1);
//variable pour recuperer les donnees du tableau1 et creation du graph1

let data = [];
let table = document.getElementById("table1");
let years = table.getElementsByTagName("tr")[1].getElementsByTagName("th");
let yearsArray = [];


for (let i = 1; i < years.length; i++) {
   let content = years[i].innerHTML;
   yearsArray.push(content);
}

let vert = table.getElementsByTagName("tr");

for (let i = 1; i < vert.length; i++) {
    let cells = vert[i].getElementsByTagName("td");

    for (let j = 0; j < cells.length; j++) {
        if (j === 0) {
            var pays = cells[j].innerHTML;
        } else if (!isNaN(parseInt(cells[j].innerHTML))) {
            data.push({ data: parseInt(cells[j].innerHTML), pays: pays, years: yearsArray[j - 1] });
        }

    }
}

let svg = dimple.newSvg("#tabdiv1", "100%", 450);
let myChart = new dimple.chart(svg, data);
myChart.setBounds(30, 110, "90%", 305);
let x = myChart.addCategoryAxis("x", ["years", "pays"]);
let y = myChart.addMeasureAxis("y", "data");
y.ticks = 20;
myChart.addSeries("pays", dimple.plot.line);
myChart.addSeries("pays", dimple.plot.scatter);
myChart.addLegend(10, 10, "100%", 200);
myChart.draw();





