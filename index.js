const time=()=>{
 let date= new Date();
 let hours=date.getHours();
 let minutes=date.getMinutes();
 let second=date.getSeconds();
 console.log(hours+":"+minutes+":"+ second);
}
let interval =setInterval(time,1000);
    

