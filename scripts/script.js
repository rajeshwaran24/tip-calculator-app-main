// create element 

const buttonEl=document.getElementById('btn');
const totalEl=document.getElementById('total');
const amountEl=document.getElementById('amount');
const percentEl=document.querySelectorAll('.tip-percent');
const customEl=document.getElementById('custom');
const billEl=document.getElementById('bill');
const peopleEl=document.getElementById('people');

// global variables

let bill,tipPercent, persons

// init function

function init(){
    bill=0,
    tipPercent=0,
    persons=0,
    billEl.value=null,
    peopleEl.value=null,
    customEl.value=null
    totalEl.innerText='0.00',
    amountEl.innerText='0.00'
}
// step-1  formula200
function calBills(tipPercent){
    bill=Number(billEl.value)
    persons=Number(peopleEl.value)


    const totalTip = bill * tipPercent;
    console.log(totalTip)
    
    const totalBill = bill + totalTip;
    console.log(totalBill)

    const tipPerPerson = totalTip / persons;
    console.log(tipPerPerson);
    const billPerPerson = totalBill / persons;
    console.log(billPerPerson)

    amountEl.innerText=`$`+tipPerPerson.toFixed(2);
    totalEl.innerText=`$`+billPerPerson.toFixed(2);

    peopleEl.value=null;
    billEl.value=null;
}

//step-2
for(let i=0;i < percentEl.length;i++){
    percentEl[i].addEventListener('click',function(){
        tipPercent=Number(this.value)/100;
        calBills(tipPercent)
    })
}

customEl.addEventListener('change',function(){
    tipPercent=Number(this.value)/100;
    this.value=null;
    calBills(tipPercent)
})


buttonEl.addEventListener('click',function(){
    init();
})
init()




