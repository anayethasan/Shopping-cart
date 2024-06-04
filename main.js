function handlePhonePrice(product, isIncrese){
    const productInput = document.getElementById(product + '-count');
    const productCount = parseInt(productInput.value);

    let productNewCount = productCount;
    if (isIncrese == true){
        productNewCount = productCount + 1;
    }else if (isIncrese == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;
    let productTotal = 0;
    if (product == 'phone'){
        productTotal = productNewCount * 1219;
    }else if (product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-price').innerHTML = '$' + productTotal;
    calculateTotal();
}

function calculateTotal(){
    const caseCount = getInputValue('case');
    const phoneCount = getInputValue('phone');

    const TotalPrice = (phoneCount * 1219) + (caseCount * 59);
    document.getElementById('total-price').innerText = '&' + TotalPrice;

    const tax = TotalPrice * 0.1;
    document.getElementById('tex-amount').innerText = '&' + tax.toFixed(2);

    const grandTotal = TotalPrice + tax;
    document.getElementById('grand-total').innerText = '&' + grandTotal;
}

function getInputValue (product){
    const productInput = document.getElementById(product + '-count')
    const productCount = parseInt(productInput.value);
    return productCount;
}





// casing Event handler 
// document.getElementById('case-increse').addEventListener("click",function(){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);
//     const caseNewCount = caseCount + 1;
//     caseInput.value = caseNewCount;
    
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-price").innerText = '$' + caseTotal;

// })

// document.getElementById('case-decrese').addEventListener("click", function(){
//     const caseOutput = document.getElementById("case-count");
//     const caseSubstact = parseInt(caseOutput.value);
//     const caseNewSubstact = caseSubstact - 1;
//     caseOutput.value = caseNewSubstact;

//     const caseTotal = caseNewSubstact * 59 ;
//     document.getElementById("case-price").innerText = '$' + caseTotal;
// })


// for casing Event handler
// *** i did two way this one anothor is onclick ** //
// document.getElementById('case-increse').addEventListener("click",function(){
//     handleproductChange(true);

// });

// document.getElementById('case-decrese').addEventListener("click", function(){
//     handleproductChange(false);
// });


// function handleproductChange(isIncrese){
//     const caseInput = document.getElementById("case-count");
//     const caseCount = parseInt(caseInput.value);

//     let caseNewCount = caseCount;
//     if (isIncrese == true){
//         caseNewCount = caseCount + 1;
//     }else if (isIncrese == false && caseCount > 0){
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;

//     const caseTotal = caseNewCount * 59 ;
//     document.getElementById("case-price").innerText = '$' + caseTotal;
// }


// for Mobile Event handler
// document.getElementById('phone-increse').addEventListener("click", function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount + 1;
//     phoneInput.value = phoneNewCount;

//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerHTML = '$' + phoneTotal;
// });

// document.getElementById('phone-decrese').addEventListener("click", function(){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);
//     const phoneNewCount = phoneCount - 1;
//     phoneInput.value = phoneNewCount;

//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerHTML = '$' + phoneTotal;
// });


// function handlePhonePrice(isUping){
//     const phoneInput = document.getElementById('phone-count');
//     const phoneCount = parseInt(phoneInput.value);

//     let phoneNewCount = phoneCount;
//     if (isUping == true){
//         phoneNewCount = phoneCount + 1;
//     }else if (isUping == false && phoneCount > 0){
//         phoneNewCount = phoneCount - 1;
//     }
//     phoneInput.value = phoneNewCount;

//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById('phone-price').innerHTML = '$' + phoneTotal;
// }



// total pricing
// function calculateTotal(){
//     const phoneInput = document.getElementById('phone-count')
//     const phoneCount = parseInt(phoneInput.value);

//     const caseInput = document.getElementById('case-count');
//     const caseCount = parseInt(caseInput.value);

//     const TotalPrice = (phoneCount * 1219) + (caseCount * 59);
//     document.getElementById('total-price').innerText = '&' + TotalPrice;
// }
