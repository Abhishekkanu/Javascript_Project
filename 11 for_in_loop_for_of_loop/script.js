
// 16-12-2024
var a=10;
function functiona() {
    console.log("start function a");

    function functionb() {
    console.log("start function b");

    }
    functionb();
}
functiona();
console.log("global context");



var name='john';
function first(){
    var a ='hello';
    second();
    console.log(a + " " + name);
}

function second(){
    var b ='hi';
    third();
    console.log(b + " " + name);

}

function third(){
    var c ='hey';
    console.log(c + " " + name);
}
first();


//if condition
var age=20;
if(age>18){
    document.write("<b>YOU ARE ELIGIBLE TO VOTE.</b>");
}
else{
    document.write("<b>NOT ELIGIBLE.</b>");
}


//switch case
var grade = 'A';
document.write("<br>entering switch block <br/>");
switch(grade){
    case 'A':document.write("good job <br/>");
    break;
    case 'B':document.write("good <br/>");
    break;
    case 'C':document.write("better <br/>");
    break;
    case 'D':document.write("not so good <br/>");
    break;
    case 'E':document.write("bad <br/>");
    break;

    default:document.write("unkonwn grade <br/>")
}
document.write("exiting switch box");


//loops
var count;
document.write("starting loop" + "<br/>");
for(count=0; count<10; count++){
    document.write("current count:"+count);
    document.write("<br/>");
}
document.write("loop stopped!");


//odd even program
for(var i=0;i<100;i++)
{
    if(i%2==0){
        console.log(i + "is an even number.");
    }
    else{
        console.log(i+"is an odd number.");
    }
}

//objects
var myarray = ["A","B","C"];
for(var i=0; i<myarray.length;i++)
{
    console.log("The member of myarray in index " + i +" is " + myarray[i]);
}


//while loop
var count=0;
document.write("starting loop");

while(count<10){
    document.write("current count:"  + count + "<br/>");
    count++;
}
document.write("loop stopped");


//javascript function without parameters
function myfunction()
{
    alert("hello world");
}


//js function with parameters
function sayhello(name,age)
{
    document.write(name + " is " + age + " years old ");
}

//function to add
function add(a,b){
    console.log(a+b);
    document.write(a+b);
}
add(10,20);
