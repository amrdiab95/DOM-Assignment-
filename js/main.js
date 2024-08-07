


//array method

var names =["ahmed" , "mahmoud" , "Mostafa" ,"ali" , "amr" , true,22,"@","!","zaki","#"];

// var y = names.toString();
// console.log(y);

//pop push shift unshift

// names.pop();
// names.pop();
// console.log(names);

// var x= names.push("mariam");
// console.log(x);
// if (x>6){
//     names.pop();
// console.log(names);

// var x= names.shift();
// console.log(x);
// console.log(names);


// var x = names.unshift("amr")
// console.log(x);
// console.log(names);

// delete names[2];
// console.log(names[2]);


// names.splice(2,3);
// console.log(names);

// names.sort();
// console.log(names);

// names.reverse();
// console.log(names);


// loop ===> while , do while , for loop , for in 


// document.write(1);
// document.write(2);
// document.write(3);
// document.write(4);
// document.write(5);
// document.write(6);
// document.write(7);
// document.write(8);
// document.write(9);
// document.write(10);

// not logic to write all of this use loop method easier. 


// var i=15; 
// while(i<=10){
//     document.write(i + "<br>");
//     i++;
// }

// do{
//     document.write(i +"<br>");
//     i--;
// }while(i>=10);

// for(var i=0;i<=10;i++){
//     document.write(i+"<br>");
// }

// lenght btsht3'l m3 el string  w el array 
// for(var i=0; i<names.length; i++){
//     console.log(names[i]);
// }
//this loop instead of repeating console.log as below. 
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);

// var cartoona ="";
// for(var i=0; i<names.length; i++){
//     cartoona = cartoona+names[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = cartoona;

//for in 

//var names= ["ahmed","ali","40"]; متغير يحمل اكثر من قيمة بس من غير معرف اللي جوة

// var person = {
//     firstname : "ahmed",
//     lastname : "ali",
//     age : 40
// }

// for (var i in person){
//     console.log(i + " : " + person[i]);
// }


// console.log(person["lastname"]);  //bracket notation 
// console.log(person.lastname);  //dot notation
// console.log(person.firstname);  
// console.log(person.age);  


// js math 



//DOM document object model 

// we can catch objects from html page such as : URL , HEAD , BODY , ALL , TITLE , LINKS , DOCTYPE 

//EXAMPLE 

// console.log(document.URL);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.doctype);
// document.title ="Array";
// console.log(document.title);

// example for using for loop for editing array objects colors 
// var x= document.links;    // kda ana mskt el links anchor tags ely fi html page 
// x.style.color ="red";   // kda msh hy7sal haga fi colors el links aw el anchor tags 3shan hwa x m5zna el links kolha fi array fa 3shan aklm el objects el fi el array lazem 
// aklm kol wa7da lw7daha 
// x[0].style.color="red";
// x[1].style.color="red";
// x[2].style.color="red";
// x[3].style.color="red";
// x[4].style.color="red";
// fa lazem a3ml zy fo2 kda aw ast5dm for loop 
// for (var i=0 ; i<x.length; i++){
//     x[i].style.color="red";
// }



//==================================================

// var x= document.querySelector("#demo");
// console.log(x.parentElement.parentNode.parentElement);

// var x= document.querySelector("#demo");
// console.log(x.children);



// creation of elements in html page through js . 

// for example <h5 class="mouse" id="watch">hello world</h5>

// var newElement = document.createElement("h5");  // <h5></h5>
// var text = document.createTextNode("hello world"); //<h5>hello world</h5>
// newElement.append(text);
// newElement.className ="mouse";
// newElement.id = "watch"


// var testElement = document.querySelector(".test");
// testElement.insertBefore(newElement, testElement.children[0]);

// document.body.appendChild(newElement); 

//3shan y7ot el new created item in the body of the HTML page. 
// //without this it won't be added , kda el new element da will be added 
// after script tag of the js in HTML page.
// to add in a specific location. 
 


// document.querySelectorAll(".hello").forEach( function(item){
//     item.onclick= function(event){
//         document.querySelector("#demo").style.color= event.target.id;
// console.log(event);
//     }
// })



document.querySelectorAll(".hello").forEach( function(item){
    item.onclick= function(){
        document.querySelector("#demo").style.color= item.dataset.color;
    }
})


//=============================================================================

document.querySelector("form").onsubmit = function(){
    var watch = document.querySelector("#watch").value ; 
    var result = document.querySelector("#result");
    if(watch==""){
        return false;
    }else{
    var myLi = document.createElement("li");  // <li></li>
    myLi.innerHTML = watch ; 
    
    result.appendChild(myLi);
    document.querySelector("watch") .value="";
    return false ; 
}
}


