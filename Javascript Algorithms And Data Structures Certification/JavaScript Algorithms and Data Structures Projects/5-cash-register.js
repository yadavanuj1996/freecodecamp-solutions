// TODO: Refactor and document this code
var factorValue={
  "1":{name:"PENNY",value: 0.01},
  "2":{name:"NICKEL",value: 0.05},
  "3":{name:"DIME",value: 0.1},
  "4":{name:"QUARTER",value: 0.25},
  "5":{name:"ONE",value: 1},
  "6":{name:"FIVE",value: 5},
  "7":{name:"TEN",value: 10},
  "8":{name:"TWENTY",value: 20},
  "9":{name:"ONE HUNDRED",value: 100}
};

function getNotesDetails(remainingAmount,cashRegisterAmount,result,noteIndex){
  // use reducer function instead
  if(remainingAmount===0){
    let flag=0;
    cashRegisterAmount.forEach(x=>{
      if(x[1] > 0){
        flag=1;
      }
    });
    if(flag===0)
      return {status: "CLOSED"};
      
    return {status: "OPEN",change: result};
  }

  if(noteIndex < 1){
    if(remainingAmount > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
  }
  
  let factorVal=factorValue[noteIndex]["value"];
  let actualDeduction=0;
  let deductibleAmount=Math.floor((remainingAmount/factorVal))*factorVal;
  if(deductibleAmount <= cashRegisterAmount[noteIndex-1][1]){
    actualDeduction=deductibleAmount;
    cashRegisterAmount[noteIndex-1][1]-=actualDeduction;
  }
  else{
    actualDeduction=cashRegisterAmount[noteIndex-1][1];
    cashRegisterAmount[noteIndex-1][1]=0;
  }
  
  // we have used this to round upto 2 digits
 remainingAmount=Math.round((remainingAmount-actualDeduction)*100)/100;
  if(actualDeduction>0)
    result.push([factorValue[noteIndex]["name"],actualDeduction]);
  
 	noteIndex=noteIndex-1;
  return getNotesDetails(remainingAmount,cashRegisterAmount,result,noteIndex--);
}

function checkCashRegister(price, cash, cid) {
  let result=[];
  let initialCashRegisterAmount=JSON.parse(JSON.stringify(cid)); 
  let largestNoteIndex=getLargestNoteIndex(cash-price);
  result=getNotesDetails(cash-price,cid,result,largestNoteIndex);
  
  if(result.status==="CLOSED")
    result.change=initialCashRegisterAmount;

  return result;
}


function getLargestNoteIndex(totalAmount){
  let largestNoteIndex=0;
  for(let i=9;i>0;i--){
    if(totalAmount > factorValue[i].value){
      largestNoteIndex=i;
      break;
    }
  }
  return largestNoteIndex;
}

console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])));

