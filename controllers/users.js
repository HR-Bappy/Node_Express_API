import { v4 as uuidv4 } from 'uuid';
let user = []


export const getUser =  (req,res) => {
    console.log(user)
    res.send(user);
}

export const createUser = (req,res) => {
    const data = req.body;
    user.push({...data, id: uuidv4() });
    res.send(`User with the name ${data.lastName} added to the DB!`);
}

export const userDetails = (req,res) => {
    const { id } = req.params;
    const foundUser = user.find((user) => user.id == id);
    if(foundUser) res.send(foundUser);
    else res.send("User not Found!!!!!!!!!!!!!")
}

export const deleteUser =  (req,res) => {
    const { id } = req.params;
    user = user.filter((users) => users.id != id)
    res.send(`User with the id ${id} deleted from DB`);
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;

    const users = user.find((user) => user.id == id);

    if(firstName) users.firstName = firstName;
    if(lastName) users.lastName = lastName;
    if(age) users.age = age;

    res.send(`User with he id ${id} has been updated`);
}