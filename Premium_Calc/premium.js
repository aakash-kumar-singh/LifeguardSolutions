let submit=document.getElementById('submit');
let back=document.getElementById('back');
let now=document.getElementById('now');
let cancel=document.getElementById('cancel');
let confirm=document.getElementById('confirm');
let premium=0;
let amount=0;

function confirmPay(){
    $(document).ready(function(){
        $('.box3').css('scale',0);
        $('.popup').css({
            'margin-top':'50px',
            'transition':'2s'
        });
    })
}

function cancelPay(){
    $(document).ready(function(){
        $('.box2').css('scale',1);
        $('.box3').css('scale',0);
    })
}
function payNow(){
    $(document).ready(function(){
        $('.box2').css('scale',0);
        $('.box3').css('scale',1);
    })
}
function goBack(){
    $(document).ready(function(){
        $('#myForm')[0].reset();
        $('.box1').css('scale',1);
        $('.box2').css('scale',0);
    })
}
function calculateDate() {
        let curDate = new Date();
        curDate.setDate(curDate.getDate() + 28);
        let year = curDate.getFullYear();
        let month = String(curDate.getMonth() + 1).padStart(2, '0');
        let day = String(curDate.getDate()).padStart(2, '0');
        let nextDate = `${year}-${month}-${day}`;
        return nextDate;
    }
function premiumCalc(){
    let sum=parseFloat(document.getElementById('sum').value);
    let term=parseFloat(document.getElementById('term').value);
    let smoke = document.querySelector('input[name="smoke"]:checked');
    let frequency=document.querySelector('input[name="frequency"]:checked');
    if(smoke && frequency)
    {
        if(smoke.value==='yes' && frequency.value==='quarter'){
        term=term*4;
        amount=sum/term;
        premium=amount+0.1*amount;
    }
    if(smoke.value==='yes' && frequency.value==='half'){
        term=term*2;
        amount=sum/term;
        premium=amount+0.1*amount;
    }
    if(smoke.value==='yes' && frequency.value==='year'){
        amount=sum/term;
        premium=amount+0.1*amount;
    }
    if(smoke.value==='no' && frequency.value==='quarter'){
        term=term*4;
        amount=sum/term;
        premium=amount;
    }
    if(smoke.value==='no' && frequency.value==='half'){
        term=term*2;
        amount=sum/term;
        premium=amount;
    }
    if(smoke.value==='no' && frequency.value==='year'){
        amount=sum/term;
        premium=amount;
    }
    }
    let formattedDate=calculateDate();
    document.getElementById('premiumResult').innerHTML = `Due Amount: Rs${premium}<br>
    Due Date: ${formattedDate}`;
    $(document).ready(function(){
        $('.box1').css('scale',0);
        $('.box2').css('scale',1);
    })
    
}
submit.addEventListener('click',premiumCalc);
back.addEventListener('click',goBack);
now.addEventListener('click',payNow);
cancel.addEventListener('click',cancelPay);
confirm.addEventListener('click',confirmPay);