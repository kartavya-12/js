// let name = "kartavya";
// let age = 18;


// let obj = {
//     name : "x",
//     phone:97777,
//     address:"xyz"
// }

// console.log(obj)

// console.log(document)

// const para=document.querySelector('p')
// para.textcontent= "this is now updated"


// const para=document.getElementById('para')
// para.textcontent="this is now updated"
// para.style.color="green"
// console.log(para)
// const para=document.getElementById('para')


// const para=document.getElementsByClassName('para')
// para[0].textContent="this is now updated"
// para[1].style.color="green"
// console.log(para)

// const para=document.querySelector('.para')
// para.textcontent="this is now updated"
// para.style.color="green"
// console.log(para)

// debugger
// console.log(a)

// var a= 78
// let b=934

// console.log(a)
// console.log(b)

// function print(){
//     let  c=45
//     console.log(c)
//     console.log("inside func")
// }

// print()


// let total = 100;

// function calculate(){
//     console.log(total)
//     var total= 100
// }
// calculate()



// ------------------------------xxxxxxxxxxxxx-----------------------------------------------------

// setTimeout(() => {
//     console.log("2 sec over")
// }, 2000);
// console.log("i didn't wait")



// function print(){    //callback fn
//     console.log("hello students")

// }

// function greet(num){
//     console.log("welcome")
//     num()
// }

// greet(print)


// function print(name){    //callback fn
//     console.log("hello students" , name)

// }

// function greet(num){
//     console.log("welcome")
//     setTimeout(() => {
//         console.log("inside first timeout")
//         let firstname = "alex"
//         num(firstname)
//     },2000);

// }

// greet(print)






// console.log("starting homework");
// setTimeout(() => {
//     console.log("homework done");
//     console.log("starting dinner");

//     setTimeout(() => {
//         console.log("dnner done");
//         console.log("getting ready to go out ");

//         setTimeout(() => {
//             console.log("going to the playground");

//         }, 1000);   // after dinner done
//     }, 1500);      // dinner time
// }, 2000);         // homework time








// function finishhomework(callback){
//     console.log("starting homework ");
//     setTimeout(() => {
//         console.log("homework done");
//         callback();
//     }, 2000);
// }

// function eatdinner(callback){
//     console.log("starting dinner");
//     setTimeout(() => {
//         console.log("dinner done");
//         callback();
//     }, 1500);
// }


// function gotoplayground(){
//     console.log("going to playground");

// }

// finishhomework(() =>{
//     eatdinner(()=> {
//         gotoplayground();
//     }
//     );
// }
// );




// const input=document.querySelector('#task')
// const btn=document.querySelector(".btn")
// const lists=document.querySelector(".list")

// btn.addEventListener('click', (e) =>{
//     e.preventDefault()
//     const li=document.createElement('li')
//     li.innerText=input.value
//     lists.appendChild(li)
//     input.value=""
// })


// btn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     if(input.value===""){
//         alert('enter task')
//         return
//     }
//     const li=document.createElement('li')
//     const deleteButton=document.createElement('button')

//     deleteButton.innerText="delete"
//     li.innerText=input.value

//     li.appendChild(deleteButton)
//     lists.appendChild(li)

//     deleteButton.addEventListener('click', () =>{
//         lists.removeChild(li)
//     })
//     input.value=""
// })




// const p = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         let done =true;
//         if(done){
//             resolve({name:"alex",age:34})
//         }else{
//             reject("network issue")
//         }
//     }, 5000)
// });

// //console.log(p)

// p.then ((data) =>{
//     console.log("resolved",data)
// }).catch((err)=>{
//     console.log("rejected",err)
// }).finally(()=>{
//     console.log("finally block")
// })

// console.log("first line")
// setTimeout(() => {
//     console.log("inside timeout")
// }, 0);
// const p= new Promise((resolve,reject)=>{
//     resolve()
// })

// p.then (()=>{
//     console.log("inside promise")
// }).catch(()=>{
//     console.log("inside catch")
// })

// const p2 = new Promise((resolve, reject )=>{
//     resolve()
// })
// p2.then (()=>{
//     console.log("inside promise")
// }).catch(()=>{
//     console.log("inside catch")
// })

// const p3 = new Promise((resolve, reject )=>{
// //     resolve()
// // })
// // p3.then (()=>{
// //     console.log("inside promise")
// // }).catch(()=>{
// //     console.log("inside catch")
// // })

// // console.log("last line")



// async function sendData() {
//     try{
//         const response= await fetch ('https://dummyjson.com/products/add',{
//             method:'post',
//             headers: {'content-Type'; 'application/json' },
//             body: JSON.stringify({
//                 title: "macbook"
//                 description:"macbook pro",
//                 price:100000,
//                 discountPercentage: 5,
//                 rating:4.5,
//                 stock:5,
//                 brand:"apple"
//
//             })
//
//         })
//         const data =await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("data not found")

//     }
// }
// sendData()

let obj={
    title:"mac",
    description:"mac pro",
}
// localStorage.setItem("obj",JSON.stringify(obj))
// localStorage.setItem("name","kartavya")
// localStorage.setItem("age",19)
// console.log(localStorage.getItem("name"))
// console.log(localStorage.getItem("age"))
// console.log(JSON.parse(localStorage.getItem("obj")))

// localStorage.removeItem("age")



// sessionStorage.setItem("obj",JSON.stringify(obj))
// sessionStorage.setItem("name","kartavya")
// sessionStorage.setItem("age", 19)
// console.log(sessionStorage.getItem("name"))
// console.log(sessionStorage.getItem("age"))
// console.log(JSON.parse(sessionStorage.getItem("obj")))

// document.cookie="name= kartavya; expires = 21 feb 2026 12:00:00 UTC"
// document.cookie="age=19; expires = 21 feb 2026 12:00:00 UTC"

// console.log(document.cookie)

// async function sample() {
//     await fetch()
// }
// sample()

function generator(){
    yield 1
    yield 2
    yield 3
     
    for (let index =1; index<4; index++){
        yield index
    }

    let i=1;
    while(true){
        yield i
        i
    }
}

const gen = generator()

console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())




function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}


console.log((1)(2)(3))

const first= add(1)
const second=first(2)
const third=second(3)
console.log(third)

