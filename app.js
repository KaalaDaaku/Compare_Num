// write a javascript function that returns array elements larger than a number

let arr=[9,8,2,3,4,5,11,2,4,22];

let n= 1;

function compare(){

    for (let i=0;i<=arr.length;i++){
        if(n<arr[i]){
            console.log(arr[i]);
        }
    }
}
compare();