//  import { create } from "json-server";

// Add your code here
// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
//     .then(resp => resp.json())
//     .then(data => console.log(data));


const submitData = (userName, userEmail) => {
    let formData = {
        name: userName,
        email: userEmail
    };

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(resp => resp.json())
        .then(obj => {
            // const newId = document.createElement("li")
            // newId.innerText = obj.id
            document.body.append(obj.id)
        })
        .catch(error => {
            document.body.append(error.message);
        });
};
