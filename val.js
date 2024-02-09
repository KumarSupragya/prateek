function no() {
  const listt = document.querySelector(".js-yes");
  listt.classList.add("yesupgrade");
  const mainques = document.querySelector(".js-question");
  mainques.innerHTML = "Are you Sureeeee?";

  const noo = document.querySelector(".js-no");
  noo.classList.add("nodegrade");
}

function no1() {
  const lis = document.querySelector(".js-yes");
  lis.classList.add("yesupgrade1");
  const mainque = document.querySelector(".js-question");
  mainque.innerHTML = "Think again Pwizzzzz &#x1F449 &#x1F448";

  const noo = document.querySelector(".js-no");
  noo.classList.add("nodegrade1");
}

function no2() {
  const lis = document.querySelector(".js-yes");
  lis.classList.add("yesupgrade2");
  const mainque = document.querySelector(".js-question");
  mainque.innerHTML = "150 rupyaaa degaaaa";

  const noo = document.querySelector(".js-no");
  noo.classList.add("nodegrade2");

  const notext = document.querySelector(".js-but");
  notext.classList.add("last");
}

function no3() {
  const lis = document.querySelector(".js-yes");
  lis.classList.add("yesupgrade3");
  const mainque = document.querySelector(".js-question");
  mainque.innerHTML = "Ruk ab to tera game bajana parega re devaaa";


  const noo = document.querySelector(".js-no");
  noo.classList.add("nodegrade3");

  


}

function yes() {
  const listf = document.querySelector(".js-no");
  const list = document.querySelector(".js-yes");

  console.log(listf);
  listf.classList.add("oops");
  list.classList.add("oops");
  const mainques = document.querySelector(".js-question");
  mainques.innerHTML = "Yayyyyyyyyy I knew you loved meeeeeeeeeee !!!!!";
}

var times = 0;

var decideFunction = function () {
  if (times == 0) {
    no();
    times++;
  } else if (times == 1) {
    no1();
    times++;
  } else if (times == 2) {
    no2();
    times++;
  }

  else if (times == 3) {
    no3();
    times++;
  }
};
