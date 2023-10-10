/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID

const svgGhost = document.getElementById("first_ghost");

svgGhost.style.fill = "orange";

// GET BY CLASSNAME

const secondWaveGhosts = document.querySelectorAll(".ghost.second_wave");

for (const secondWaveGhost of secondWaveGhosts) {
  secondWaveGhost.style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME

const area51 = document.getElementById("area-51");
const svgs = area51.getElementsByTagName("svg");

for (const svg of svgs) {
  svg.style.fill = "green";
}

// querySelector nth-child

const penultimateGhost = document.querySelector(
  "#area-51 .ghost:nth-last-child(2)"
);

penultimateGhost.style.stroke = "red";
penultimateGhost.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'

const divAbovePenultimateGhost = penultimateGhost.previousElementSibling;

divAbovePenultimateGhost.style.border = "5px dashed";

// querySelectorAll

const area50Ghosts = document.querySelectorAll("#area-50 .ghost");

for (const area50Ghost of area50Ghosts) {
  area50Ghost.style.fill = "red";
}
