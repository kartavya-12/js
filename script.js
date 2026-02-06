let name = "kartavya";
let age = 18;


let obj = {
    name : "x",
    phone:97777,
    address:"xyz"
}

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




const p = new Promise(function(resolve,reject){
    setTimeout(() => {
        let done =true;
        if(done){
            resolve({name:"alex",age:34})
        }else{
            reject("network issue")
        }
    }, 5000)
});

//console.log(p)

p.then ((data) =>{
    console.log("resolved",data)
}).catch((err)=>{
    console.log("rejected",err)
}).finally(()=>{
    console.log("finally block")
})

