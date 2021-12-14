/*

A video walkthrough of each SVGs source code: https://www.youtube.com/watch?v=kBT90nwUb_o

Follow me on twitter for more: https://twitter.com/HunorBorbely

*/

function Decoration({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "20", r: "70", fill: "#D1495B" }), /*#__PURE__*/
    React.createElement("circle", {
      cx: "0",
      cy: "-75",
      r: "12",
      fill: "none",
      stroke: "#F79257",
      "stroke-width": "2" }), /*#__PURE__*/

    React.createElement("rect", { x: "-17.5", y: "-65", width: "35", height: "20", fill: "#F79257" })));


}

detailScreens[0].svg = Decoration;

function Three({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 400 * size, viewBox: "-100 -200 200 400" }, /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 80,120 -80,120", fill: "#234236" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,-40 60,60 -60,60", fill: "#0C5C4C" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,-80 40,0 -40,0", fill: "#38755B" }), /*#__PURE__*/
    React.createElement("rect", { x: "-20", y: "120", width: "40", height: "30", fill: "brown" })));


}

detailScreens[1].svg = Three;

function Gingerbread({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "gingerbread",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("circle", { class: "body", cx: "0", cy: "-50", r: "30" }), /*#__PURE__*/

    React.createElement("circle", { class: "eye", cx: "-12", cy: "-55", r: "3" }), /*#__PURE__*/
    React.createElement("circle", { class: "eye", cx: "12", cy: "-55", r: "3" }), /*#__PURE__*/
    React.createElement("rect", { class: "mouth", x: "-10", y: "-40", width: "20", height: "5", rx: "2" }), /*#__PURE__*/

    React.createElement("line", { class: "limb", x1: "-40", y1: "-10", x2: "40", y2: "-10" }), /*#__PURE__*/
    React.createElement("line", { class: "limb", x1: "-25", y1: "50", x2: "0", y2: "-15" }), /*#__PURE__*/
    React.createElement("line", { class: "limb", x1: "25", y1: "50", x2: "0", y2: "-15" }), /*#__PURE__*/

    React.createElement("circle", { class: "button", cx: "0", cy: "-10", r: "5" }), /*#__PURE__*/
    React.createElement("circle", { class: "button", cx: "0", cy: "10", r: "5" })));


}

detailScreens[2].svg = Gingerbread;

function House({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "house",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("polygon", { class: "wall", points: "-65,80 -65,-10 0,-70 65,-10 65,80" }), /*#__PURE__*/
    React.createElement("polyline", { class: "roof", points: "-75,-8 0,-78 75,-8" }), /*#__PURE__*/

    React.createElement("rect", { class: "door", x: "-45", y: "10", width: "30", height: "60" }), /*#__PURE__*/
    React.createElement("circle", { class: "door-knob", cx: "-35", cy: "40", r: "2" }), /*#__PURE__*/
    React.createElement("rect", { class: "stair", x: "-47", y: "70", width: "34", height: "5" }), /*#__PURE__*/
    React.createElement("rect", { class: "stair", x: "-49", y: "75", width: "38", height: "5" }), /*#__PURE__*/

    React.createElement("rect", { class: "window", x: "5", y: "15", width: "40", height: "35" }), /*#__PURE__*/
    React.createElement("line", { x1: "5", y1: "32.5", x2: "45", y2: "32.5" }), /*#__PURE__*/
    React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "50" }), /*#__PURE__*/
    React.createElement("rect", { class: "window-sill", x: "2", y: "48", width: "46", height: "5" }), /*#__PURE__*/

    React.createElement("circle", { class: "window", cx: "0", cy: "-25", r: "15" }), /*#__PURE__*/
    React.createElement("line", { x1: "-15", y1: "-25", x2: "15", y2: "-25" }), /*#__PURE__*/
    React.createElement("line", { x1: "0", y1: "-40", x2: "0", y2: "-10" })));


}

detailScreens[3].svg = House;

function DecorationWithClip({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("clipPath", { id: "ball" }, /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "20", r: "70" })), /*#__PURE__*/


    React.createElement("circle", { cx: "0", cy: "20", r: "70", fill: "#D1495B" }), /*#__PURE__*/

    React.createElement("polyline", {
      "clip-path": "url(#ball)",
      points: "-120 40 -80 0 -40 40 0 0 40 40 80 0 120 40",
      fill: "none",
      stroke: "#9C2D2A",
      "stroke-width": "20" }), /*#__PURE__*/


    React.createElement("circle", {
      cx: "0",
      cy: "-75",
      r: "12",
      fill: "none",
      stroke: "#F79257",
      "stroke-width": "2" }), /*#__PURE__*/

    React.createElement("rect", { x: "-17.5", y: "-65", width: "35", height: "20", fill: "#F79257" })));


}

detailScreens[4].svg = DecorationWithClip;

function Star({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "star",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("g", { transform: "translate(0 5)" }, /*#__PURE__*/
    React.createElement("g", null, /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 36,-50 0,-100", fill: "#EDD8B7" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 -36,-50 0,-100", fill: "#E5C39C" })), /*#__PURE__*/

    React.createElement("g", { transform: "rotate(72)" }, /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 36,-50 0,-100", fill: "#EDD8B7" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 -36,-50 0,-100", fill: "#E5C39C" })), /*#__PURE__*/

    React.createElement("g", { transform: "rotate(-72)" }, /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 36,-50 0,-100", fill: "#EDD8B7" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 -36,-50 0,-100", fill: "#E5C39C" })), /*#__PURE__*/

    React.createElement("g", { transform: "rotate(144)" }, /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 36,-50 0,-100", fill: "#EDD8B7" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 -36,-50 0,-100", fill: "#E5C39C" })), /*#__PURE__*/

    React.createElement("g", { transform: "rotate(-144)" }, /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 36,-50 0,-100", fill: "#EDD8B7" }), /*#__PURE__*/
    React.createElement("polygon", { points: "0,0 -36,-50 0,-100", fill: "#E5C39C" })))));




}

detailScreens[5].svg = Star;

function Snowflake({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("path", {
      id: "branch",
      d: " M 0 0 L 0 -90 M 0 -20 L 20 -34 M 0 -20 L -20 -34 M 0 -40 L 20 -54 M 0 -40 L -20 -54 M 0 -60 L 20 -74 M 0 -60 L -20 -74",







      stroke: "#E5C39C",
      "stroke-width": "5" })), /*#__PURE__*/



    React.createElement("use", { href: "#branch" }), /*#__PURE__*/
    React.createElement("use", { href: "#branch", transform: "rotate(60)" }), /*#__PURE__*/
    React.createElement("use", { href: "#branch", transform: "rotate(120)" }), /*#__PURE__*/
    React.createElement("use", { href: "#branch", transform: "rotate(180)" }), /*#__PURE__*/
    React.createElement("use", { href: "#branch", transform: "rotate(240)" }), /*#__PURE__*/
    React.createElement("use", { href: "#branch", transform: "rotate(300)" })));


}

detailScreens[6].svg = Snowflake;

function Forest({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("g", { id: "tree" }, /*#__PURE__*/
    React.createElement("polygon", { points: "-10,0 10,0 0 -50", fill: "#38755b" }), /*#__PURE__*/
    React.createElement("line", {
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "10",
      stroke: "#778074",
      "stroke-width": "2" }))), /*#__PURE__*/




    React.createElement("rect", { x: "-100", y: "-100", width: "200", height: "200", fill: "#F1DBC3" }), /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "380", r: "350", fill: "#F8F4E8" }), /*#__PURE__*/

    React.createElement("use", { href: "#tree", x: "-30", y: "25", transform: "scale(2)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "-20", y: "40", transform: "scale(1.2)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "40", y: "40" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "50", y: "30", transform: "scale(1.5)" })));


}

detailScreens[7].svg = Forest;

function DecorationWithGradient({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("radialGradient", { id: "shine", cx: "0.25", cy: "0.25", r: "0.35" }, /*#__PURE__*/
    React.createElement("stop", { offset: "0%", "stop-color": "#e3a8b0" }), /*#__PURE__*/
    React.createElement("stop", { offset: "100%", "stop-color": "#D1495B" }))), /*#__PURE__*/



    React.createElement("circle", { cx: "0", cy: "20", r: "70", fill: "url(#shine)" }), /*#__PURE__*/
    React.createElement("circle", {
      cx: "0",
      cy: "-75",
      r: "12",
      fill: "none",
      stroke: "#F79257",
      "stroke-width": "2" }), /*#__PURE__*/

    React.createElement("rect", { x: "-17.5", y: "-65", width: "35", height: "20", fill: "#F79257" })));


}

detailScreens[8].svg = DecorationWithGradient;

function Snowman({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 400 * size, viewBox: "-100 -200 200 400" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("radialGradient", { id: "snowball", cx: "0.25", cy: "0.25", r: "1" }, /*#__PURE__*/
    React.createElement("stop", { offset: "0%", "stop-color": "white" }), /*#__PURE__*/
    React.createElement("stop", { offset: "50%", "stop-color": "white" }), /*#__PURE__*/
    React.createElement("stop", { offset: "100%", "stop-color": "#d6d6d6" }))), /*#__PURE__*/



    React.createElement("circle", { id: "bigball", cx: "0", cy: "60", r: "80", fill: "url(#snowball)" }), /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "-40", r: "50", fill: "url(#snowball)" }), /*#__PURE__*/
    React.createElement("polygon", { points: "10,-46 50,-40 10,-34", fill: "#e66465" }), /*#__PURE__*/

    React.createElement("circle", { cx: "0", cy: "-55", r: "5" }), /*#__PURE__*/
    React.createElement("circle", { cx: "20", cy: "-55", r: "5" }), /*#__PURE__*/

    React.createElement("line", {
      x1: "-40",
      y1: "30",
      x2: "-90",
      y2: "-30",
      stroke: "black",
      "stroke-width": "5" }), /*#__PURE__*/

    React.createElement("line", { x1: "-65", y1: "0", x2: "-90", y2: "-10", stroke: "black", "stroke-width": "5" })));


}

detailScreens[9].svg = Snowman;

function ThreeWithCurves({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 400 * size, viewBox: "-100 -200 200 400" }, /*#__PURE__*/
    React.createElement("path", {
      d: " M 0 -80 Q 5 -75 0 -70 Q -10 -65 0 -60 Q 15 -55 0 -50 Q -20 -45 0 -40 Q 25 -35 0 -30 Q -30 -25 0 -20 Q 35 -15 0 -10 Q -40 -5 0 0 Q 45 5 0 10 Q -50 15 0 20 Q 55 25 0 30 Q -60 35 0 40 Q 65 45 0 50 Q -70 55 0 60 Q 75 65 0 70 Q -80 75 0 80 Q 85 85 0 90 Q -90 95 0 100 Q 95 105 0 110 Q -100 115 0 120 L 0 140 L 20 140 L -20 140",
























      fill: "none",
      stroke: "#0C5C4C",
      "stroke-width": "5" })));



}

detailScreens[10].svg = ThreeWithCurves;

function Gift({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "gift",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("path", {
      class: "ribbon",
      d: " M 0 -50 L 30 -50 C 50 -50 50 -70 30 -65 L 0 -50 " }), /*#__PURE__*/







    React.createElement("path", {
      class: "ribbon",
      d: " M 0 -50 L -30 -50 C -50 -50 -50 -70 -30 -65 L 0 -50 " }), /*#__PURE__*/







    React.createElement("circle", { cx: "0", cy: "-50", r: "10", fill: "#a9172a" }), /*#__PURE__*/

    React.createElement("rect", { class: "box", x: "-60", y: "-40", width: "120", height: "100" }), /*#__PURE__*/
    React.createElement("rect", { class: "box", x: "-70", y: "-47", width: "140", height: "20" }), /*#__PURE__*/
    React.createElement("rect", { class: "stripe", x: "-20", y: "-40", width: "40", height: "100" }), /*#__PURE__*/
    React.createElement("rect", { class: "stripe", x: "-25", y: "-47", width: "50", height: "20" })));


}

detailScreens[11].svg = Gift;

function Bell({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("g", { stroke: "black", "stroke-width": "2" }, /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "-45", r: "7", fill: "#4F6D7A" }), /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "50", r: "10", fill: "#F79257" }), /*#__PURE__*/
    React.createElement("path", {
      d: " M -50 40 L -50 50 L 50 50 L 50 40 Q 40 40 40 10 C 40 -60 -40 -60 -40 10 Q -40 40 -50 40",







      fill: "#FDEA96" }))));




}

detailScreens[12].svg = Bell;

function Candy({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "candy",
      width: 200 * size,
      height: 400 * size,
      viewBox: "-100 -200 200 400" }, /*#__PURE__*/

    React.createElement("path", {
      d: " M 50 120 L 50 -80 A 50 50 0 0 0 -50 -80",



      stroke: "#cd803d",
      "stroke-width": "45",
      class: "body" }), /*#__PURE__*/


    React.createElement("path", {
      d: " M 50 120 L 50 -80 A 50 50 0 0 0 -50 -80",



      stroke: "white",
      "stroke-width": "40",
      class: "body" }), /*#__PURE__*/


    React.createElement("line", { class: "green-mark", x1: "-35", y1: "-90", x2: "-60", y2: "-100" }), /*#__PURE__*/
    React.createElement("line", { class: "red-mark", x1: "-15", y1: "-115", x2: "-25", y2: "-135" }), /*#__PURE__*/
    React.createElement("line", { class: "green-mark", x1: "20", y1: "-110", x2: "35", y2: "-130" }), /*#__PURE__*/
    React.createElement("line", { class: "red-mark", x1: "40", y1: "-60", x2: "60", y2: "-80" }), /*#__PURE__*/
    React.createElement("line", { class: "green-mark", x1: "40", y1: "-10", x2: "60", y2: "-30" }), /*#__PURE__*/
    React.createElement("line", { class: "red-mark", x1: "40", y1: "40", x2: "60", y2: "20" }), /*#__PURE__*/
    React.createElement("line", { class: "green-mark", x1: "40", y1: "90", x2: "60", y2: "70" })));


}

detailScreens[13].svg = Candy;

function Ribbon({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("path", {
      id: "ribbon",
      d: " M 0 -20 Q 28 -40 56 -45 C 96 -48 96 48 56 45 Q 28 40 0 20 ",





      fill: "#B73A3B" })), /*#__PURE__*/



    React.createElement("use", { href: "#ribbon" }), /*#__PURE__*/
    React.createElement("use", { href: "#ribbon", transform: "scale(-1)" }), /*#__PURE__*/

    React.createElement("ellipse", { cx: "0", cy: "0", rx: "20", ry: "24", fill: "#9C2D2A" }), /*#__PURE__*/

    React.createElement("path", {
      d: " M 0 20 Q 40 40 30 60 Q 20 80 40 90 M 0 20 Q -30 30 -20 60 Q -10 90 -50 100",







      fill: "none",
      stroke: "#B73A3B",
      "stroke-width": "3" })));



}

detailScreens[14].svg = Ribbon;

function Bear({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "bear",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("circle", { cx: "-40", cy: "-50", r: "20", fill: "white" }), /*#__PURE__*/
    React.createElement("circle", { cx: "40", cy: "-50", r: "20", fill: "white" }), /*#__PURE__*/
    React.createElement("circle", { cx: "-40", cy: "-50", r: "15", fill: "#E5C39C" }), /*#__PURE__*/
    React.createElement("circle", { cx: "40", cy: "-50", r: "15", fill: "#E5C39C" }), /*#__PURE__*/

    React.createElement("rect", { class: "face", x: "-55", y: "-60", width: "110", height: "120" }), /*#__PURE__*/

    React.createElement("circle", { cx: "20", cy: "-30", r: "3" }), /*#__PURE__*/
    React.createElement("circle", { cx: "-20", cy: "-30", r: "3" }), /*#__PURE__*/

    React.createElement("path", {
      d: " M -30 0 C -30 -25 30 -25 30 0 L 30 30 Q 30 40 20 40 L -20 40 Q -30 40 -30 30",






      fill: "#E5C39C" }), /*#__PURE__*/


    React.createElement("path", {
      d: " M -10 0 L 10 0 C 10 20 -10 20 -10 0" }), /*#__PURE__*/




    React.createElement("path", {
      class: "mouth",
      d: " M 0 10 Q 0 25 10 25 M 0 10 Q 0 25 -10 25" })));








}

detailScreens[15].svg = Bear;

function Text({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("path", { id: "text-arc", d: "M 0, 50 A 50 50 0 1 1 1,50" })), /*#__PURE__*/


    React.createElement("text", {
      fill: "#0c5c4c",
      "font-family": "Tahoma",
      "font-size": "0.77em",
      "font-weight": "bold" }, /*#__PURE__*/

    React.createElement("textPath", { href: "#text-arc" }, "Happy Holidays! Happy Holidays! Happy Holidays!"))));





}

detailScreens[16].svg = Text;

function Sleigh({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      width: 400 * size,
      height: 200 * size,
      viewBox: "-200 -100 400 200",
      fill: "none" }, /*#__PURE__*/

    React.createElement("path", {
      stroke: "#E0CEB9",
      "stroke-width": "4",
      d: "M-200 80 L -80 80 Q 80 80 70 -10 A 70 70 0 0 0 -70 -10 Q -80 80 80 80 L 200 80" }), /*#__PURE__*/


    React.createElement("g", { class: "sleigh" }, /*#__PURE__*/
    React.createElement("path", {
      d: " M -30 -2 L 30 -2 A 10 10 0 0 0 30 -22 M -20 -2 L -20 -17 M 20 -2 L 20 -17",



      stroke: "#AF6455",
      "stroke-width": "5" }), /*#__PURE__*/

    React.createElement("path", { d: "M -27 -17 L 27 -17", stroke: "#7A504F", "stroke-width": "6" }))));



}

detailScreens[17].svg = Sleigh;

function RingingBell({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "bell",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("g", { stroke: "#001514", "stroke-width": "2" }, /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "-45", r: "7", fill: "#4F6D7A" }), /*#__PURE__*/
    React.createElement("circle", { class: "bell-tongue", cx: "0", cy: "50", r: "10", fill: "#F79257" }), /*#__PURE__*/
    React.createElement("path", {
      d: " M -50 40 L -50 50 L 50 50 L 50 40 Q 40 40 40 10 C 40 -60 -40 -60 -40 10 Q -40 40 -50 40",







      fill: "#FDEA96" }))));




}

detailScreens[18].svg = RingingBell;

function Snowing({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("g", { id: "tree" }, /*#__PURE__*/
    React.createElement("polygon", { points: "-10,0 10,0 0 -50", fill: "#38755b" }), /*#__PURE__*/
    React.createElement("line", {
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "10",
      stroke: "#778074",
      "stroke-width": "2" })), /*#__PURE__*/



    React.createElement("circle", { id: "big-flake", cx: "0", cy: "0", r: "5", fill: "white" }), /*#__PURE__*/
    React.createElement("circle", { id: "small-flake", cx: "0", cy: "0", r: "3", fill: "white" })), /*#__PURE__*/


    React.createElement("rect", { x: "-100", y: "-100", width: "200", height: "200", fill: "#F1DBC3" }), /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "380", r: "350", fill: "#F8F4E8" }), /*#__PURE__*/

    React.createElement("use", { href: "#tree", x: "-30", y: "25", transform: "scale(2)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "-20", y: "40", transform: "scale(1.2)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "40", y: "40" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "50", y: "30", transform: "scale(1.5)" }), /*#__PURE__*/

    React.createElement("use", { href: "#big-flake", x: "0", y: "0", class: "flake fast" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "-50", y: "-20", class: "flake fast small" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "30", y: "-40", class: "flake fast" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "50", y: "-20", class: "flake fast small" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "30", y: "50", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "-70", y: "-80", class: "flake slow small" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "30", y: "50", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "90", y: "-80", class: "flake slow small" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "10", y: "-50", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "-50", y: "-60", class: "flake slow small" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "30", y: "70", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "10", y: "-80", class: "flake slow small" })));


}

detailScreens[19].svg = Snowing;

function Background({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("div", { class: "background", style: { width: 200 * size, height: 200 * size } }));

}

detailScreens[20].svg = Background;

function Clock({ size = 1 }) {
  const hour = new Date().getHours() % 12;
  const minute = new Date().getMinutes();
  let [hourRotation, setHourRotation] = React.useState(360 / 12 * hour);
  let [minuteRotation, setMinuteRotation] = React.useState(360 / 60 * minute);

  setTimeout(() => {
    const hour = new Date().getHours() % 12;
    const minute = new Date().getMinutes();
    setHourRotation(360 / 12 * hour);
    setMinuteRotation(360 / 60 * minute);
  }, 1000);

  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "clock",
      width: 200 * size,
      height: 200 * size,
      viewBox: "-100 -100 200 200" }, /*#__PURE__*/

    React.createElement("rect", { x: "-100", y: "-100", width: "200", height: "200", fill: "#CD803D" }), /*#__PURE__*/

    React.createElement("circle", { r: "55", stroke: "#FCCE7B", "stroke-width": "10", fill: "white" }), /*#__PURE__*/
    React.createElement("circle", {
      r: "45",
      stroke: "#B6705F",
      "stroke-width": "6",
      "stroke-dasharray": "6 17.56194490192345",
      "stroke-dashoffset": "3",
      fill: "none" }), /*#__PURE__*/

    React.createElement("g", { stroke: "#5f4c6c", "stroke-linecap": "round" }, /*#__PURE__*/
    React.createElement("line", {
      id: "hours",
      y2: "-20",
      "stroke-width": "8",
      transform: `rotate(${hourRotation})` }), /*#__PURE__*/

    React.createElement("line", {
      id: "minutes",
      y2: "-35",
      "stroke-width": "6",
      transform: `rotate(${minuteRotation})` }))));




}

detailScreens[21].svg = Clock;

function Lights({ size = 1 }) {
  const [lightsOn, setLights] = React.useState(false);

  const switchLights = () => setLights(!lightsOn);

  return /*#__PURE__*/(
    React.createElement("svg", {
      class: "lights",
      width: 400 * size,
      height: 200 * size,
      viewBox: "-200 -100 400 200" }, /*#__PURE__*/

    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("g", { id: "bulb" }, /*#__PURE__*/
    React.createElement("path", { d: "M 0,0 Q 20 25 0 40 Q -20 25 0 0" }), /*#__PURE__*/
    React.createElement("rect", { x: "-6", y: "-1", width: "12", height: "10", rx: "3", fill: "#5F4C6C" }))), /*#__PURE__*/



    React.createElement("path", { d: "M -140 -60 Q -70 -50 0 -60 Q 110 -70 110 10" }), /*#__PURE__*/
    React.createElement("line", { x1: "-70", y1: "-15", x2: "-70", y2: "-55" }), /*#__PURE__*/
    React.createElement("line", { x1: "30", y1: "-25", x2: "30", y2: "-60" }), /*#__PURE__*/
    React.createElement("use", {
      class: "b",
      href: "#bulb",
      x: "-120",
      y: "-45",
      transform: "rotate(5)",
      fill: lightsOn ? "#FFC05B" : "white" }), /*#__PURE__*/

    React.createElement("use", {
      class: "b",
      href: "#bulb",
      x: "-70",
      y: "-15",
      fill: lightsOn ? "#F86285" : "white" }), /*#__PURE__*/

    React.createElement("use", {
      class: "b",
      href: "#bulb",
      x: "-20",
      y: "-57",
      transform: "rotate(-5)",
      fill: lightsOn ? "#03A8A8" : "white" }), /*#__PURE__*/

    React.createElement("use", {
      class: "b",
      href: "#bulb",
      x: "30",
      y: "-25",
      fill: lightsOn ? "#748CEF" : "white" }), /*#__PURE__*/


    React.createElement("rect", { x: "90", y: "10", width: "40", height: "40", fill: "lightgray" }), /*#__PURE__*/
    React.createElement("circle", {
      id: "button",
      cx: "110",
      cy: "30",
      r: "15",
      fill: "red",
      onClick: switchLights })));



}

detailScreens[22].svg = Lights;

function Diagram({ size = 1 }) {
  const dataPoints = [3, 4, 7, 5, 3, 6];
  const sineWave = Array.from({ length: 115 }).
  map((item, index) => `${index - 55},${Math.sin(index / 20) * 20 + 10}`).
  join(" ");

  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" },
    dataPoints.map((dataPoint, index) => /*#__PURE__*/
    React.createElement("rect", {
      key: index,
      x: index * 20 - 55,
      y: 50 - dataPoint * 10,
      width: "15",
      height: dataPoint * 10,
      fill: "#CD803D" })), /*#__PURE__*/


    React.createElement("polyline", { points: sineWave, fill: "none", stroke: "black", "stroke-width": "5" })));


}

detailScreens[23].svg = Diagram;

function Threes() {
  return /*#__PURE__*/(
    React.createElement("g", null, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("g", { id: "tree" }, /*#__PURE__*/
    React.createElement("polygon", { points: "-10,0 10,0 0 -50", fill: "#38755b" }), /*#__PURE__*/
    React.createElement("line", { x2: "0", y2: "10", stroke: "#778074", "stroke-width": "2" }))), /*#__PURE__*/



    React.createElement("use", { href: "#tree", x: "-20", y: "25", transform: "scale(1.8)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "-10", y: "40", transform: "scale(1)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "30", y: "40", transform: "scale(0.8)" }), /*#__PURE__*/
    React.createElement("use", { href: "#tree", x: "40", y: "30", transform: "scale(1.2)" })));


}

function Snow() {
  return /*#__PURE__*/(
    React.createElement("g", { class: "snowing" }, /*#__PURE__*/
    React.createElement("defs", null, /*#__PURE__*/
    React.createElement("circle", { id: "big-flake", cx: "0", cy: "0", r: "5", fill: "white" }), /*#__PURE__*/
    React.createElement("circle", { id: "small-flake", cx: "0", cy: "0", r: "3", fill: "white" })), /*#__PURE__*/


    React.createElement("use", { href: "#big-flake", x: "0", y: "0", class: "flake fast" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "-50", y: "-20", class: "flake fast small" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "30", y: "-40", class: "flake fast" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "50", y: "-20", class: "flake fast small" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "30", y: "50", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "-70", y: "-80", class: "flake slow small" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "30", y: "50", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#big-flake", x: "90", y: "-80", class: "flake slow small" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "10", y: "-50", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "-50", y: "-60", class: "flake slow small" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "30", y: "70", class: "flake slow" }), /*#__PURE__*/
    React.createElement("use", { href: "#small-flake", x: "10", y: "-80", class: "flake slow small" })));


}

function SnowGlobe({ size = 1 }) {
  return /*#__PURE__*/(
    React.createElement("svg", { width: 200 * size, height: 200 * size, viewBox: "-100 -100 200 200" }, /*#__PURE__*/
    React.createElement("clipPath", { id: "snow-globe" }, /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "0", r: "80" })), /*#__PURE__*/


    React.createElement("g", { "clip-path": "url(#snow-globe)" }, /*#__PURE__*/
    React.createElement("rect", { x: "-100", y: "-100", width: "200", height: "200", fill: "#F1DBC3" }), /*#__PURE__*/
    React.createElement("circle", { cx: "0", cy: "380", r: "350", fill: "#F8F4E8" }), /*#__PURE__*/

    React.createElement(Threes, null), /*#__PURE__*/
    React.createElement(Snow, null)), /*#__PURE__*/


    React.createElement("circle", { cx: "0", cy: "0", r: "80", fill: "none", stroke: "gray", "stroke-width": "2" })));


}

detailScreens[24].svg = SnowGlobe;

function Day({ index, Component, select }) {
  const onMouseEnter = event => event.currentTarget.style["z-index"] = 10;
  const onMouseLeave = event => {
    const target = event.currentTarget;
    // Add a delay to leave enough time for the door to close
    setTimeout(() => {
      target.style["z-index"] = 1;
    }, 1000);
  };

  return /*#__PURE__*/(
    React.createElement("div", {
      class: "day",
      onClick: () => select(index),
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave }, /*#__PURE__*/

    React.createElement("div", { class: "cover" }, index + 1), /*#__PURE__*/
    React.createElement(Component, { size: "0.6" })));


}

function App() {
  const [selection, setSelection] = React.useState(undefined);
  const DetailSVG = selection != undefined && detailScreens[selection].svg;

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("div", { className: "grid" }, /*#__PURE__*/
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("h1", null, "Пивной адвент-календарь"), /*#__PURE__*/
    React.createElement("p", null, "Открой коробку с номером дня декабря и достань пиво")), /*#__PURE__*/

    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 0, Component: Decoration, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 1, Component: Three, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 2, Component: Gingerbread, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 3, Component: House, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 4, Component: DecorationWithClip, select: setSelection })), /*#__PURE__*/

    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 5, Component: Star, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 6, Component: Snowflake, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 7, Component: Forest, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, {
      index: 8,
      Component: DecorationWithGradient,
      select: setSelection }), /*#__PURE__*/

    React.createElement(Day, { index: 9, Component: Snowman, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "block" }, /*#__PURE__*/
    React.createElement(Day, { index: 10, Component: ThreeWithCurves, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 11, Component: Gift, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 12, Component: Bell, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 13, Component: Candy, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "big-block" }, /*#__PURE__*/
    React.createElement(Day, { index: 14, Component: Ribbon, select: setSelection }), /*#__PURE__*/

    React.createElement("div", { class: "day twitter" }, "Разработчик", /*#__PURE__*/

    React.createElement("a", { href: "https://t.me/lencodigitexer", target: "_blank" }, "@lencodigitexer")), /*#__PURE__*/




    React.createElement(Day, { index: 15, Component: Bear, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 16, Component: Text, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 17, Component: Sleigh, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 18, Component: RingingBell, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 19, Component: Snowing, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 20, Component: Background, select: setSelection })), /*#__PURE__*/


    React.createElement("div", { className: "small-block" }, /*#__PURE__*/
    React.createElement(Day, { index: 21, Component: Clock, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 22, Component: Lights, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 23, Component: Diagram, select: setSelection }), /*#__PURE__*/
    React.createElement(Day, { index: 24, Component: SnowGlobe, select: setSelection }))),


    selection != undefined && /*#__PURE__*/
    React.createElement("div", { className: "detail-screen" }, /*#__PURE__*/
    React.createElement("div", { className: "close", onClick: () => setSelection(undefined) }), /*#__PURE__*/
    React.createElement("div", { class: "content" }, /*#__PURE__*/
    React.createElement(DetailSVG, { size: "1" })), /*#__PURE__*/


    React.createElement("div", { class: "details" }, /*#__PURE__*/
    React.createElement("h1", null, detailScreens[selection].title), /*#__PURE__*/
    React.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: detailScreens[selection].description } }),


    detailScreens[selection].sourceCodes.map(({ type, content }) => /*#__PURE__*/
    React.createElement("div", { class: "code-section", key: type }, /*#__PURE__*/
    React.createElement("h2", null, type), /*#__PURE__*/

    React.createElement("pre", { class: "source-code" }, /*#__PURE__*/
    React.createElement("code", {
      dangerouslySetInnerHTML: {
        __html: hljs.highlight(type, content).value } }))))))));










}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));