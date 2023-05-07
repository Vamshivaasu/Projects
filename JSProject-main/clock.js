function ClockStart()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    if (hours > 12 && seconds > 0) {
        hours = hours - 12; //conversion of 24 hour clock to 12 hour clock
        let part = document.getElementById("part");
        part.innerHTML = "PM";
    
    }
     

    console.log(hours, minutes, seconds);


    let hrs = document.getElementById("hrs");
    hrs.innerText = hours;
    let min = document.getElementById("min");
    min.innerText = minutes;
    let sec = document.getElementById("sec");
    sec.innerText = seconds;
     

}
setInterval(() => {
    ClockStart();
}, 1000)
//-----------------------------------





function changeCurrentTimeMessage() {

var hours = new Date().getHours();

    if (hours >= 6 && hours < 12) {
        document.getElementById("diffont").innerText = "GOOD MORNING!! WAKE UP !!";

         
    }



    else if (hours >= 12 && hours < 16) {
   let diffont = document.getElementById("diffont");
       diffont.innerHTML = "GOOD AFTERNOON !! TAKE SOME SLEEP";
       let second = document.getElementById("second");
        second.innerHTML = "LETS HAVE SOME LUNCH";
         let img = document.getElementById("img");
        let inside1 = document.getElementById("inside1");
    
        inside1.addEventListener('click', () => {
         img.src = 'party.png';
})
        
      
       
    }
    else if (hours >= 16 && hours < 19)
    {
        let diffont = document.getElementById("diffont");
        diffont.innetHTML = "GOOD EVENING !!"
        let second = document.getElementById('second');
        second.innerHTML = "STOP YAWNING, GET SOME TEA..ITS JUST EVENING";

                 let img = document.getElementById("img");
          let inside1 = document.getElementById("inside1");
    
           inside1.addEventListener('click', () => {
               img.src = 'cup.png';
})
    }
      else if (hours >=19 && hours < 24)
    {
        let diffont = document.getElementById("diffont");
        diffont.innetHTML = "CLOSE YOUR EYES AND SLEEP"
        let second = document.getElementById('second');
        second.innerHTML = "GOOD NITGHT!1 SLEEP !!";
          let img = document.getElementById("img");
let inside1 = document.getElementById("inside1");
    
inside1.addEventListener('click', () => {
    img.src = 'sleeping.png';
})
    }
}
changeCurrentTimeMessage();
setInterval(changeCurrentTimeMessage, 1000);
//--------------------------------------------------------

var button = document.getElementById("inside1");
var originalText = button.innerHTML;

button.addEventListener("click", function() {
    button.innerHTML = "Its Party Time!!";
    setTimeout(function() {
        button.innerHTML = originalText;
    }, 3000);
});

function praveen() {
    var options = document.getElementById("dropdown").value;
localStorage.setItem("value",options);

    document.getElementById("wish").innerHTML = localStorage.getItem("value");

}


