const plus =document.getElementById('plus');
const minus =document.getElementById('minus');
const reset =document.getElementById('reset');
const number =document.getElementById('number')

let count =0
console.log(plus)
function updatenumber (){
    number.textContent = count
}
plus.addEventListener("click", function(){
    count++
    updatenumber()
})
minus.addEventListener("click", function(){
    count--
    updatenumber()
})
reset.addEventListener("click", function(){
    count=0
    updatenumber()
})