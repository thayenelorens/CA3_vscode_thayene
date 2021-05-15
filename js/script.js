/*The plain js codes were written here in this JavaScript external file and invoked in the body of page 1.
This is an efficient way of programming JavaScript once the code doesn't get mixed with the HTML elements.*/

//LOGIN USER FUNCTIONS

/**
 * I named this function "login".
 * It swaps 'myImage'id - set as user_logo.jpg picture, saved in my img folder - to Brad.jpg, another picture 
 * also saved in my img folder.
 */
function login() {
    document.getElementById('myImage').src = 'img/Brad.jpg';
}

/**
 * I named this function "login2".
 * It swaps 'myImage'id - set as user_logo.jpg picture, saved in my img folder - to Claire.jpg, another picture 
 * also saved in my img folder.
 */
function login2() {
    document.getElementById('myImage').src = 'img/Claire.jpg';
}


//LOGIN CRITERIA - MESSAGE BOX

//First I declared a variable to store the 'pword' element - related to the input field for the password.
var myPassword = document.getElementById("pword");

/**
 * This is an anonymous function, i.e., it has no name.
 * When the user clicks on the password input field, a reminder of the password criteria is displayed.
 * I also set this function to change the background color of the input field to 'powderblue' when clicking on the input field.
 */

myPassword.onfocus = function () {
    document.getElementById("pass_criteria").style.display = "block";
    document.getElementById("pword").style.backgroundColor = "powderblue";
}

/**
 * This is an anonymous function, i.e., it has no name.
 * When the user starts typing the password, the background color of the input field changes to 'pink'.
 */

myPassword.onkeydown = function () {
    document.getElementById("pword").style.backgroundColor = "pink";
}

/**
 * This is an anonymous function, i.e., it has no name.
 * When the user clicks outside the password input field, the reminder of the password criteria is displayed no more.
 */

myPassword.onblur = function () {
    document.getElementById("pass_criteria").style.display = "none";
}

//LOGIN VALIDATION

/**
 * I named this function "staff_Validation".
 * It tests if the password matches the regex and then it does the following:
 * -If the password meets criteria, it displays a 'valid' message while it doesn't output the 'invalid' message.
 * -If correct, it also changes the input field background to yellow.
 * -If the passord does not meet criteria, it displays an invalid message instead, while it does not display a valid message.
 * -If incorrect, it also changes the input field background to red.
 * -If the user clicks on the login button, but types no password, an alert message is displayed.
 * 
 */
 document.getElementById('large-button').addEventListener('click', staff_Validation);

function staff_Validation() {

    var password = document.getElementById('pword').value;
    var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9\n\r]).{8,}$/;

    if (regex.test(password)) {
        document.getElementById('valid').style.display = "block";
        document.getElementById('invalid').style.display = "none";
        document.getElementById("pword").style.backgroundColor = "yellow"

    }
    else if(password == ""){

        alert("Please, enter a password!");
    }
    else {
        document.getElementById('invalid').style.display = "block";
        document.getElementById('valid').style.display = "none";
        document.getElementById("pword").style.backgroundColor = "red"
    }
    
}

/**
 * I named this function 'reveal_Pass'.
 * When hovering the 'eye' icon in the login validator, input type will be text, i.e., it will be possible to see what is being typed.
 */  
document.getElementById('eye').addEventListener('mouseover', reveal_Pass);

function reveal_Pass() {
    var password = document.getElementById("pword");
    if (password.type === "password") {
      password.type = "text";
    } 
  }

  /**
 * I named this function 'pass_hide'.
 * When unhovering the 'eye' icon in the login validator, the content in the input field will go back to being password type, i.e., password will be secret.
 */
  document.getElementById('eye').addEventListener('mouseout', pass_hide);

function pass_hide() {
    var password = document.getElementById("pword");
    if (password.type !== "password") {
      password.type = "password";
    } 
  }

//USER GENERATION - PROFILES 

/**
 * This is an anonymous function, i.e., it has no name.
 * When the user clicks on the button to check customers, the picture in my HTML code has its visibility changed to hidden.
 * I also changes the 'output' background color from black (done with CSS) to white.
 */
var customers = document.getElementById('getRandCustomers');
 customers.onclick = function () {

    document.getElementById("client").style.visibility = "hidden";
    document.getElementById("output").style.backgroundColor = "white";
}

/**
 * I named this function "getRandCustomers". It is triggered when clicking on the namesake button.
 * I used the random user API, https://randomuser.me/ to get data for the customers.
 * It will get only 5 profiles due to the: ?results=5.
 * I set it to change the 'output' div in my HTML code and display the following information:
 * -Heading
 * -First name + lastname
 * -Gender + nationality
 * -Large picture 
 * -Age
 * -City
 * -State
 * -Postcode
 * -Cellphone
 * -Email
 * -I used inline CSS in this function.
 * 
 * I used a forEach loop to display all data listed above.
 */

document.getElementById('getRandCustomers').addEventListener('click', getRandCustomers);

function getRandCustomers() {

    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            var customers = data.results;
            var output = '<h1 style="font-size: 80px;">Customers</h1>';

            customers.forEach(function (profile) {

                output += `

        <!--Inline CSS here-->
        <div style="border: 1px dotted powderblue; font-size: 25px;">
        
            <h1> ${profile.name.first} ${profile.name.last}</h1>
            <hr>
            <p> ${profile.gender} - ${profile.nat}</p>
            <hr>
            <img src=${profile.picture.large} width="15%">
            <hr>            
            <p> Age: ${profile.dob.age}</p>
            <hr>
           
            <div style="background-color: #c9aaaa">
            
          <h1>Address info</h1>
          <hr>
            <p> City: ${profile.location.city}</p>
            <hr>
            <p>State: ${profile.location.state}</p>
            <hr>
            <p>Eircode: ${profile.location.postcode}</p>
        </div>

           <div style="background-color:#c5e2dc">
            <h1>Contact Details</h1>
            <hr>
            <p> Contact: ${profile.cell}</p>
            <hr>
            <p> Email: ${profile.email}</p>
            <br><br> 
           </div>
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        })
}

//MENU

/**
 * I named this function 'Bill_Calculator'.
 * 
 */
function Bill_Calculator(){
    
    var amount = 19; // = The total amount of items in the menu;

    //initializing these variables so I can later store the 'total' of each item > total = quantity * price.
    var starters_total = 0.0; 
    var mains_total = 0.0;
    var desserts_total = 0.0;
    var drinks_total = 0.0;
    var veggie_total = 0.0;
    var nonVeg_total = 0.0;

    //initializing this variable so I can later print the final total of the bill.
    var final_total = 0;

        //using a for loop that will run according to the amount of items present in the menu.
        for (let i = 1; i <= amount; i++) {
        
        //storing all items whose id is equals to "item_" + i, i.e., + a number. My index starts with 1, since my first item is "item_1".
        //It loops through the items, from "item_1" to "item_19".
        items = document.getElementById("item_" + i);

        /**
         * If the items match a specific class, there should be a calculation of the items.value * the attribute "data-price".
         * The "items.value" refers to the quantity input by the user.
         * The attribute "data-price" refers to the price of the item.
         * I chose to use parseInt for the amount, since it is not possible to choose half item or 1/3 of an item, for example. Only whole numbers.
         * I chose to use parseFloat for the price, since the cost of an item is normally represented by decimal numbers.
         * The variables initialized above were set to 0.0, but now will be assigned a new value, depending on the amount chosen by the user and the price of the item in question.
         * Selecting all "item_" elements by their classes was practical for the output, once I had to split the bill by categories, 
         * such as: starters, mains, desserts, drinks and vegetarian.
         * The non vegetarian cost will only be the sum of the items that belong to the "starters" and "mains" classes.
         * The final total will be the sum of all the variables I've created for the calculation, apart from the nonVeg_total,
         * because, as mentioned above, it refers to the starters and mains, so including this variable would imply
         * calculating it twice, creating a wrong output.
         */
        if(items.className == "starters"){
           starters_total = starters_total + parseInt(items.value) * parseFloat(items.getAttribute("data-price"));
        }
        else if(items.className =="mains"){
            mains_total = mains_total + parseInt(items.value) * parseFloat(items.getAttribute("data-price"));
        }
        else if(items.className =="desserts"){
            desserts_total = desserts_total + parseInt(items.value) * parseFloat(items.getAttribute("data-price"));
        }
        else if(items.className =="drinks"){
            drinks_total = drinks_total + parseInt(items.value) * parseFloat(items.getAttribute("data-price"));
        }
        else if(items.className =="veggie"){
            veggie_total = veggie_total + parseInt(items.value) * parseFloat(items.getAttribute("data-price"));
        }

        //The non vegetarian cost, before set to 0.0 is now the total of the sum of starters and mains.
        nonVeg_total = starters_total + mains_total;

        //The final total: It sums the (price * amount) - of everything the client selects (from all classes listed above).
        final_total = starters_total + mains_total + desserts_total + drinks_total + veggie_total;
        }

        /**
         * The output of each calculation of my bill will be displayed in their respective divs (selected by their ids).
         * These divs are present in the table of my HTML file.
         * Here, I chose to change the innerHTML of these div contents and display the € symbol + the result of each calculation stored in their appropriate variable.
         */
        document.getElementById('totalStarters').innerHTML = "€" + starters_total;
        document.getElementById('totalPizza').innerHTML = "€" + mains_total;
        document.getElementById('totalDessert').innerHTML = "€" + desserts_total;
        document.getElementById('totalDrinks').innerHTML = "€" + drinks_total;
        document.getElementById('totalVeggie').innerHTML = "€" + veggie_total;
        document.getElementById('totalNonVeg').innerHTML = "€" + nonVeg_total;
        document.getElementById('totalPrice').innerHTML = "€" + final_total;

    }

    /**
     * Here, I am selecting all my items whose id is "item_" and adding an event listener that will trigger this function by the "change" event.
     * As I chose to apply input type "number" for the quantity inputs in the table, I thought the 'change' event would be a
     * more suitable option as it occurs when the element loses focus, after the content has been changed.
     * Using a forEach loop to loop through all my items.
     * Using querySelectorAll to target all items whose id starts with "item_".
     */
    document.querySelectorAll('[id^="item_"]').forEach(item => {
        item.addEventListener('change', Bill_Calculator);
    });


//AUDIO FILE FUNCTION

/**
 * First I created a variable "track" to store the element "bellanotte", which happens to be an audio file.
 * I named this function "play".
 * It gets my audio track and plays it after clicking the button present in my HTML.
 */
var track = document.getElementById("bellanotte");

        function play() {
            track.play();
        }
/**
 * I named this function "pause".
 * It gets my audio track and pauses it after clicking the button present in my HTML.
 */
        function pause() {
            track.pause();
        }

