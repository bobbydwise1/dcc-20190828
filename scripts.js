/*
This problem was asked by Facebook.

Given a array of numbers representing the stock prices of a company in chronological order, write a function that calculates the maximum profit you could have made from buying and selling that stock once. You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5, since you could buy the stock at 5 dollars and sell it at 10 dollars.
*/

const buyLowSellHigh = (yourArray) => {
  let minPos = yourArray.indexOf(Math.min(...yourArray))
  let temp = yourArray.slice(minPos)
  console.log('min = ', temp[0], 'located at index ', minPos)
  let max = Math.max(...temp);
  console.log('max = ', max)
  return max-temp[0]
}

let test0 = [9, 11, 8, 5, 7, 10]
console.log(buyLowSellHigh(test0))

$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let input0 = $('#input-section-0').val()
    console.log(input0)
    let input1 = JSON.parse(input0)
    $('#output-section-0').text(buyLowSellHigh(input1))
  })
});
