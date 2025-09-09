## ASSIGNMENT-006 

---
####  Answer to the following question-

#### 1) What is the difference between var, let, and const?

- var was used on old js code. It is function scope. When we declare something through var, it works globally and we can re declare it . We can change the value also. 

- let is using for declare something on modern js code. It is block scope. When we declare something through let, it works only specific block. We can change the value but we can't re declare it.

- const use for the values which doesnot need to change the value . It only contain the constant value and it is  block scope

#### 2) What is the difference between map(), forEach(), and filter()? 

- map() always return a new array . when we get an array  , we can use map() to get doubled, trippled from each item of the array . It works like array.map(x => x*2), and we get new array , which is doubled from the previous array

- forEach() is used for get each item from an array but It does not return an Array . 

- filter() is used on various condition on array . If the condition was true it return a new array , where every items will be remain based on the condition

#### 3) What are arrow functions in ES6?

- arrow funtion is used for short function . It is Shorter than normal function . 

- Arrow function is in ES6  are shorter than normal function. When we need to call a shorter function we can use arrow function. We dont need to call any return .  
- normal function: 
 function sum( a, b) { return a + b } 

  arrow function 
  const sum = (a, b) = a + b ;


#### 4) How does destructuring assignment work in ES6?

- Destructuring assignment is a way to get value or properties from array or object into distinct variables in easiest way.

- const array = [1, 2 , 3 ,4]; 
    const [a,b,c,d] = array ;
    console.log(c) // result in console will be 3 


    const obj = {
    name: `Shourov`,
    age : 22 ,
    married : false
    };

    const {name , age , married} = obj ;

    console.log(`${name} is ${age} years old.`) // result will be on console Shourov is 20 years old.



- it is the easiest way to get value or properties . If we use normal method to get value of c from array and name from obj, we have to write array[2] and obj["name"] . It is tough to get value . But destructuring assignment make easy for us .  



    

#### 5) Explain template literals in ES6. How are they different from string concatenation?

- Template literals are using by bactic quotation (` `) instead of single or double quotation.  Its reduce time to get a string. We can use multi line strings by using bactic quotations. Even we can use a js value by using ${x} (ex: let x=10) in bactic quotations amd the answer will be 10 instead of ${x} , even we can assign arithmetic operations inside of bactic quotation . It is shorter, cleaner stronger than single or double quotations.  The using of bactic quotation is template literals. 

