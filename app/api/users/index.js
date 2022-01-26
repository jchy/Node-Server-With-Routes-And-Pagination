const users = [
    { 
        "name":"John", 
        "id":1
    },
    {
        "name":"Albert", 
        "id":2
    },
    {
        "name":"Merry", 
        "id":3
    },
    { 
        "name":"Ross",
        "id":4
    },
    { 
        "name":"Razor",
        "id":5
    },
    { 
        "name":"Sezal",
        "id":6
    },
    { 
        "name":"Ryan",
        "id":7
    },
    { 
        "name":"Jenny",
        "id":8
    },
    { 
        "name":"Jeeva",
        "id":9
    },
    { 
        "name":"Abhishek",
        "id":10
    }
];

function getAllUsers(page=1){
    const start = (page-1)*3;
    const end = start + 3;
    return users.slice(start,end);
    // return users;
}

function getUser(index){
    if(index >= 0 && index < users.length){
        return users[index];
    }
    else 
        return null;
}

function getUserDetails(id=1){
    for(let elem in users){
        if(users[elem].id === id){
            return users[elem];
        }
    }
}



function addUser(name){
    users.push(name);
    return users;
}

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    getUserDetails
}