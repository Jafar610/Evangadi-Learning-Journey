// console.log("Start");

// function delay(sec){
//     const start = Date.now();
//     // console.log(start);
//     let x = true;
//     while(x){
//         const current = Date.now();
//         if(current - start >= sec * 1000){
//             console.log("hi")
//             x = false;
//         }
//     }
// }

// delay(5);
// console.log("doing something");


//* Async
// console.log("task1");

// setTimeout(()=>{
//     console.log("task2")
// }, 2000);

// console.log("task3")


//* Callback

// function orderPizza(callback){
//     console.log("Order pizza.");

//     setTimeout(()=>{
//         const pizza = "Meduim pizza"
//         console.log(`Your ${pizza}  is ready.`)
//         callback(pizza);
//     }, 2000)
// }

// function pizzaRead(pizza){
//     console.log(`Eat your ${pizza}`)
// }

// orderPizza(pizzaRead);
// console.log("call a friend.")


//* Promise

// todo: fetch() API
fetch("https://api.randomuser.me")
.then((res)=> res.json())
.then((data)=>console.log(data.results[0]))
.catch((err)=>console.log("Something error happend.", err));



let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(10);
    }, 1000)
})

promise1.then(function(result){
    return result * 3;
})
.then(function(result){
    console.log(result/2);
})





//* Q1

// function job() {
//   return new Promise(function (resolve, reject) {
//    reject()
  
//   });
// }





// let promise = job();



// promise
//   .then(function () {
//     console.log("Success 1");
//   })
//   .then(function () {
//     console.log("Success 2");
//   })
//   .then(function () {
//     console.log("Success 3");
//   })
//   .catch(function () {
//     console.log("Error 1");
//   })
//   .then(function () {
//     console.log("Success 4");
//   });


//   retun value
//   return  new Promise(function (resolve, reject) {
//     resolve(underfined);
//   });

//* Q2
// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise= job(true);      

// promise
//   .then(function (data) {
//     console.log(data);   //112  success
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error); //116  error
//     return "Error caught";
//     // return new Promise(function(resolve,reject){
//     //     resolve("Ërror caught")
//     // })
//   })
//   .then(function (data) {
//     console.log(data); //123Error caught
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });



// * Q3
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true);

promise
  .then(function (data) {
    console.log(data); //success
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
//   return new Promise(function (resolve, reject) {
//    reject("Defeat")
  
//   });
      
    }
    return job(true);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); //Defeat
    return job(false);
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error); //error
    return "Error caught";
  })
  .then(function (data) {
    console.log(data); //Error caught
    return new Error("test");
  })
  .then(function (data) {
    console.log("Success:", data.message); //Sucess: test
  })
  .catch(function (data) {
    console.log("Error:", data.message);
  });
