
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const priceInput = document.getElementById('price');
const totalpriceBtn = document.getElementById('totalprice');

document.getElementById('increase').onclick = function(){
    calcCost();
};

function calcCost() {
    let sP = parseInt(priceInput.value);
    let qP = parseInt(quantityInput.value);
    quantityInput.value = qP + 1;
    let total1 = sP * (qP + 1);
    if (parseInt(quantityInput.value) > 1){
        decreaseBtn.disabled = false;
    }

    
    document.getElementById('totalprice').innerHTML = '$' + total1 ;
}

document.getElementById('decrease').onclick = function(){
    calcCostdescrease();
};
function calcCostdescrease(){
    let qP = parseInt(quantityInput.value);
    if (qP > 1) {
        document.getElementById('quantity').value = qP - 1;}
    let qPR = parseInt(totalpriceBtn.value);
    let sP = parseInt(priceInput.value);
    qPR = qP * sP ;
    if (qP > 1) {
    let total1 = qPR - sP; 
    document.getElementById('totalprice').innerHTML = '$' + total1 ;}
    if (parseInt(quantityInput.value) === 1){
        decreaseBtn.disabled = true;
    }
}
const quantInput = document.getElementById('quant');
const decrBtn = document.getElementById('decr');
const price2Input = document.getElementById('price2');
const totalprice2Btn = document.getElementById('totalprice2')

document.getElementById('incr').onclick = function(){
    calcCost2();
};

function calcCost2() {
    let sP2 = parseInt(price2Input.value);
    let qP2 = parseInt(quantInput.value);
    document.getElementById('quant').value = qP2 + 1;
    let total2 = sP2 * (qP2 + 1);

    
    document.getElementById('totalprice2').innerHTML = '$' + total2 ;
    if (parseInt(quantInput.value) > 1){
        decrBtn.disabled = false;
    }
}

document.getElementById('decr').onclick = function(){
    calcCostdescrease2();
};
function calcCostdescrease2(){
    let qP2 = parseInt(quantInput.value);
    if (qP2 > 1) {
        document.getElementById('quant').value = qP2 - 1;}
    let qPR2 = parseInt(totalprice2Btn.value);
    let sP2 = parseInt(price2Input.value);
    qPR2 = qP2 * sP2 ;
    if (qP2 > 1) {
    let total2 = qPR2 - sP2; 
    document.getElementById('totalprice2').innerHTML = '$' + total2 ;}
    if (parseInt(quantInput.value) === 1) {
        decrBtn.disabled = true;
    }else{
        decrBtn.disabled = false;
    }
}

document.getElementById('Update').onclick = function(){
    UpdateCost();
    UpdatetotalCost();
}


function UpdateCost(){
    let sP = parseInt(priceInput.value);
    let qP = parseInt(quantityInput.value);
    let qP2 = parseInt(quantInput.value)
    let sP2 = parseInt(price2Input.value);

    total1 = sP * qP;
    total2 = sP2 * qP2;
    let sum = total1 + total2;
    let fail ="";
    document.getElementById('Sub-total').innerHTML = '$' + sum; 
    if (qP === 0 && qP2 === 0){
        fail ="Select a product";
     } 
     if(fail != ""){
        document.getElementById('error').innerHTML = fail;
     }

}
function UpdatetotalCost(){
    let sP = parseInt(priceInput.value);
    let qP = parseInt(quantityInput.value);
    let qP2 = parseInt(quantInput.value)
    let sP2 = parseInt(price2Input.value);
    total1 = sP * qP;
    total2 = sP2 * qP2;
    let sum = total1 + total2;
    let dI = parseInt(document.getElementById('DiscountInput').value);
    let tI = parseFloat(document.getElementById('TaxInput').value);
    let totalsum = sum - dI + tI;
    if (qP === 0 && qP2 === 0){
        totalsum = 0;
     } 
     document.getElementById('totalsum').innerHTML = '$' + totalsum + ' ' + 'USD';  

}

document.addEventListener('DOMContentLoaded', () => {
    const quantityInput = document.getElementById('quantity');
    const increaseBtn = document.getElementById('increase');
    const decreaseBtn = document.getElementById('decrease');
    const deleteBtn = document.getElementById('delete');
    let UpdateBtn = document.getElementById('Update');



    deleteBtn.addEventListener('click', () => {
        quantityInput.value = 0;
        increaseBtn.disabled = true;
        decreaseBtn.disabled = true;

        document.getElementById('price').innerHTML = '0';
        document.getElementById('totalprice').innerHTML = '0';
        document.getElementById('item').innerHTML = ' <i> The product has been removed from the list </i> '
    });


})
document.addEventListener('DOMContentLoaded', () => {

    const quantityInput2 = document.getElementById('quant');
    const increaseBtn2 = document.getElementById('incr');
    const decreaseBtn2 = document.getElementById('decr');
    const deleteBtn2 = document.getElementById('delete2');



    deleteBtn2.addEventListener('click', () => {
        quantityInput2.value = 0;
        increaseBtn2.disabled = true;
        decreaseBtn2.disabled = true;

        
        document.getElementById('item2').innerHTML = ' <i> The product has been removed from the list </i> ';
        document.getElementById('totalprice2').innerHTML = '0';
        document.getElementById('price2').innerHTML = '0';
    });

})
document.getElementById('couponBtn').onclick = function(){
    Clickcoupon();
}
function Clickcoupon(){
    let email = document.getElementById('couponInput').value;
    let fail ="";
    if(email == "" )
    fail = "Enter your email address";
    else if (email.length <= 2 || email.length > 50)
    fail = "Enter the correct email";
    if(fail != ""){
    document.getElementById('couponError').innerHTML = fail;
    } else {
     alert("A coupon has been sent to your email!");
    }
}