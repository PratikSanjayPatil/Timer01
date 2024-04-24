let Display = document.querySelector("#timer>.display")
let input1 = document.querySelector("#timer>.display>.hr")
let input2 = document.querySelector("#timer>.display>.min")
let input3 = document.querySelector("#timer>.display>.sec")
let h2 = document.querySelector("#timer>.display>h2")


function TM(){
    input1.style.display = "block";
    input2.style.display = "block";
    input3.style.display = "block";
    h2.style.display = "none"
}

let start = document.querySelector("#timer>.BTN>.start")

let int = null;



start.addEventListener("click",function(){
    int = null
    input1.style.display = "none";
    input2.style.display = "none";
    input3.style.display = "none";
    h2.style.display = "block";

    var hrVal = input1.value;
    var minVal = input2.value;
    var secVal = input3.value;

    reset.addEventListener("click" , ()=>{
        clearInterval(int);
        [hr,min,sec,milsec] = [0,0,0,0];
        [hrVal,minVal,secVal] = [0,0,0]
        h2.innerText = "00  00";
    })

    console.log(hrVal,minVal,secVal)

    if(secVal>59){
        alert("Please Give Value less than 60")
    }
    else if(minVal>59){
        alert("Please Give Value less than 60")
    }
    else{
        if(hrVal == ""){
            hrVal = "0"
        }
        if(minVal == ""){
            minVal = "0"
        }
        if(secVal == ""){
            secVal = "0"
        }
        if(hrVal == "0" && minVal == "0" && secVal == "0"){
            alert("Please give value")
        }
        





        let [hr,sec,min,milsec] = [Number(hrVal),Number(secVal),Number(minVal),0];

        
        
        
            
        if(hr>0 || min>0 || sec>0 || milsec>0){
            int=setInterval(displayTimer,10);
        }
        else{
            [hr,sec,min,milsec] = [0,0,0,0]
        }
            

        function displayTimer(){
            if(milsec>0){
                milsec-=10;
            }
            if(milsec==0 && sec>0){
                milsec = 1000;
                sec--;
            }

            if(sec==0 && min>0){
                sec=60;
                min--;
            }   

            if(min==0 && hr>0){
                min = 60;
                hr--
            }
            
            
            
            
            let s = sec<10 ? "0" + sec : sec;
            let ms = milsec<10 ? "00" + milsec : milsec;

            if(min===0){
                h2.innerText = `${s} ${ms}`
            }
            else if(hr===0){
                let m = min<10 ? "0"+min : min
                h2.innerText = `${m} : ${s} ${ms}`
            }
            else{
                let h = hr<10 ? "0" + hr : hr;
                h2.innerText = `${h} : ${m} : ${s} ${ms}`
            }
        }
    }
})

let pause = document.querySelector("#timer>.BTN>.pause")
let reset = document.querySelector("#timer>.BTN>.reset")

pause.addEventListener("click", ()=>{
    clearInterval(int);
})



Display.addEventListener("click",TM)