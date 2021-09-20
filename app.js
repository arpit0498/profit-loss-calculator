var initialPrice =document.querySelector('#initial-price');
var currentPrice =document.querySelector('#current-price');
var stockQuantity =document.querySelector('#stocks-quantity');

var submitBtn= document.querySelector('#submit-btn');
var outputBtn= document.querySelector('#output.btn');

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty =Number(stockQuantity.value);
    var curr =Number(currentPrice.value);

    calculateProfitLoss(ip,qty,curr)


}
    function calculateProfitLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current)* current;
        var lossPercentage= (loss/initial)*100;
        console.log(`The Loss is ${profit}  and the percent is ${lossPercentage}`);



    }
    else if(current>initial){
        var profit =(current- initial)*quantity;
        var profitPercentage =(profit/initial)*100;

        console.log(`The profit is ${profit}  and the percent is ${profitPercentage}`);


    }else{
            console.log(`no pain no gain`)
    }

}
