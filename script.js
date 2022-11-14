var input = document.getElementById("i");
var btn = document.getElementById("btn");
// var sort = document.getElementById("iconSort");

var arr = [];

document.getElementById("btn").addEventListener("click", function() {
   e.preventDefault();
   var inputv = document.getElementById("i").value;
   
   var arrInput = arr.push(inputv)
   console.log(arr);
  

})

document.getElementById("i").addEventListener("keyup", function(event) {
   event.preventDefault();
   if (event.keyCode === 13) {
      var lis = document.createElement("li");
      var inputValues = input.value;
      var vv = document.createTextNode(inputValues);
     
      lis.appendChild(vv);
      if(input.value == "") {
         alert("List item must be add!")
      } else {
         console.log(input.value)
         document.getElementById("ul").appendChild(lis);
         document.getElementById("ul").appendChild(lis).style.wordBreak = "break-word";
         lis.style.height = "auto"
      }
      var spans = document.createElement("span");
      var txts = document.createTextNode("\u00D7");
      spans.className = "span";
      spans.appendChild(txts);
      lis.appendChild(spans);
      var spanlists = document.querySelectorAll(".span")
      for (i = 0; i < spanlists.length; i++) {
         spanlists[i].onclick = function() {
            var liparents = this.parentElement
          liparents.style.display = "none"
          }
       }
   }
});
function newElement() {
   var li = document.createElement("li");
   var inputValue = input.value;
   var v = document.createTextNode(inputValue);
  
   li.appendChild(v);
   if(input.value == "") {
      alert("List item must be add!")
   } else {
      console.log(input.value)
      document.getElementById("ul").appendChild(li);
      document.getElementById("ul").appendChild(li).style.wordBreak = "break-word";
      li.style.height = "auto"
   }
   var span = document.createElement("span");
   var txt = document.createTextNode("\u00D7");
   span.className = "span";
   span.appendChild(txt);
   li.appendChild(span);
   var spanlist = document.querySelectorAll(".span")
   for (i = 0; i < spanlist.length; i++) {
      spanlist[i].onclick = function() {
         var liparent = this.parentElement
       liparent.style.display = "none"
       }
    }
    input.value = "";
  
}


