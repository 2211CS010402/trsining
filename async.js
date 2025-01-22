// console.log(10);
// console.log(20);
// // setTimeout(()=> {
// //     console.log(50)
// }, 5000)
// console.log(50);
// // setInterval(()=>{
// //     document.writeln("Prudhvi")
// // }, 5000)

// const { response } = require("express");


//! promise

// let p1 = new Promise((resolve, reject)=>{});
    
//     console.log(p1);


// let p2 = new Promise((resolve, reject)=>{
//     resolve("successful")
// });
// // console.log(p2);
// p2.then((response)=>{
//     console.log(response);
// }).catch((error)=>
// {
//     console.log(error);

// }).finally(()=>console.log("Finally executing both."))


// let p3 = new Promise((resolve, reject)=>{
//     reject("failure")
// });
// // console.log(p3);
// p3.then((response)=>{
//     console.log(response);
// }).catch((error)=>
// {
//     console.log(error);

// }).finally(()=>console.log("Finally executing both."))



function fetchUsers()
{
    let x = fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(x);

    x.then((response)=>{
        return response.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            data.map((user)=>{
                store.innerHTML +=`
                <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.company.name}</td>

                </tr>
                `
                
            })
        })
    })
    .catch(err=>console.log(err))

}
fetchUsers();



