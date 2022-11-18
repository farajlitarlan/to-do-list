let input = document.getElementById("i");
let btn = document.getElementById("btn");
// let icon = document.getElementById("iconSort");
let icon = document.querySelectorAll('.icon');


icon.addEventListener('click' , sorting);

let arr = [];

document.getElementById("btn").addEventListener("click", function(e) {
   e.preventDefault();
   let inputv = document.getElementById("i").value;
   
   let arrInput = arr.push(inputv)
   
  

})

document.getElementById("i").addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode === 13) {
      let lis = document.createElement("li");
      let inputValues = input.value;
      let vv = document.createTextNode(inputValues);
     
      lis.appendChild(vv);
      if(input.value == "") {
         alert("List item must be add!")
      } else {
         
         document.getElementById("ul").appendChild(lis);
         document.getElementById("ul").appendChild(lis).style.wordBreak = "break-word";
         lis.style.height = "auto"
      }
      let spans = document.createElement("span");
      let txts = document.createTextNode("\u00D7");
      spans.className = "span";
      spans.appendChild(txts);
      lis.appendChild(spans);
      let spanlists = document.querySelectorAll(".span")
      for (i = 0; i < spanlists.length; i++) {
         spanlists[i].onclick = function() {
            let liparents = this.parentElement
          liparents.style.display = "none"
          }
       }
   }
});
function newElement() {
   let li = document.createElement("li");
   let inputValue = input.value;
   let v = document.createTextNode(inputValue);
  
   li.appendChild(v);
   if(input.value == "") {
      alert("List item must be add!")
   } else {
    
      document.getElementById("ul").appendChild(li);
      document.getElementById("ul").appendChild(li).style.wordBreak = "break-word";
      li.style.height = "auto"
   }
   let span = document.createElement("span");
   let txt = document.createTextNode("\u00D7");
   span.className = "span";
   span.appendChild(txt);
   li.appendChild(span);
   let spanlist = document.querySelectorAll(".span")
   for (i = 0; i < spanlist.length; i++) {
      spanlist[i].onclick = function() {
         let liparent = this.parentElement
       liparent.style.display = "none"
       }
    }
    input.value = "";
    enableDragList('todo-list')
}


// document.querySelector('.icon').addEventListener('click', (event) =>
// {
//     if (event.target.src.indexOf("downsort.svg") != -1)
//     { event.target.src = 'upsort.svg'; sortList(true) }
//     else { event.target.src = 'downsort.svg'; sortList(false); }
// })


 
 function enableDragList(listClass) {
   const list = document.getElementsByClassName(listClass)[0];
   Array.prototype.map.call(list.children, (item) => {
      enableDragItem(item)
   });
 }
 
 function enableDragItem(item) {
  
   item.setAttribute('draggable', true)
   item.ondrag = handleDrag;
   item.ondragend = handleDrop;
 }
 
 function handleDrag(item) {
   const selectedItem = item.target,
         list = selectedItem.parentNode,
         x = item.clientX,
         y = item.clientY;
  
   selectedItem.classList.add('drag-sort-active');
   let swapItem = document.elementFromPoint(x, y) === null ? selectedItem : document.elementFromPoint(x, y);
   
   if (list === swapItem.parentNode) {
     swapItem = swapItem !== selectedItem.nextSibling ? swapItem : swapItem.nextSibling;
     list.insertBefore(selectedItem, swapItem);
   }
 }
 
 function handleDrop(item) {
   item.target.classList.remove('drag-sort-active');
 }
 

function sorting(){
let nodeList = document.querySelectorAll('input');
let str = new Array ;
for(let i =0 ; i<(nodeList.length); i++) {
   if(nodeList[i].value!='')
   str[i]=nodeList[i].value
}

str.sort();
str.reverse()
for(let i =0;i<n(nodeList.length); i++ ){
   nodeList[i].value=str[i]
   if(str[i]==undefined) 
   nodeList[i].value=''
}
}



document.querySelector('.icon').addEventListener('click' , sorting);