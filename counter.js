const increase= document.querySelector(".increase");
const decrease= document.querySelector(".decrease");
const reset= document.querySelector(".reset");
const number=document.getElementById("numb");
let count=0;

increase.addEventListener("click",function(){
      count++;
      number.textContent= count;
      if(count>0){
        number.style.color='green';
     }

});

decrease.addEventListener("click",function(){
    count--;
    number.textContent= count;
    if(count<0){
       number.style.color='red';
    }
}) ;
    

reset.addEventListener("click",function(){
    count=0;
    number.textContent= count;
    if(count==0){
    number.style.color= 'rgb(4,4,57)';  
} 
}) ;

 