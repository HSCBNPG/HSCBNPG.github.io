var z=10;                           
function foo(){
    console.log(z);
}
(function(funArg){
    var z=20;
    funArg();
})(foo);
//10
// ----------------
var uname = 'jack'
function change() {
    alert(uname) // ?undefined
    var uname = 'lily'
    alert(uname)  //?lily
}
change()
// -----------------
var foo = "11"+2-"1";  
console.log(foo); //111
console.log(typeof foo);//number
// -----------------
// 用js实现随机选取10-100之间的10个数字,存入一个数组,并排序
function getRandom(m,n){
    return Math.ceil(Math.random()*(m-n))+10
}
var nums=[];
for(var i=0;i<10;i++){
    nums.push(getRandom(10,100))
}
nums.sort((a,b)=>{return a-b})
// ----------------------
// 冒泡排序
var score=[51,25,66,85,25,36];
var num=0;
for(var i=0;i<score.length;i++){
    for(var j=0;j<score.length-i;j++){
        if(score[j]>score[j+1]){
            num=score[j+1];
            score[j+1]=score[j];
            score[j]=num
        }
    }
}
// --------------
// 实现一个简单的http服务器
const express=require('express')
let app=express(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('hello world');
    res.end()
});
app.listen(5050)
const http=require('http')
let app=http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('hello world')
    res.end()
})
app.listen(3000)
// ------------
var age=100;
    function test(){
      this.age=50;
      return function(){
        return this.age;
      }
    }
    var m=new test();
    alert(m()); //100
    var n=test();
    alert(n()); //50
// ------------------
var name="The Window";
var obj={
  name:"My obj",
  getName:function(){
    return function(){
      return this.name;
    }
  }
};
console.log(obj.getName()());//the window
// ----------------
var length=10;
function fn(){
  console.log(this.length);
}
var obj={
  length:5,
  method:function(fn){
    fn();//10
    arguments[0]();//2 console.log(arguments.length)
  } 
};
obj.method(fn,1)
// ------------
var str='helloworld'
var obj={}
for(var char of str){
    if(obj[char]===undefined){
        obj[char]=1
    }else{
        obj[char]+=1
    }
}

var char,count=1;
for(var el in obj){
    if(obj[el]>count){
        char=el;
        count=obj[el]
    }
    
}
console.log(obj)
console.log(char,count)
// -----------
for(var i=0;i<5;i++){
    setTimeout(function(){
      console.log(i);
    },0)
  }
  console.log(i);//5 5 5 5 5
// -----------------
window.color="red";
let color="green";
let obj={
  color:"blue"
};
let sayColor=()=>{
  return this.color;
}
console.log(sayColor.apply(obj));//blue 错误 输出值为red
let a=10;
console.log(window.a);//undefined
// --------------
var c=1;
function c(c){
  console.log(c);
  var c=3;
} //函数声明提前到var c=1之前
c(2);//TypeError
// -------------
function change(){
    alert(typeof fn)
    function fn(){ alert('hello') }
    var fn;
  }
  change()//function 
// ------------
a=3
a.prop=4;
alert(a+a.prop)//NaN
// ------------
var o={
  a:10,
  b:{
    a:12,
    fn:function(){
      var a=13;
      console.log(this.a);
    }
  }
}
o.b.fn();//12
// ----------------
var obj1 = {
  name: 'obj1', 
  fn: function() {
      document.write(this.name);
  }
  };
  var obj2 = {name: 'obj2'};
  var obj3 = {name: 'obj3'};
  obj1.fn();//obj1
  var newFn = obj1.fn;
  newFn();//undefined
  newFn.call(obj2);//obj2
  obj3.fn = newFn;
  obj3.fn();//obj3
// --------------
function getSort(arr,prop){
  arr.sort((a,b)=>{return a[prop]-b[prop]})
}  
getSort(arr,'age')
// ------------------
// . 有字符串 var = 'abc345efgabcab'，请写出 3 条 JS 语句分别实现如下 3 个功能：
// 1）去掉字符串中的a、b、c 字符，形成结果：'345efg'
// 2）将字符串中的数字用中括号括起来，形成结果：'abc[345]efgabcab'
// 3）将字符串中的每个数字的值分别乘以 2，形成结果：'abc6810efgabcab'
var str = 'abc345efgabcab'
// str=str.replace(/(a|b|c)/g,'')
// str=str.replace(/345/,'[345]')
str=str.replace(/\d/g,function(n){return n*2})
console.log(str)
// --------
var a=10;
var obj={
   a:20,
   intr:function(){
     var a=30;
     console.log(this.a);
   }
}
obj.intr();//20
var intr=obj.intr;
intr();//10
// -----------------
function fun(){
  for(var i=0,arr=[];i<3;i++){
    arr[i]=function(){
      console.log(i);
    }
  }
  return arr;
}
var funs=fun();
funs[0]();//3
funs[1]();//3
funs[2]();//3
// --------------
// 深克隆
function clone(obj){
  if(obj===null){
    return null
  }else if({}.toString.call(obj)=="[object Array]"){
    var newArr=[]
    newArr=obj.sclice();
    return newArr;
  }
  var newObj={}
  for(var key in obj ){
    if(typeof(obj[key])!=='object'){
      newObj[key]=obj[key]
    }else{
      newObj[key]=clone(obj[key])
    }
  }
  return newObj;
}
// ------------
/^\w+@[0-9a-z](\.\w{1,3}){1,3}$/i
// --------------
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a)
console.log(a[b]);//456
// -----------------
