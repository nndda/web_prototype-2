var rt = document.querySelector(':root');

var primary_col;    var primary_col_def = "#59FFEB";
var secondary_col;  var secondary_col_def = "#F9F913";


window.addEventListener("load", startup, false);

console.log(document.querySelector("#color_p"));
console.log(document.querySelector("#color_s"));

function reset_col() {
  console.log("custom color reset");
  primary_col.value = primary_col_def;
  secondary_col.value = secondary_col_def;
  rt.style.setProperty('--primary-col', primary_col_def);
  rt.style.setProperty('--secondary-col', secondary_col_def);
  localStorage.removeItem('local_primary_col');
  localStorage.removeItem('local_secondary_col');
}

function startup() {
  if (localStorage.getItem('local_primary_col') && localStorage.getItem('local_secondary_col')) {

  rt.style.setProperty('--primary-col', localStorage.getItem('local_primary_col'));
  rt.style.setProperty('--secondary-col', localStorage.getItem('local_secondary_col'));

  }

  primary_col = document.querySelector("#color_p");
  primary_col.value = primary_col_def;
  primary_col.addEventListener("input", updateFirst, false);
  primary_col.addEventListener("change", updateAll, false);
  primary_col.select();

  secondary_col = document.querySelector("#color_s");
  secondary_col.value = secondary_col_def;
  secondary_col.addEventListener("input", updateFirst, false);
  secondary_col.addEventListener("change", updateAll, false);
  secondary_col.select();
}

function updateFirst(event) {
  console.log(secondary_col.value);
  console.log(document.querySelector("#color_s").value);
  rt.style.setProperty('--primary-col', primary_col.value);
  rt.style.setProperty('--secondary-col', secondary_col.value);
  }

function updateAll(event) {
  localStorage.setItem('local_primary_col', primary_col.value);
  localStorage.setItem('local_secondary_col', secondary_col.value);

  rt.style.setProperty('--primary-col', primary_col.value);
  rt.style.setProperty('--secondary-col', secondary_col.value);
  }