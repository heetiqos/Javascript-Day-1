// Basic Exercise 2
console.log("Hi my name is Martin");


// Intermediate Exercise 1
let cars=["Tesla", "Audi","Renault","Volvo","Mazda","Fiat","Ferrari"];
let sortedCars=cars.sort();
console.log(sortedCars);

// Intermediate Exercise 2
let fruits=["Apple","Banana","Kiwi"];
fruits.push("Orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

let animals=["Monkey","Horse","Dog"];
let sortedAnimals=animals.sort();
console.log(sortedAnimals);

animals.unshift("Cat");
console.log(animals);

//Intermediate Exercise 3
let text="mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
let textlist=text.replaceAll("/","<br>");
document.write(textlist+"<br>");


//Advanced Exercise 1
let num1= 7;

let num2= 14;

let num3= "21";

let num4 = '36';

let num5 = 42;
let sum=num1+num2+Number(num3)+Number(num4)+num5;
console.log(sum);

let num6 = '1';

let num7 = 15;

let num8= 8;

let num9 = "1";
let product=Number(num6)*num7*num8*Number(num9);
console.log(product);

let num10=120;
let num11=120;
let quotient=num10/num11;
document.write(quotient);

//Advanced Exercise 2
let people = ["Greg","Mary","Devon","James"];
people.shift();
console.log(people);

people.unshift("Matt");
console.log(people);

people.pop();
console.log(people);

people.push("Kristine");
console.log(people);

let people1=people.slice(2,4);
console.log(people1);

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo"));

people = ["Greg","Mary","Devon","James"];
console.log(people);

people.splice(2,1);
console.log(people);

people.splice(2,0,"Elizabeth","Anna");
console.log(people);

//Advanced Exercise 3
let numbers=[ [1, 2, 1, 24], 
              [8, 11, 9, 4], 
              [7, 0, 7, 27], 
              [7, 4, 28, 14], 
              [3, 10, 25, 7], 
              [21, 4, 6, 17], 
              [3, 5, 26, 3] 
            ];

console.log(numbers[1] [1]);
console.log(numbers[4] [2]);
console.log(numbers[5] [3]);
console.log(numbers[2] [3]);
console.log(numbers[2] [1]);

//Challenge

let text1= "\"Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up\"";
let textlist1= text1.replaceAll("$" , " ");
console.log(textlist1);






