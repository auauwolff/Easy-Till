


function getPackageTotal(){
    const pOne = document.getElementById("p-one").value;
    const pOfifty = document.getElementById("p-zero-fifty").value;
    const pOtwenty = document.getElementById("p-zero-twenty").value;
    const pTwo = document.getElementById("p-two").value;

    const total2 = parseFloat(pTwo) * 50;
    const total1 = parseFloat(pOne) * 20;
    const totalOfifty = parseFloat(pOfifty) * 10;
    const totalOtwenty = parseFloat(pOtwenty) * 4;
    
    const totalp = total2 + total1 + totalOfifty + totalOtwenty;
    

    if(!isNaN(totalp)){
        document.getElementById("p-total").innerHTML=`Total.: ${totalp}$`;
        document.getElementById("p-float").innerHTML=`Float.: ${totalp}$`;
    }

    return totalp;

}

function getTillTotal(){
    const tOne = document.getElementById("t-one").value;
    const tOfifty = document.getElementById("t-zero-fifty").value;
    const tOtwenty = document.getElementById("t-zero-twenty").value;
    const tTwo = document.getElementById("t-two").value;

    const total2 = parseFloat(tTwo) * 2;
    const total1 = parseFloat(tOne) * 1;
    const totalOfifty = parseFloat(tOfifty) * 0.50;
    const totalOtwenty = parseFloat(tOtwenty) * 0.20;
    
    const totalt = total2 + total1 + totalOfifty + totalOtwenty;
    const totalp = getPackageTotal();
    const float = totalp + totalt;

    if(!isNaN(totalt)){
        document.getElementById("t-total").innerHTML=`Total.: ${totalt}$`;
        document.getElementById("t-float").innerHTML=`Float.: ${float}$`;
    }

    return float;
}

function getNotesTotal(){
    const nfive= document.getElementById("n-five").value;
    const nten = document.getElementById("n-ten").value;
    const ntwenty = document.getElementById("n-twenty").value;
    const nfifty = document.getElementById("n-fifty").value;

    const total5 = parseFloat(nfive) * 5;
    const total10 = parseFloat(nten) * 10;
    const total20 = parseFloat(ntwenty) * 20;
    const total50 = parseFloat(nfifty) * 50;
    
    const totaln = total5 + total10 + total20 + total50;
    const float = getTillTotal();
    const floatn = float + totaln;


    if(!isNaN(totaln)){
        document.getElementById("n-total").innerHTML=`Total.: ${totaln}$`;
        document.getElementById("n-float").innerHTML=`Float.: ${floatn}$`;
    }

    return floatn;
}

function Profit(){

    const float = getNotesTotal();
    const profit = float - 700;

    document.getElementById("profit").innerHTML=`Profit.: ${profit}$`;
}





