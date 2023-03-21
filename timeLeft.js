


var time = 13


function runTimer(){

    console.log("Timer is activated")
    document.getElementById("timer").innerHTML = "Time Left"

    let inter = setInterval(() => {
        time = time - 1
        document.getElementById("timeCount").innerHTML = time
        if (time <= 10 && time >=0){
            document.getElementById("timeCount").style.color =  "#f30808"
            document.getElementById("timeCount").style.fontSize = "80px"
            document.getElementById("timeCount").style.marginTop = "80px"

        }
        else if(time <=0){
            alert("TimeOut")
            clearInterval(inter);
            document.getElementById("timeCount").innerHTML = ""
            document.getElementById("insideTimerID").style.height = "350px"
            document.getElementById("timer").innerHTML = "It's finished"
        }
 
    }, 1000);

    inter();
}