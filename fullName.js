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