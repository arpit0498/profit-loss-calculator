var initialPrice =document.querySelector('#initial-price');
var currentPrice =document.querySelector('#current-price');
var stockQuantity =document.querySelector('#stocks-quantity');

var submitBtn= document.querySelector('#submit-btn');
var outputBox= document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);

function showOutput(msg){
    outputBox.innerHTML = msg;


}

function submitHandler(){
    var ip = Number(initialPrice.value);
    var qty =Number(stockQuantity.value);
    var curr =Number(currentPrice.value);

    calculateProfitLoss(ip,qty,curr)


}
    function calculateProfitLoss(initial,quantity,current){
    if(initial > current){
        var loss = (initial - current)* quantity;
        var lossPercentage= (loss/initial)*100;
        showOutput(`The Loss is ${loss}  and the percent is ${lossPercentage}`);



    }
    else if(current>initial){
        var profit =(current- initial)*quantity;
        var profitPercentage =(profit/initial)*100;

        showOutput(`The profit is ${profit}  and the percent is ${profitPercentage}`);


    }else{
            showOutput(`no pain no gain`);
    }

}
