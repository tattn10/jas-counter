// Array.prototype._sort=function(){
//     for(let i=0;i<this.length-1; i++){
//         for(let j=i+1; j<this.length; j++){
//     if(this[i]>this[j]){

const { text } = require("stream/consumers");


       
//         temp=this[i];
//         this[i]=this[j];
//         this[j]=temp;
//     }
//         }
//     }
//     return this;
// }


// console.log([40,100,-1,5,25,10,100]._sort());

// var library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         libraryID: 1254
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         libraryID: 4264
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         libraryID: 3245
//     }];

//     console.log(library.sort(function(a,b){return a.title.charCodeAt()-b.title.charCodeAt()}


// const find_methods= function(obj){
//       return Object.getOwnPropertyNames(obj).filter(function(pro){
//           return typeof obj[pro]=='function';
//       })
// }
// const find_allProperties= function(obj){
//   return Object.getOwnPropertyNames(obj);
// }
// let x=find_methods(Math);
// let y= find_allProperties(Math);
// console.log(x);
// console.log(y);


// const tat= function(r,t){
//     this.rad=r;
//     this.tt=t;
//     this.nat= function(){
//         return `the sum is: ${this.rad+this.tt}`;
//     }
// }
// const rr= new tat(3,5);

// console.log(rr.nat())


function clik(){
    text.style.fontSize='100px';
}