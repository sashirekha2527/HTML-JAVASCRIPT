//all looping statements in javascript
//for loop
for(let i=0;i<5;i++){
    console.log("for loop Iteration" +i);
}
//while loop
let j=0;
while(j<5){
    console.log("While loop Iteration" +j);
    j++;
}
//do-while loop
let k=0;
do{
    console.log("Do-While loop Iteration:" +k);
    k++;
}while(k<5);
//for...of loop
let arr=[10,20,30,40,50];
for(let value of arr){
    console.log("for...of loop Value:" +value);
}
//for...in loop
let obj={a:1,b:2,c:3};
for(let key in obj){
    console.log("for...in Loop Key:"+key+",Value:"+obj[key]);
}
//forEach loop
arr.forEach(
    (value,index)=>{console.log("forEach Loop Index:"+index+",value:"+value);
});