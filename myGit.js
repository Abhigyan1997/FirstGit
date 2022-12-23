//QuerySelector
var second=document.querySelector('.list-group-item:nth-child(2)');
second.style.backgroundColor='green';

var invisible=document.querySelector('.list-group-item:nth-child(3)');
invisible.style.display='none';

//QuerySelectorAll
var second=document.querySelectorAll('.list-group-item:nth-child(2)');
second.style.backgroundColor='green';

var odd=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(var i=0;i<odd.length;i++);
odd[i].style.backgroundColor='green';