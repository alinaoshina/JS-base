const firstName = 'Петя';
const lastName = 'Иванов';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const user = {
    firstName: 'Vasya',
    lastName: 'Ivanov'
}

user.fullName = `${user.firstName} ${user.lastName}`
const userOutput = user.fullName;
console.log(userOutput);