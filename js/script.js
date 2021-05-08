function login(){
    document.getElementById('myImage').src='img/Brad.jpg';
}

function login2(){
    document.getElementById('myImage').src='img/Claire.jpg';
}

document.getElementById('getRandUsers').addEventListener('mouseover', getRandUsers);
document.getElementById('getRandUsers').addEventListener('mouseout', getRandUsers);

function getRandUsers() {

    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let customers = data.results;
            let output = '<h1>Customers</h1>';
            console.log(data);

            customers.forEach(function(user) {

                output += `
        <div style="border: 1px dotted powderblue">
        <br>
            <h4> ${user.name.first} ${user.name.last}</h4>
            <p> ${user.gender} - ${user.nat}</p>
            <img id=pic" src=${user.picture.thumbnail} width="8%">
            
            <p> Age: ${user.dob.age}</p>
            <hr>
            
          <h6>Address info</h6>
           
            <p>${user.location.city}</p>
            <p>${user.location.state}</p>
            <p>${user.location.postcode}</p>

            <hr>
            <h6>Contact Details</h6>
            <p> Contact: ${user.cell}</p>
            <p> Email: ${user.email}</p>
            <br><br> 
           
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        }) 

}

var total_items = 16;

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
//document.querySelectorAll('[id^="qnt_"]').forEach(item => {
//  item.addEventListener('keyup', getCost);
//});

/*
document.getElementById('totalPrice').onclick = function() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var overall = document.querySelector('input[type="number"]');
            
        function getTotalCost() {
            var total = 0.0;
            var checkbox;
            var amount;
          checkbox = document.getElementById("opt_" + i);
          amount = document.getElementById("qnt_" + i);
          total = checkbox.value * amount.value;
        }
    }*/


//IF INPUTE TYPE IS TEXT - done in class


    var total_items = 16;

    function CalculateItemsValue() {
        var total = 0;
        for (let i = 1; i <= total_items; i++) {
            itemID = document.getElementById("qnt_" + i);
            total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));

        }
        document.getElementById('ItemsTotal').innerHTML = "$" + total;
    }
    document.querySelectorAll('[id^="qnt_"]').forEach(item => {
        item.addEventListener('keyup', CalculateItemsValue);
    });

    var myInput1 = document.getElementById("username");
var myInput = document.getElementById("pword");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput1.onfocus = function() {
  document.getElementById("message1").style.display = "block";
}
myInput1.onblur = function() {
  document.getElementById("message1").style.display = "none";
}

// When the user clicks on the credit card input field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the credit card input field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
        function validate(){
    
   var password = document.getElementById('pword').value;
   var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9\n\r]).{8,}$/;

   if(regex.test(password)){
       document.getElementById('valid').style.visibility = "visible";
       document.getElementById('invalid').style.visibility = "hidden";
       alert('valid');
   }
   else {
    document.getElementById('invalid').style.visibility = "visible";
    document.getElementById('valid').style.visibility = "hidden";
    alert('invalid');
   }
}


