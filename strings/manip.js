// const a = 'a';
// console.log(a.charCodeAt(0)); 

// const charCode = 97;
// console.log(String.fromCharCode(charCode)); 
// var msyst="aflu";

function manip(str,n){
    let newStr="";
    for(let i=0;i<str.length;i++){
        let ne=str[i].charCodeAt(0);
        if(n>26){
            n=n-26;
        }
        if(str[i].charCodeAt(0)<122){
            ne=ne+n;
            newStr+=String.fromCharCode(ne);
        }else{
            let rev=(str[i].charCodeAt(0)-122)+96;
            newStr+=String.fromCharCode(rev+2)
        }
        

    }
    return newStr;
}
const ans=manip("haz",3);
console.log(ans)