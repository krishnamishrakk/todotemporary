document.querySelector(".button2").onclick = function () {
    document.querySelector(".p1").style.display = "none";
    document.querySelector(".container2").style.visibility = "visible"
}

document.querySelector("#button1").onclick = function () {
    let x = document.querySelector("#input").value;
    if (x == 0) {
        alert("Please add a task")
    } else {
     document.querySelector(".taskadd").innerHTML+=
     `<div class="newbox">
     <span class="newin">${document.querySelector("#input").value}</span>
     <button class= "delete"></button>
     
     
     </div>
     `;
     let d= document.querySelectorAll(".delete");
for(let i=0;i<d.length;i++){
    d[i].onclick=function(){
        this.parentNode.remove();
    }
}
  let com= document.querySelectorAll(".taskadd");
  for(let i=0;i<com.length;i++){
      com[i].onclick=function(){
          this.classList.toggle("completed");
      }
  }
  document.querySelector("#in").value= "";

    }
}
// let d= document.querySelectorAll(".delete");
// for(let i=0;i<d.length;i++){
//     d[i].onclick=function(){
//         this.parentNode.remove();
//     }
// }
