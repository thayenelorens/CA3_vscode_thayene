/*The codes were written here in this JavaScript external file and invoked in the body of page 1.
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
        document.getElementById('valid').style.display = "none";
        document.getElementById('invalid').style.display = "none";
        alert("Please, enter a password");
    }
    else {
        document.getElementById('invalid').style.display = "block";
        document.getElementById('valid').style.display = "none";
        document.getElementById("pword").style.backgroundColor = "red"
    }
    
}

/**
 * I named this function 'pass_show'.
 * When hovering the 'eye' icon in the login validator, input type will be text, i.e., it will be possible to see what is being typed.
 */  
document.getElementById('eye').addEventListener('mouseover', pass_show);

function pass_show() {
    var password = document.getElementById("pword");
    if (password.type === "password") {
      password.type = "text";
    } 
  }

  /**
 * I named this function 'pass_visualization'.
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
 * -Picture thumbnail
 * -Age
 * -City
 * -State
 * -Postcode
 * -Cellphone
 * -Email
 * 
 * I used a forEach loop to display all data listed above.
 */

document.getElementById('getRandCustomers').addEventListener('click', getRandCustomers);

function getRandCustomers() {

    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            var customers = data.results;
            var output = '<h1>Customers</h1>';

            customers.forEach(function (profile) {

                output += `

        <!--Inline CSS here-->
        <div style="border: 1px dotted powderblue">
        <div style="background-color:#f2f2f2">
            <h4> ${profile.name.first} ${profile.name.last}</h4>
            <hr>
            <p> ${profile.gender} - ${profile.nat}</p>
            <hr>
            <img id=pic" src=${profile.picture.thumbnail} width="8%">
            
            <p> Age: ${profile.dob.age}</p>
            <hr>
            </div>

            <div style="background-color: #c9aaaa">
            
          <h4>Address info</h4>
          <hr>
            <p> City: ${profile.location.city}</p>
            <hr>
            <p>State: ${profile.location.state}</p>
            <hr>
            <p>Eircode: ${profile.location.postcode}</p>
        </div>

           <div style="background-color:#c5e2dc">
            <h4>Contact Details</h4>
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

var total_items = 17;

function getTotalCost() {

    var total = 0.0;
    var checkbox;
    for (let i = 1; i <= total_items; i++) {
        checkbox = document.getElementById("opt_" + i);
        if (checkbox.checked == true) {
            total = total + parseInt(checkbox.value) * parseFloat(checkbox.getAttribute("data-price"));
            //parseInt + parseFloat??
        }

    }
    document.getElementById('totalPrice').innerHTML = "€" + total;
}
document.querySelectorAll('[id^="qnt_"]').forEach(item => {
  item.addEventListener('click', getTotalCost);
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
 * First I created a variable "track" to store the element "bellanotte", which happens to be an audio file.
 * I named this function "pause".
 * It gets my audio track and pauses it after clicking the button present in my HTML.
 */
        function pause() {
            track.pause();
        }

