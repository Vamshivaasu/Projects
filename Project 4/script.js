
function displayTime(){

    var dateTime= new Date();
    var hrs=dateTime.getHours();
    var min=dateTime.getMinutes();
    var sec=dateTime.getSeconds();
    var session=document.getElementById("session");
    var name = "VAMSHI"

    //Time upadate
/*  hrs = updateTime(hrs);
    min = updateTime(min);
    sec= updateTime(sec); */
   

    if(hrs>=12){
        session.innerHTML = " PM "
    }else{
       
        session.innerHTML= " AM "
    }

   /*  if(hrs>12){
        hrs = hrs - 12;
    } */

    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=sec;


//Good-Mrng,Afternoon,Nitgt
    if(hrs < 12){
        var greatings = " GOOD MORNING " + name + " HURRY UP! ";
        var grab = name + "  GRAB SOME HEALTHY BREAKFAST!!! "
        document.getElementById("component").style.backgroundImage="url(./morning.svg)";

    }
    else if(hrs >=12 && hrs <= 16){
        var greatings = " GOOD AFTERNOON " + name;
        var grab = name + " LET'S HAVE SOME LUNCH !!"
        document.getElementById("component").style.backgroundImage="url(./lunch.svg)";
     
    }
    else if(hrs >=16 && hrs < 20){
        var greatings = " GOOD EVENING " + name;
        var grab = "  STOP YAWNING, GET SOME TEA.. ITS JUST EVENING! "
        document.getElementById("component").style.backgroundImage="url(./tea.png)";
    }
    else{
        var greatings = " GOODNIGHT " + name;
        var grab = name + "  CLOSE YOUR EYES AND GO TO SLEEP "
        document.getElementById("component").style.backgroundImage="url(./night.svg)";
    }
    document.getElementById("greatings").innerHTML=greatings;
    document.getElementById("grab").innerHTML=grab;
  

}
setInterval(displayTime,10);

/* function upadate(k){
    if(k<10){
        return "0" + k;
    }else{
        return k;
    }
}
displayTime(); */


function getOption(){

    var e =document.getElementById("time1");
    var text1 = e.options[e.selectedIndex].text;

    var f =document.getElementById("time2");
    var text2 = f.options[f.selectedIndex].text;

    var g =document.getElementById("time3");
    var text3 = g.options[g.selectedIndex].text;

    var h =document.getElementById("time4");
    var text4 = h.options[h.selectedIndex].text;

    var idExist = document.getElementById("detail-box")
    if(idExist){
        idExist.innerHTML =  "wake up time : ${text1}  Lunch Time : ${text2}  Nap Time : ${text3}  Sleep Time : ${text4}";
    }
}
