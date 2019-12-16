const user1 = {
    firstName: 'Vasya',
    lastName: 'Ivanov'}


user1.fullName = `${user1.firstName} ${user1.lastName}`

const user2 = {
    firstName: 'Petya',
    lastName: 'Ivanov'}
user2.fullName = `${user2.firstName} ${user2.lastName}`

const users = [user1, user2];
console.log(users);

for (i=0;i<users.length; i++) {
    console.log(users[i].firstName)
}

function getUserFullName(x) {
    let UserFullName = {};
    for (i=0;i<users.length; i++) {
        UserFullName[`user${i+1}`] = `${users[i].fullName}`
    }
    return UserFullName;
}

let usersContent = getUserFullName(users);
console.log(usersContent)
const myElement = document.getElementById('full');

for (i=0;i<users.length; i++) {
    const newElement = document.createElement("div");
    newElement.innerHTML = `user${i+1}: ${usersContent[`user${i+1}`]}`;
    myElement.appendChild(newElement);
}







