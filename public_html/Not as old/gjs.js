var r = new XMLHttpRequest();
function stateChange()
{
if (r.readyState==4) {
if (r.status==200) {
var xmlDoc=r.responseXML;
var phoneStr="";
var x=xmlDoc.getElementsByTagName("PHONE");
for (i=0;i<x.length;i++) {
phoneStr = phoneStr +
x[i].getElementsByTagName("BRAND")[0].childNodes[0].nodeValue + " " +
x[i].getElementsByTagName("MODEL")[0].childNodes[0].nodeValue + "<br/>";
}
document.getElementById("txt").innerHTML = phoneStr;
}
else {
alert("Problem retrieving data:" + r.statusText); }
} }
function getCont()
{
r.onreadystatechange = stateChange;
r.open("get", "http://localhost/phone.xml", true);
r.send(null);
}




//var r = new XMLHttpRequest();
//function stateChange()
//{
//if (r.readyState==4) {
//if (r.status==200) {
//document.getElementById("txt").textContent=r.responseText;
//}
//else {
//alert("Problem retrieving data:" + r.statusText); }
//} }
//function getCont()
//{
//r.onreadystatechange = stateChange;
//r.open("get", "http://users.metropolia.fi/~inany/txt.txt", true);
//r.send(null);
//}

