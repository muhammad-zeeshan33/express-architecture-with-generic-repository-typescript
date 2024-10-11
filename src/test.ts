// // const obj = {
// //     count: 1,
// //     increment: function(){
// //         setTimeout(()=>{
// //             this.count++;
// //             console.log(this.count)
// //         }, 1000)
// //     }
// // }

// // obj.increment();

// class Test {
//     count: any = 1;
    
//     increment = () => {
//         this.count++
//         console.log(this.count)
//     }
// }


// const test = new Test();
// test.increment();

function getAValue(){
 return new Promise<number>((resolve, reject) => {
     let a = 10;
     setTimeout(()=>{
        resolve(a);
     }, 1000)
 })

}

getAValue().then((res) => {
    console.log(res)
})
