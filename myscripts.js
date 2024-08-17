const p1name = document.getElementById("p1name");
const p1ac = document.getElementById("p1ac");
const p1pper = document.getElementById("p1pper");
const p1spvis = document.getElementById("p1spvis");
const p1visRange = document.getElementById("p1visRange");
const p1condition = document.getElementById("p1condition");
const p1conLeft = document.getElementById("p1conLeft");

const p2name = document.getElementById("p2name");
const p2ac = document.getElementById("p2ac");
const p2pper = document.getElementById("p2pper");
const p2spvis = document.getElementById("p2spvis");
const p2visRange = document.getElementById("p2visRange");
const p2condition = document.getElementById("p2condition");
const p2conLeft = document.getElementById("p2conLeft");

const p3name = document.getElementById("p3name");
const p3ac = document.getElementById("p3ac");
const p3pper = document.getElementById("p3pper");
const p3spvis = document.getElementById("p3spvis");
const p3visRange = document.getElementById("p3visRange");
const p3condition = document.getElementById("p3condition");
const p3conLeft = document.getElementById("p3conLeft");

const p4name = document.getElementById("p4name");
const p4ac = document.getElementById("p4ac");
const p4pper = document.getElementById("p4pper");
const p4spvis = document.getElementById("p4spvis");
const p4visRange = document.getElementById("p4visRange");
const p4condition = document.getElementById("p4condition");
const p4conLeft = document.getElementById("p4conLeft");

const p5name = document.getElementById("p5name");
const p5ac = document.getElementById("p5ac");
const p5pper = document.getElementById("p5pper");
const p5spvis = document.getElementById("p5spvis");
const p5visRange = document.getElementById("p5visRange");
const p5condition = document.getElementById("p5condition");
const p5conLeft = document.getElementById("p5conLeft");

const p6name = document.getElementById("p6name");
const p6ac = document.getElementById("p6ac");
const p6pper = document.getElementById("p6pper");
const p6spvis = document.getElementById("p6spvis");
const p6visRange = document.getElementById("p6visRange");
const p6condition = document.getElementById("p6condition");
const p6conLeft = document.getElementById("p6conLeft");

//Check local Storage
if (localStorage.getItem("p1name")) {
  p1name.value = localStorage.getItem("p1name");
  setName();
}
if (localStorage.getItem("p1ac")) {
  p1ac.value = localStorage.getItem("p1ac");
  setAC();
}
if (localStorage.getItem("p1pper")) {
  p1pper.value = localStorage.getItem("p1pper");
  setPper();
}
if (localStorage.getItem("p1spvis")) {
  p1spvis.value = localStorage.getItem("p1spvis");
  setSpvis();
}
if (localStorage.getItem("p1visRange")) {
  p1visRange.value = localStorage.getItem("p1visRange");
  setVisRange();
}
if (localStorage.getItem("p1condition")) {
  p1condition.value = localStorage.getItem("p1condition");
  setCondition();
}
if (localStorage.getItem("p1conLeft")) {
  p1conLeft.value = localStorage.getItem("p1conLeft");
  setCondition();
}

if (localStorage.getItem("p2name")) {
  p2name.value = localStorage.getItem("p2name");
  setName2();
}
if (localStorage.getItem("p2ac")) {
  p2ac.value = localStorage.getItem("p2ac");
  setAC2();
}
if (localStorage.getItem("p2pper")) {
  p2pper.value = localStorage.getItem("p2pper");
  setPper2();
}
if (localStorage.getItem("p2spvis")) {
  p2spvis.value = localStorage.getItem("p2spvis");
  setSpvis2();
}
if (localStorage.getItem("p2visRange")) {
  p2visRange.value = localStorage.getItem("p2visRange");
  setVisRange2();
}
if (localStorage.getItem("p2condition")) {
  p2condition.value = localStorage.getItem("p2condition");
  setCondition2();
}
if (localStorage.getItem("p2conLeft")) {
  p2conLeft.value = localStorage.getItem("p2conLeft");
  setCondition2();
}

if (localStorage.getItem("p3name")) {
  p3name.value = localStorage.getItem("p3name");
  setName3();
}
if (localStorage.getItem("p3ac")) {
  p3ac.value = localStorage.getItem("p3ac");
  setAC3();
}
if (localStorage.getItem("p3pper")) {
  p3pper.value = localStorage.getItem("p3pper");
  setPper3();
}
if (localStorage.getItem("p3spvis")) {
  p3spvis.value = localStorage.getItem("p3spvis");
  setSpvis3();
}
if (localStorage.getItem("p3visRange")) {
  p3visRange.value = localStorage.getItem("p3visRange");
  setVisRange3();
}
if (localStorage.getItem("p3condition")) {
  p3condition.value = localStorage.getItem("p3condition");
  setCondition3();
}
if (localStorage.getItem("p3conLeft")) {
  p3conLeft.value = localStorage.getItem("p3conLeft");
  setCondition3();
}

if (localStorage.getItem("p4name")) {
  p4name.value = localStorage.getItem("p4name");
  setName4();
}
if (localStorage.getItem("p4ac")) {
  p4ac.value = localStorage.getItem("p4ac");
  setAC4();
}
if (localStorage.getItem("p4pper")) {
  p4pper.value = localStorage.getItem("p4pper");
  setPper4();
}
if (localStorage.getItem("p4spvis")) {
  p4spvis.value = localStorage.getItem("p4spvis");
  setSpvis4();
}
if (localStorage.getItem("p4visRange")) {
  p4visRange.value = localStorage.getItem("p4visRange");
  setVisRange4();
}
if (localStorage.getItem("p4condition")) {
  p4condition.value = localStorage.getItem("p4condition");
  setCondition4();
}
if (localStorage.getItem("p4conLeft")) {
  p4conLeft.value = localStorage.getItem("p4conLeft");
  setCondition4();
}

if (localStorage.getItem("p5name")) {
  p5name.value = localStorage.getItem("p5name");
  setName5();
}
if (localStorage.getItem("p5ac")) {
  p5ac.value = localStorage.getItem("p5ac");
  setAC5();
}
if (localStorage.getItem("p5pper")) {
  p5pper.value = localStorage.getItem("p5pper");
  setPper5();
}
if (localStorage.getItem("p5spvis")) {
  p5spvis.value = localStorage.getItem("p5spvis");
  setSpvis5();
}
if (localStorage.getItem("p5visRange")) {
  p5visRange.value = localStorage.getItem("p5visRange");
  setVisRange5();
}
if (localStorage.getItem("p5condition")) {
  p5condition.value = localStorage.getItem("p5condition");
  setCondition5();
}
if (localStorage.getItem("p5conLeft")) {
  p5conLeft.value = localStorage.getItem("p5conLeft");
  setCondition5();
}

if (localStorage.getItem("p6name")) {
  p6name.value = localStorage.getItem("p6name");
  setName6();
}
if (localStorage.getItem("p6ac")) {
  p6ac.value = localStorage.getItem("p6ac");
  setAC6();
}
if (localStorage.getItem("p6pper")) {
  p6pper.value = localStorage.getItem("p6pper");
  setPper6();
}
if (localStorage.getItem("p6spvis")) {
  p6spvis.value = localStorage.getItem("p6spvis");
  setSpvis6();
}
if (localStorage.getItem("p6visRange")) {
  p6visRange.value = localStorage.getItem("p6visRange");
  setVisRange6();
}
if (localStorage.getItem("p6condition")) {
  p6condition.value = localStorage.getItem("p6condition");
  setCondition6();
}
if (localStorage.getItem("p6conLeft")) {
  p6conLeft.value = localStorage.getItem("p6conLeft");
  setCondition6();
}

//Set Listener
p1name.addEventListener("input", setName);
p1ac.addEventListener("input", setAC);
p1pper.addEventListener("input", setPper);
p1spvis.addEventListener("input", setSpvis);
p1visRange.addEventListener("input", setVisRange);
p1condition.addEventListener("input", setCondition);
p1conLeft.addEventListener("input", setConLeft);

p2name.addEventListener("input", setName2);
p2ac.addEventListener("input", setAC2);
p2pper.addEventListener("input", setPper2);
p2spvis.addEventListener("input", setSpvis2);
p2visRange.addEventListener("input", setVisRange2);
p2condition.addEventListener("input", setCondition2);
p2conLeft.addEventListener("input", setConLeft2);

p3name.addEventListener("input", setName3);
p3ac.addEventListener("input", setAC3);
p3pper.addEventListener("input", setPper3);
p3spvis.addEventListener("input", setSpvis3);
p3visRange.addEventListener("input", setVisRange3);
p3condition.addEventListener("input", setCondition3);
p3conLeft.addEventListener("input", setConLeft3);

p4name.addEventListener("input", setName4);
p4ac.addEventListener("input", setAC4);
p4pper.addEventListener("input", setPper4);
p4spvis.addEventListener("input", setSpvis4);
p4visRange.addEventListener("input", setVisRange4);
p4condition.addEventListener("input", setCondition4);
p4conLeft.addEventListener("input", setConLeft4);

p5name.addEventListener("input", setName5);
p5ac.addEventListener("input", setAC5);
p5pper.addEventListener("input", setPper5);
p5spvis.addEventListener("input", setSpvis5);
p5visRange.addEventListener("input", setVisRange5);
p5condition.addEventListener("input", setCondition5);
p5conLeft.addEventListener("input", setConLeft5);

p6name.addEventListener("input", setName6);
p6ac.addEventListener("input", setAC6);
p6pper.addEventListener("input", setPper6);
p6spvis.addEventListener("input", setSpvis6);
p6visRange.addEventListener("input", setVisRange6);
p6condition.addEventListener("input", setCondition6);
p6conLeft.addEventListener("input", setConLeft6);

//Functions
function setName() {
  localStorage.setItem("p1name", p1name.value);
  document.getElementById("p1r1nameDisplay").textContent = p1name.value;
}
function setAC() {
  localStorage.setItem("p1ac", p1ac.value);
}
function setPper() {
  localStorage.setItem("p1pper", p1pper.value);
}
function setSpvis() {
  localStorage.setItem("p1spvis", p1spvis.value);
}
function setVisRange() {
  localStorage.setItem("p1visRange", p1visRange.value);
}
function setCondition() {
  localStorage.setItem("p1condition", p1condition.value);
}
function setConLeft() {
  localStorage.setItem("p1conLeft", p1conLeft.value);
}

function setName2() {
  localStorage.setItem("p2name", p2name.value);
  document.getElementById("p2r1nameDisplay").textContent = p2name.value;
}
function setAC2() {
  localStorage.setItem("p2ac", p2ac.value);
}
function setPper2() {
  localStorage.setItem("p2pper", p2pper.value);
}
function setSpvis2() {
  localStorage.setItem("p2spvis", p2spvis.value);
}
function setVisRange2() {
  localStorage.setItem("p2visRange", p2visRange.value);
}
function setCondition2() {
  localStorage.setItem("p2condition", p2condition.value);
}
function setConLeft2() {
  localStorage.setItem("p2conLeft", p2conLeft.value);
}

function setName3() {
  localStorage.setItem("p3name", p3name.value);
  document.getElementById("p3r1nameDisplay").textContent = p3name.value;
}
function setAC3() {
  localStorage.setItem("p3ac", p3ac.value);
}
function setPper3() {
  localStorage.setItem("p3pper", p3pper.value);
}
function setSpvis3() {
  localStorage.setItem("p3spvis", p3spvis.value);
}
function setVisRange3() {
  localStorage.setItem("p3visRange", p3visRange.value);
}
function setCondition3() {
  localStorage.setItem("p3condition", p3condition.value);
}
function setConLeft3() {
  localStorage.setItem("p3conLeft", p3conLeft.value);
}

function setName4() {
  localStorage.setItem("p4name", p4name.value);
  document.getElementById("p4r1nameDisplay").textContent = p4name.value;
}
function setAC4() {
  localStorage.setItem("p4ac", p4ac.value);
}
function setPper4() {
  localStorage.setItem("p4pper", p4pper.value);
}
function setSpvis4() {
  localStorage.setItem("p4spvis", p4spvis.value);
}
function setVisRange4() {
  localStorage.setItem("p4visRange", p4visRange.value);
}
function setCondition4() {
  localStorage.setItem("p4condition", p4condition.value);
}
function setConLeft4() {
  localStorage.setItem("p4conLeft", p4conLeft.value);
}

function setName5() {
  localStorage.setItem("p5name", p5name.value);
  document.getElementById("p5r1nameDisplay").textContent = p5name.value;
}
function setAC5() {
  localStorage.setItem("p5ac", p5ac.value);
}
function setPper5() {
  localStorage.setItem("p5pper", p5pper.value);
}
function setSpvis5() {
  localStorage.setItem("p5spvis", p5spvis.value);
}
function setVisRange5() {
  localStorage.setItem("p5visRange", p5visRange.value);
}
function setCondition5() {
  localStorage.setItem("p5condition", p5condition.value);
}
function setConLeft5() {
  localStorage.setItem("p5conLeft", p5conLeft.value);
}

function setName6() {
  localStorage.setItem("p6name", p6name.value);
  document.getElementById("p6r1nameDisplay").textContent = p6name.value;
}
function setAC6() {
  localStorage.setItem("p6ac", p6ac.value);
}
function setPper6() {
  localStorage.setItem("p6pper", p6pper.value);
}
function setSpvis6() {
  localStorage.setItem("p6spvis", p6spvis.value);
}
function setVisRange6() {
  localStorage.setItem("p6visRange", p6visRange.value);
}
function setCondition6() {
  localStorage.setItem("p6condition", p6condition.value);
}
function setConLeft6() {
  localStorage.setItem("p6conLeft", p6conLeft.value);
}

const p1r1nameDisplay = document.getElementById("p1r1nameDisplay");
p1r1nameDisplay.textContent = p1name.value;

const nameEl = [];
for (let i = 1; i <= 6; i++) {
  nameEl.push(document.getElementById("p" + i.toString() + "name"));
}

const nameDisplayEls = document.getElementsByClassName("nameDisplay");
for (let i = 0; i <= 6; i++) {
  document.getElementById(
    "p" + (i + 1).toString() + "r1nameDisplay"
  ).textContent = nameEl[i].value;
}
