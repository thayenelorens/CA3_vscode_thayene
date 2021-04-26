function login(){
    document.getElementById('myImage').src='img/Brad.jpg';
}

function login2(){
    document.getElementById('myImage').src='img/Claire.jpg';
}

document.getElementById('getRandUsers').addEventListener('click', getRandUsers);

function getRandUsers() {

    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let customers = data.results;
            let output = '<h3>Customers</h3>';
            console.log(data);

            customers.forEach(function(user) {

                output += `
        <div>
        <br>
            <h4> ${user.name.first} ${user.name.last}</h4>
            <p> ${user.gender} -  ${user.nat}</p>
            <img id=pic" src=${user.picture.thumbnail}>
            <br>
            <p> Age: ${user.dob.age}</p>
            
          <h6>Address info</h6>
           
            <p>${user.location.city}</p>
            <p>${user.location.state}</p>
            <p>${user.location.postcode}</p>

            <hr>
            <h6>Contact Details</h6>
            <p> Contact: ${user.cell}</p>
            <p> Email: ${user.email}</p>
            <hr>   
           
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        }) //Embelish my title elements later on. Tables within tables. Divs within divs

}