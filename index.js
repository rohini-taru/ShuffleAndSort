import './style.scss';

const arrayOrg = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var workingArray = [];
workingArray.push(...arrayOrg);

/* render current array */
function prepareInnerHTML(arrayTemp) {
  const appDiv = document.getElementById('flexDynamicContainer');
  appDiv.innerHTML = '';

  var finalInnerHtml = '';
  for (let ind = 0; ind < arrayTemp.length; ind++) {
    const block =
      `<div class="block" id="block` +
      arrayTemp[ind] +
      `">` +
      `<label class="blockLabel">` +
      arrayTemp[ind] +
      `</label>` +
      `</div>`;

    finalInnerHtml = finalInnerHtml + block;
  }
  setTimeout(function () {
    appDiv.innerHTML = '' + finalInnerHtml;
  }, 100);
}

/* render default array */
console.log(workingArray);
prepareInnerHTML(workingArray);

/* shuffle current array */
var btn1 = document.getElementById('btnShuffle');
btn1.addEventListener(
  'click',
  function shuffle() {
    var shuffleArray = [];
    shuffleArray.push(...workingArray);

    var m = shuffleArray.length,
    var t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = shuffleArray[m];
      shuffleArray[m] = shuffleArray[i];
      shuffleArray[i] = t;
    }

    prepareInnerHTML(shuffleArray);
    workingArray = [];
    workingArray.push(...shuffleArray);
  },
  false
);

/* sort current array */
var btn2 = document.getElementById('btnSort');
btn2.addEventListener(
  'click',
  function sort() {
    var sortArray = [];
    sortArray.push(...workingArray);

    sortArray.sort(function (a, b) {
      return a - b;
    });

    prepareInnerHTML(sortArray);
    workingArray = [];
    workingArray.push(...sortArray);
  },
  false
);
