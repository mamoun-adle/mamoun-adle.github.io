function openfun()
{

}
function notnull()
{
	var bool;
 var fname; 
 fname = document.getElementById("fname").value;
 if (isNaN(fname)) 
 {
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
 document.getElementById("fname").style.border = "1px solid #aaa";
 bool =1;
 }
 else 
 {
 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter first name ');
bool =0 ;
  document.getElementById("fname").style.border = "1px solid #ddd"; 
  document.getElementById("fname").style.borderColor = "red"; 
  
  
  return -1;
 }


//------------------------------------------------
var lname ;
lname = document.getElementById("lname").value;
 if (isNaN(lname)) 
 {
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
   // alert('please enter last name ');
   bool=1;
   
   document.getElementById("lname").style.border = "1px solid #aaa";
}
 else 
 {
 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter last name ');
 bool =0 ;
  document.getElementById("lname").style.border = "1px solid #ddd"; 
  document.getElementById("lname").style.borderColor = "red"; 
  
 return -1;
 }
 //------------------------------------------------
 
var website ;
website = document.getElementById("website").value;
 if (isNaN(website)) 
 {
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
 bool =1;
    document.getElementById("website").style.border = "1px solid #aaa";
 }
 else 
 {
 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter website ');
 bool =0 ;
   document.getElementById("website").style.border = "1px solid #ddd"; 
  document.getElementById("website").style.borderColor = "red"; 
  
 return -1;
 }
 //------------------------------------------------
 var phone ;
phone = document.getElementById("phone").value;
var phonel = document.getElementById("phone").value.length;
 if (isNaN(phone) || phonel == 10 ) 
 {
	 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter phone ');
 bool =0 ;
  document.getElementById("phone").style.border = "1px solid #ddd"; 
  document.getElementById("phone").style.borderColor = "red"; 
  
 return -1;
 }
 
 else 
 { 
 if ( phone == "")
 {
	 	 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter phone ');
 bool =0 ;
  document.getElementById("phone").style.border = "1px solid #ddd"; 
  document.getElementById("phone").style.borderColor = "red"; 
  return -1;
 }
else
{
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
 bool =1 ;
   document.getElementById("phone").style.border = "1px solid #aaa";
}
 }
 
 //------------------------------------------------
 var email ;
email = document.getElementById("email").value;
 if (isNaN(email)) 
 {
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
 bool =1 ;
   document.getElementById("email").style.border = "1px solid #aaa";
 }
 else 
 {
 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter email ');
 bool =0 ;
   document.getElementById("email").style.border = "1px solid #ddd"; 
  document.getElementById("email").style.borderColor = "red"; 
  
 return -1;
 }
 
 //------------------------------------------------
 var Uname ;
Uname = document.getElementById("Uname").value;
 if (isNaN(Uname)&& (Uname != fname )) 
 {
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
  bool =1 ;
  document.getElementById("Uname").style.border = "1px solid #aaa";
 }
 else 
 {
 if (Uname == fname)
 {
 document.getElementById("demo").innerHTML = "please change data";
 alert('you can not use first name in user name ');
 bool =0 ;
   document.getElementById("Uname").style.border = "1px solid #ddd"; 
  document.getElementById("Uname").style.borderColor = "red"; 
  
 
 return -1;
 }
 else{
 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter Uname ');
 bool =0 ;
 
   document.getElementById("Uname").style.border = "1px solid #ddd"; 
  document.getElementById("Uname").style.borderColor = "red"; 
  
 return -1;
 }
}
 //-------------------------------------------------
 var degree ;
  
degree = document.getElementById("degree").value;
 if (isNaN(degree)) 
 {
 document.getElementById("demo").innerHTML = "you can sure for the data"; 
 bool =1 ;
    document.getElementById("degree").style.border = "1px solid #aaa";
 
 }
 else 
 {
 document.getElementById("demo").innerHTML = "please enter data";
 alert('please enter degree ');
 bool =0 ;
 
  document.getElementById("degree").style.border = "1px solid #ddd"; 
  document.getElementById("degree").style.borderColor = "red"; 
  
 return -1;
 }

 //------------------------------------------------
 if (bool == 1) {return 1;}
 else { return 0 ; }
 
}