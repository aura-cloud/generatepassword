function generatepassword(length,includelowercase,includeuppercase,includeumber,includesymbol){
    const lowercasechar="abcdefghijklmnopqrstuvwxyz" ;
    const uppercasechar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar="0123456789";
    const symbolchar="!@#$%^&*(){}~:;<>,.";
    let allowedchar="";
    let password="";
    allowedchar+= includelowercase? lowercasechar:"";
    allowedchar+= includeuppercase? uppercasechar:"";
    allowedchar+= includenumber? numberchar:"";
    allowedchar+= includesymbol? symbolchar:""; 
    if(length<=0){
        return("Password length must be atleast 1");

    }
    if(allowedchar.length ===0){
        return("Atleast one set of charachter needs to be selectes ");
    }
    for (let i =0;i< length; i++ ){
        const randomindex =Math.floor(Math.random() * allowedchar.length);
        password+= allowedchar[randomindex];
    }






    return '';
}








const passwordlength=12;
const includelowercase= true;
const includeuppercase =true;
const includenumber= true;
const includesymbol= true;
const password =generatepassword(passwordlength,includelowercase,includeuppercase,includenumber,includesymbol);
console.log(`Generated password: ${password}`);