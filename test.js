async function testtest(){
    // document.getElementById("ouput_dateTime").innerHTML =  "This is just test!!";
    var timeS = "This is just test!!";
    return timeS;
}

async function test2(){
    var arrValue=new Array();
    // function createArrayE(rows, columns){
    //     var arr = new Array(rows);
    //     for(var i=0; i<rows; i++){
    //         arr[i]=new Array(columns);
    //     }
    //     return arr;
    // }
    // arrValue = createArrayE(10, 5);
    // var arrWithdraw=new Array();    // 출금
    // var arrDeposit=new Array();     // 입금
    var address = "public acount";    // 공금계좌

    function Withdraw(){    // 출금
        arrValue[0]="withdraw";
        arrValue[1]="test_price";     // 출금 금액
        arrValue[2]="test_to";        // 받는 사람
        arrValue[3]="balance";        // 잔액, 이더값
        arrValue[4]="timeS";        // 날짜
    }
    function Deposit(){     // 입금
        arrValue[0]="deposit"; 
        arrValue[1]="test_value";     // 입금 금액
        arrValue[2]="test_from";      // 주는 사람
        arrValue[3]="balance";        // 잔액, 이더값
        arrValue[4]="timeS";        // 날짜 
    }

    // 공금계좌와 보낸 사람 계좌와 같으면 출금, 그 반대면 입금
    if(address == "public acount"){     // 출금
        Withdraw();
    } else{     // 입금
        Deposit();             
    }
    return arrValue;

    // arrValue[0]="test_value";     // 입금 금액
    // arrValue[1]="test_price";     // 출금 금액
    // arrValue[2]="test_from";      // 주는 사람
    // arrValue[3]="test_to";        // 받는 사람
    // arrValue[4]="balance";        // 잔액, 이더값
    // return arrValue;
}

// async function test3(){
//     return 2;
// }