
// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  //GRADING CRITERIA
  //Split the string into and array of words (strings)
  //Use map function and pass the array and a function that takes element and index
  //Return the element length
  //Returns the right value
  
  function wordLengths(str) {
      // TODO: your code here 
      var array = str.split(" ")
      return map(array, function(elem, i){
          console.log(elem)
          return elem.length;
      }) 
  }
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  //GRADING CRITERIA
  //Use reduce function and pass the string
  //Pass a function that takes acc, element and index in the reduce function
  //Check if the element is equal to the character parameter and increase acc
  //Pass 0 as the starting value of acc
  //Return the right result
  
  function countOccurrences(string, character) {
      // your code is here
    return reduce(string, function(acc, elem , i) {
      if( elem === character ) {
        return acc + 1; 
      }
      return acc;
    },0)
  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  //GRADING CRITERIA
  //Split the string into an array of words
  //Use filter function and pass the array inside it
  //Pass a function that takes an element and index
  //Return elements with length greater than 3
  //Returns the right value
  
  function wordsLongerThanThree(str) {
      // TODO: your code here 
    return filter(str.split(' '), function(elem , i) {
      return elem.length > 3;
    })
  }
  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  //GRADING CRITERIA
  //Have exit condition when count equals zero
  //Have change of parameter by decreasing count when calling the function again
  //Modify the string with the return value of the recursion of the function
  //Return the right value
  
  function repeatString(str, count) { 
   // TODO: your code here 
    if(count === 0) { 
      return ''; 
    } 
    return str+repeatString(str,count-1); 
  } 
   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  //GRADING CRITERIA
  //Create an empty object and add the properties, crust, size, numberOfSlice
  //Add the addIngredients, displayIngrediants, bakePizza & eatSlide to the object
  //At least one property must be outside the object, ingredients for instance (so it can be called a closure)
  //Add ingredients pushes the string to the array of ingredients
  //Display ingredients returns a string of the ingredients
  //Bake pizza returns a string after some time out
  //Eat slices returns that there is no more pizza if the number is 0
  
  // Write your code here .....
  function makePizza(crust, size, numberOfSlice) {
    let ingredaints = [];
    let obj = {};
    obj.crust = crust;
    obj.size = size;
    obj.numberOfSlice = numberOfSlice;
    obj.addIngredients = function(ingredient) {
      ingredaints.push(ingredient);
    };
    obj.displayIngredaints = function() {
      let result = "The ingredaints are:";
      for (let i = 0; i < ingredaints.length; i++) {
        if (i === ingredaints.length - 1) {
          result = result + ingredaints[i];
        } else {
          result = result + ingredaints[i] + ",";
        }
      }
      return result;
    };
    obj.bakePizza = function() {
      console.log(obj.crust);
      setTimeout(() => {
        console.log(
          "Your " +
            obj.crust +
            " " +
            obj.size +
            " " +
            obj.numberOfSlice +
            "slice pizza is done"
        );
      }, 2000);
    };
    obj.eatSlice = function() {
      if (obj.numberOfSlice > 0) {
        obj.numberOfSlice--;
        return true;
      } else {
        return "No more pizza :(";
      }
    };
    return obj;
  }
  
  
  
  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  //GRADING CRITERIA
  //Create an empty object and the properties (read, unread, toRead, currentRead, readBooks)
  //Create addBook and FinishCurrnetBook functions outside the class ReadingList
  //Reference the two functions in the object (instance.addBook = addBook)
  //Use the word (this) in both functions
  //addBook function change the currentRead to the book parameter if it's empty
  //addBook function pushes the book the toReadArray and increase the unread counter
  //finishCurrentBook function pushes the currentRead to the readBooks Array
  //finishCurrentBook function increases read, decreases unread and remove the currentBook from the currentRead Array
  
  // Write your code here .....
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  function ReadingList() {
    var instance = {};
    instance.read = 0;
    instance.unread = 0;
    instance.toRead = [];
    instance.currentRead = undefined;
    instance.readBooks = [];
    instance.addBook = addBook;
    instance.finishCurrentBook = finishCurrentBook;
    return instance;
  }     
  
  var addBook = function(book) {
    if(this.currentRead === undefined){
      this.currentRead = book;
    } else {
    this.toRead.push(book);
    this.unread += 1
    } 
  }
  
  var finishCurrentBook = function() {
    this.readBooks.push(this.currentRead);
    console.log(this.readBooks)
    this.read +=1;
    this.currentRead = (this.toRead.shift());
    this.unread -= 1;
  }
  
  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  //GRADING CRITERIA
  //Put the properties outside the inner function so that it's a closure
  //Increase the size based on the string (small,medium,big)
  //Returns "Can't fit" if the size + itemSize is larger than the limit
  //Add the string of the item to the storage string if the item fits
  //Returns a string with all the item names if when the safe is full
  
  // Write your code here .....
  function makeSafe(init) {
    var storage = '';
    var limit = init
    var size = 0
   
    function addItem(item, itemSize) {
      if (itemSize === 'big') {
        itemSize = 3
      }
      if (itemSize === 'meduim') {
        itemSize = 2
      }
      if (itemSize === 'small') {
        itemSize = 1
      }
   
      if (size + itemSize > limit){
        return "Can't fit"
      }
   
      if (size + itemSize === limit) {
        return storage +=  item
      }
      else {
        storage += item + ' '
        size += itemSize
      }
    }
    return addItem
   }
  
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //GRADING CRITERIA
  //HTML, CSS & JS are in separate files and connected correctly
  //Added the two text fields, button and empty unordered list
  //Create three classes in the CSS file with the correct colors
  //Create a javascript function that gets called by the button
  //The function retrieves the html elements needed (input, color, ul)
  //The function creates a list item
  //The function adds the class if the color value is correct
  //The function appends the unordered list with the list item
  //The function doesn't do anything if the color value is not red blue or yellow
  
  /*HTML
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
      <input type="text" id="input" placeholder="input">
      <input type="text" id="color" placeholder="color">
      <button onclick="myFunction()">Click Me</button>
      <ul id="list">
      </ul>
    </body>
    <script src="main.js"></script>
  </html>
  */
  
  /*
  .blue {
    color: blue;
  }
  
  .red {
    color: red;
  }
  
  .yellow {
    color: yellow;
  }
  */
  
  /*
  function myFunction() {
    var list = document.getElementById("list")
    var inputValue = document.getElementById("input").value
    var colorValue = document.getElementById("color").value
  
    if (colorValue === "blue" || colorValue === "red" || colorValue === "yellow") {
      var item = document.createElement("LI");
      item.innerHTML = inputValue
      if (colorValue === "blue") {
        item.classList.add("blue")
      } else if (colorValue === "red") {
        item.classList.add("red")
      } else if (colorValue === "yellow") {
        item.classList.add("yellow")
      }
      list.appendChild(item)
    }
  }
  */
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + orange)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  
  //GRADING CRITERIA
  //HTML, CSS, JS files are separated and connected
  //jQuery is connected properly
  //The html has 3 checkboxes, two buttons, empty unordered list
  //Ids are added to the checkboxes and the two buttons
  //CSS file has 7 classes for each color
  //The create function gets the values of the checkboxes
  //The create function has 7 if & if else statements, the first one should be all true
  //The create function adds an element to the unordered list based on the checkboxes
  //The list item text is based on the checkboxes
  //The color class is added to the list item before it's appended
  //The remove function get elements by the class based on the checkboxes
  //The remove function removes the correct elements from the unordered list
  
  /*
  $("#create").click(function(){
    var blueChecked = $("#blue").prop('checked')
    var redChecked = $("#red").prop('checked')
    var yellowChecked = $("#yellow").prop('checked')
  
    if (blueChecked && redChecked && yellowChecked) {
      var li = $("<li>black</li>")
      li.addClass("black")
      $("ul").append(li)
    } else if (blueChecked && redChecked) {
      var li = $("<li>purple</li>")
      li.addClass("purple")
      $("ul").append(li)
    } else if (redChecked && yellowChecked) {
      var li = $("<li>orange</li>")
      li.addClass("orange")
      $("ul").append(li)
    } else if (yellowChecked && blueChecked) {
      var li = $("<li>green</li>")
      li.addClass("green")
      $("ul").append(li)
    } else if (redChecked) {
      var li = $("<li>red</li>")
      li.addClass("red")
      $("ul").append(li)
    } else if (yellowChecked) {
      var li = $("<li>yellow</li>")
      li.addClass("yellow")
      $("ul").append(li)
    } else if (blueChecked) {
      var li = $("<li>blue</li>")
      li.addClass("blue")
      $("ul").append(li)
    }
  })
  
  $("#remove").click(function(){
    var blueChecked = $("#blue").prop('checked')
    var redChecked = $("#red").prop('checked')
    var yellowChecked = $("#yellow").prop('checked')
  
    if (blueChecked && redChecked && yellowChecked) {
      $(".black").remove()
    } else if (blueChecked && redChecked) {
      $(".purple").remove()
    } else if (redChecked && yellowChecked) {
      $(".orange").remove()
    } else if (yellowChecked && blueChecked) {
      $(".green").remove()
    } else if (redChecked) {
      $(".red").remove()
    } else if (yellowChecked) {
      $(".yellow").remove()
    } else if (blueChecked) {
      $(".blue").remove()
    }
  })
  */
  
  /*
  <html>
    <head>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
      <ul id="list">
      </ul>
      <input type="checkbox" id="blue">Blue</input>
      <input type="checkbox" id="red">Red</input>
      <input type="checkbox" id="yellow">Yellow</input>
      <button type="button" id="create">Create</button>
      <button type="button" id="remove">Remove</button>
    </body>
    <script src="main.js"></script>
  </html>
  */
  
  /*
  .black {
    color: black;
  }
  
  .purple {
    color: purple;
  }
  
  .orange {
    color: orange;
  }
  
  .green {
    color: green;
  }
  
  .red {
    color: red;
  }
  
  .blue {
    color: blue;
  }
  
  .yellow {
    color: yellow;
  }
  */
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  //Answer:
  //closures are commonly used to give objects data privacy.
  //In JavaScript, closures are the primary mechanism used to enable data privacy.
  // When you use closures for data privacy, the enclosed variables are only in scope within the containing (outer) function.
  
  // 2- In OOP, what does "this" refer to ?
  //Answer:
  //The JavaScript this keyword refers to the object it belongs to. 
  //It has different values depending on where it is used: 
  // In a function, this refers to the global object. 
  
  // 3- What is jQuery?
  //Answer:
  //jQuery is a fast, small, and feature-rich JavaScript library. 
  //It makes things like HTML document traversal and manipulation, 
  //event handling, animation, and Ajax much simpler 
  //with an easy-to-use API that works across a multitude of browsers.
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?
  //Answer:
  //In OOP's methods functions would only be created once, instead of these functions being created 100,000 times if using the Closure Methods.
  // Resources are not infinite.
  
  
  
  
  
 