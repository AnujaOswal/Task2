//creating request instance
var req= new XMLHttpRequest();

//initate a connection or create connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);

//sending request
req.send();

//load function
//this fun will be triggered only when the data has been recived successfully.
req.onload=function(){
var data=JSON.parse(this.response); //current created object data
data.forEach(c => {
    (console.log(c.name))
});
    


}