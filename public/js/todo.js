console.log("Hello from js");
document.getElementById("loader").style.display="block";
fetch("/api/todos")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    document.getElementById("loader").style.display="none";
});
var lightTheme=true;
function setTheme()
{
    console.log("pressed");
    if(lightTheme===true)
    {
        lightTheme=false;
        document.documentElement.setAttribute("data-bs-theme","dark");
    }
    else{
        lightTheme=true;
        document.documentElement.setAttribute("data-bs-theme","light");
    }
}