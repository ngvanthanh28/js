// let a=10;
// let b=3;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// for (let i=1 ; i<=10; i++){
//     console.log("6 *", i,  " = ", 6*i);
// }
// let j=1;
// let s=0;
// while(j<=100){
//     s=s+j;
//     j++;
// }
// console.log("tong s =",s);
// let p="a";
// do{
//     console.log("nhap vao so ");
// }while(p!=123456);

// const hello = () => {
//     console.log("xin chao hoc vien !");
// }
// hello();
// hello();
  
// const nhandoi = (x) => x*2;
// console.log(nhandoi(2));

// const kiemtrachanle = (n) =>{
//     if(n%2==0){
//         console.log("so chan");
//     }else{
//         console.log("so le");
//     }
// }
// console.log(kiemtrachanle(7))

function checkNumber(x){
    return new Promise((resolve, reject) => {
       if (x%2==0) {
        resolve();
       }
       else{
        reject();
       }
    });
}

checkNumber(4)
    .then(function name() {
        console.log("số num là số chẵn !");
        
    })
    .catch(function name() {
        console.log("số num là số lẻ !");
        
    });