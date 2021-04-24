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
            let author = data.results;
            let output = '<h2>Users</h2>';
            console.log(data);

            author.forEach(function(user) {//change data to author

                output += `
        <div>
            <h3> ${user.name.first} ${user.name.last}</h3>

            <p> ${user.gender}</p>
            <br>
           
            <img id=pic" src=${user.picture.thumbnail}>
            <p>${user.nat}</p>
           
            </div>
            `;
            });
            document.getElementById('output').innerHTML = output;
        })

}