var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
if (confirm("thank you!")) {
  txt = "you got services!";  
} else {
    txt = "You didnt finish!"
    
}
  const form = [ 
 'Name', 
 'Email', 
  'Landscapping', 
  'Debris Pickup', 
  'General Labor',
   'Sunday', 
  'Monday', 
  'Tuesday',
'Wedsnesday', 
'Thursday', 
'Friday', 
'Saturday'
]; 

console.log(form [0] );
console.log(form [1] );
console.log(form [2] );
console.log(form [3] );
console.log(form [4] );
console.log(form [5] );
console.log(form [6] );
console.log(form [7] );
console.log(form [8] );
console.log(form [9] );
console.log(form [10] );
console.log(form [11] );

alert