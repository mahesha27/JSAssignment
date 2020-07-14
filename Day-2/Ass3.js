var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
nl="\r\n"
today = mm+'-'+dd+'-'+yyyy+nl;
document.write(today); 
today = mm+'/'+dd+'/'+yyyy+nl;
document.write(today);
today = dd+'-'+mm+'-'+yyyy;
document.write(today);
today = dd+'/'+mm+'/'+yyyy;
document.write(today);