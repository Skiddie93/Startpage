var act = false;
document.getElementById("hov1").addEventListener("onmouseover", hov1());


const todoButton = document.getElementById("tlinput")
const todoItems = document.getElementById("todoListWrap")
const hideIcon = document.getElementById("tlicon")


function styleChange() {
  todoButton.classList.toggle("tlbtn-active");
  todoItems.classList.toggle("todoListWrap-active");
  hideIcon.classList.toggle("tlicon-active");


if (act == false ) {
document.getElementById("ips").value = "";
document.getElementById("hov2").addEventListener("onmouseover", hov2());
document.getElementById('ips').focus();
      act = true;

} else {

  document.getElementById("ips").value = "";

  document.getElementById("hov2").onmouseover = function() {
  tlinput.style.opacity = "null";
  }

  document.getElementById("hov1").addEventListener("onmouseover", hov1());
      act = false;
  }
};

function setInputValue(){
  document.getElementById("ips").value = "";
}

function hov1() {
  document.getElementById("hov1").onmouseover = function() {
      tlinput.style.opacity = "0.4";
  }
      document.getElementById("hov1").onmouseout = function() {
          tlinput.style.opacity = "1";
  }
}

function hov2() {
  document.getElementById("hov2").onmouseover = function() {
      tlinput.style.opacity = "0";
  }
      document.getElementById("hov2").onmouseout = function() {
          tlinput.style.opacity = "1";
  }
}


/*_____________________________________________________________________________________*/

var todoarray = [];


function addRemoveTodo(){
    document.getElementById("addbtn").addEventListener("click", function(e){

      let butt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          butt.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>";
          butt.classList.add("xButton")

          let txtVal = document.getElementById('ips').value;
          let listNode = document.getElementById('listNode');
          let liNode = document.createElement("LI");
          let  txtNode = document.createTextNode(txtVal);

          if(txtVal !== ""){
            liNode.appendChild(txtNode);
            listNode.appendChild(liNode);
            liNode.appendChild(butt);

            if(localStorage.length !== 0){
                  todoarray = JSON.parse(localStorage.getItem("1"));
                }
            todoarray.push(txtVal);
            var jsonString = JSON.stringify(todoarray);
            localStorage.setItem("1", jsonString);
            document.getElementById("ips").value = "";
            document.getElementById('ips').focus();

}else{

document.getElementById('ips').focus();

}
  e.stopPropagation();

  butt.addEventListener("click", function(e){
  liNode.removeChild(txtNode);
  liNode.removeChild(butt);
  todoarray = JSON.parse(localStorage.getItem("1"))
  let indexarray = todoarray.indexOf(txtVal);
  console.log(todoarray);
if (indexarray > -1) {
  todoarray.splice(indexarray, 1);
  localStorage.clear();
   jsonString = JSON.stringify(todoarray);
  localStorage.setItem("1", jsonString);
}
  e.stopPropagation();
        document.getElementById('ips').focus();
});
    });

    }

    addRemoveTodo()


function readLS(){

  if (localStorage.length==0) {
    let fake = JSON.stringify(todoarray);
    localStorage.setItem("1", fake);
  }

let readlist = JSON.parse(localStorage.getItem("1"))
for (var i = 0; i < readlist.length; i++) {
  let butt = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      butt.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z\" /></svg>";
      butt.classList.add("xButton")

  let txtVal = readlist[i]
  let listNode = document.getElementById('listNode');
  let liNode = document.createElement("LI");
  let  txtNode = document.createTextNode(txtVal);

      liNode.appendChild(txtNode);
      liNode.appendChild(butt);
      listNode.appendChild(liNode);

      butt.onclick = function(e){
        liNode.removeChild(txtNode);
        liNode.removeChild(butt);
        let indexarray = readlist.indexOf(txtVal);
        if (indexarray > -1) {
            readlist.splice(indexarray, 1);
            localStorage.clear();
            var json = JSON.stringify(readlist);
            localStorage.setItem("1", json);
}
e.stopPropagation();
  };

}
}
