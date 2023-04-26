// var a={
//     name:"sachin"
// }

// var b={
//     name:"sachinq"
// }
 //str=1
 
// x=2
// console.log('x:',x);
// let x

// function sun(){
//     var x={a:3}
   
//     var y=JSON.parse( JSON.stringify(x)) 
//     y.a=2 
// console.log('da:',x,y);

// }
// sun()
// inhertance.call()

const a=[1,2,3]
for(var i=0;i<3;++i){
    console.log('val:',a[i],i)
setTimeout(()=>{console.log('val:',a[i],i)},1000)
}