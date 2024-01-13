const formSubmit = document.getElementById("myCard");

formSubmit.addEventListener("submit", (e)=>{

    // prevent default
    e.preventDefault();

    // update details in card ui

    // card name
    const cardName = document.getElementById("card-name");
    const uiCardName = document.querySelector(".c-name");

    uiCardName.innerText = cardName.value;

    // card number
    const cardNo = document.getElementById("card-number");
    const uiCardNo = document.querySelector(".c-no");

    let strspace = cardNo.value;

    let strnospace = strspace.replaceAll(" ", "");
    

    if(isNaN(+strnospace)){
        const cardnoerror = document.querySelector(".cardnoerror");
        cardnoerror.style.visibility = "visible";
        cardNo.style.border = "1px solid red";
    }else{
        const cardnoerror = document.querySelector(".cardnoerror");
        cardnoerror.style.visibility = "hidden";
        cardNo.style.border = "0.15rem solid #E6E6EB";
        uiCardNo.innerText = cardNo.value;
    } 

    // expiry month and year
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const uiMonth = document.querySelector(".c-date");

    if(month.value === ""){
        const monthError = document.querySelector(".montherror");
        monthError.style.visibility = "visible";
        month.style.border = "1px solid red";
    }else if(year.value === ""){
        const monthError = document.querySelector(".montherror");
        monthError.style.visibility = "visible";
        year.style.border = "1px solid red";
    }else{
        const monthError = document.querySelector(".montherror");
        monthError.style.visibility = "hidden";
        month.style.border = "0.15rem solid #E6E6EB";
        year.style.border = "0.15rem solid #E6E6EB";
        uiMonth.innerText = month.value + "/" + year.value;
    }
    

    // cvc
    const cvc = document.getElementById("cvc");
    const uiCVC = document.querySelector(".c-cvc");

    if(cvc.value === ""){
        const cvcError = document.querySelector(".cvcerror");
        cvcError.style.visibility = "visible";
        cvc.style.border = "1px solid red";
    }else{
        const cvcError = document.querySelector(".cvcerror");
        cvcError.style.visibility = "hidden";
        cvc.style.border = "0.15rem solid #E6E6EB";
        uiCVC.innerText = cvc.value;
    }
    
    
    console.log("hello card");
})

