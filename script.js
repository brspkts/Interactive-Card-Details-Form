
    function submit(){
    let a= document.forms["form"]["name"].value;
    let b= document.forms["form"]["cardnbr"].value;
    let c= document.forms["form"]["mm"].value;
    let d= document.forms["form"]["yy"].value;
    let e= document.forms["form"]["cvc"].value;
    
    if(a === "" ){
           document.getElementById("alert1").innerHTML =" Can't be empty";
           document.getElementById("input1").style.borderColor ="red";
     }
     if(b === "" ){
         document.getElementById("alert2").innerHTML =" Can't be empty";
         document.getElementById("input2").style.borderColor ="red";
   
     }
    if(c === "" ){
        document.getElementById("alert3").innerHTML =" Can't be empty";
         document.getElementById("input3").style.borderColor ="red";
    }
    if(d === "" ){
        document.getElementById("alert3").innerHTML =" Can't be empty";
        document.getElementById("input4").style.borderColor ="red";
    }
    if(e === "" ){
        document.getElementById("alert5").innerHTML =" Can't be empty";
        document.getElementById("input5").style.borderColor ="red";
    }else{
        document.getElementById("form").style.display = "none";
        document.getElementById("thankyou").style.display = "flex";
        document.getElementById("btn").style.display = "none";
    }
   
    
    if(isNaN(b) ){ 
    document.getElementById("alert2").innerHTML =" Wrong format, numbers only";
    document.getElementById("input2").style.borderColor ="red";
    }
    if(isNaN(c) ){ 
        document.getElementById("alert3").innerHTML =" Wrong format, numbers only";
        document.getElementById("input3").style.borderColor ="red";
        }
        if(isNaN(d) ){ 
            document.getElementById("alert3").innerHTML =" Wrong format, numbers only";
            document.getElementById("input4").style.borderColor ="red";
            }
            if(isNaN(e) ){ 
                document.getElementById("alert5").innerHTML =" Wrong format, numbers only";
                document.getElementById("input5").style.borderColor ="red";
                }
 }

 function thankyou(){
        document.getElementById("form").style.display = "flex";
        document.getElementById("thankyou").style.display = "none";
        document.getElementById("btn").style.display = "block";
 }
    const insa = document.getElementById("input1");
    const outa = document.getElementById("name");
    const insb = document.getElementById("input2");
    const outb = document.getElementById("card-number");
    const insc = document.getElementById("input3");
    const outc = document.getElementById("month");
    const insd = document.getElementById("input4");
    const outd = document.getElementById("year");
    const inse = document.getElementById("input5");
    const oute = document.getElementById("cvc");

    // Name on Credit Card
    insa.addEventListener('input' , function(){
        if(insa.value.trim()){
            outa.textContent = insa.value;
        }
    })
    // Credit Card Number 
    insb.addEventListener('input' , function(){
        if(insb.value.trim()){
            outb.textContent = insb.value;
        }
    })
    // Expiration date (month)
    insc.addEventListener('input' , function(){
        if(insc.value.trim()){
            outc.textContent = insc.value;
        }
    })
    //Expiration date (year)
    insd.addEventListener('input' , function(){
        if(insd.value.trim()){
            outd.textContent = insd.value;
        }
    })
    // CVC Code
    inse.addEventListener('input' , function(){
        if(inse.value.trim()){
            oute.textContent = inse.value;
        }
    })
    

    function numberFormat() {
        var x = document.getElementById("input2");
        var index = x.value.lastIndexOf(' ');
        var test = x.value.substr(index + 1);
        if (test.length === 4)
             x.value = x.value + ' ';
    }



