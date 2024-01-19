window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
        window.web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/06fc4b3373b0417aa953cf04d2a1df2d"));
    }
})

async function getInfo(i) {
    var arrValue=new Array();   // return할 배열
    var arrWithdraw=new Array();    // 출금
    var arrDeposit=new Array();     // 입금

    //게좌 번호 사용하는 구간
    var address = '0x2BeCfAA2Bd22D479DB83070BCDAEee407b2ada18';
    var balance;
    web3.eth.getBalance(address, function(error, wei){
        if(!error){
            balance = web3.utils.fromWei(wei, 'ether');
            //document.getElementById("output").innerHTML = balance + "ETH" + "<br>";
        }
    });

    //transaction hash 이용하는 구간
    var address, Thash, result
    var test_value, test_price, all_gas, test_gas, test_gasPrice, all_price,test_to, test_from
    
    //10개의 트랜잭션 해쉬
    var Thash = [];

    Thash[0] = '0xe828778eb6e6a5e3226b6558b78d65222745089a501523875bba73d133f46950';
    Thash[1] = '0xd2ec2b06a52dfedecbaadceedbec2caeb87bdc896a59a21065e726b4238455d0';
    Thash[2] = '0xb19237f2a8da3c04674db1fe1b77a738c4c23dceb6a8bd172125312ffa2c5fe1';
    Thash[3] = '0xf1b74e6f1b44e10afb5fca9cf4c731e736fc96fd2e519bbac7a57ae29dca15fc';
    Thash[4] = '0x486a1c90c91624c74277be548327267ffccc9a000fbb73eed831545d619340ef';
    Thash[5] = '0x0ac8235ad93e3359cbca7bb8fca5568dfd36b809997d11326742204cdf663579';
    Thash[6] = '0x5d01ddf5e5f85312445579127cccce82e808324fb659768d5d8412cf302cfb6f';
    Thash[7] = '0x46f42d05192e4c561a9b4b70c1f3c09913ad469443c235223bc9cf4ab246273a';
    Thash[8] = '0x7fb3d34ab92d9b2a3bb9e93d940ad4e9d8539138d72c1e9ddef431d3ba7a166a';
    Thash[9] = '0x76dc6a9db35381345b344d6ac7374e47df4aae21a611c305290460eebbc0f4cb';
    Thash[10] = '0x14e79882dbe8a2b01eaeec21449121d0b795aeca285c6002957047eba8b3a9fa';
    Thash[11] = '0xf3e65f5221a025de28076dce5e2b38a9bb853eb604726bee6152ccfbde184bf4';
    Thash[12] = '0xa42e058966057930357586887c16195b581708432ea344e9c49964095a508e78';
    Thash[13] = '0xae4e770fcd130cde2d185d608c8fd18b9b3216416b87a48333b8cd004abfcfa8';
    Thash[14] = '0xe2dcedcbd501e9592ab19f892e1b5d41a82211bbda3bf8c218c7224f4d6adf5d';
    Thash[15] = '0x4d763ed0863731bab89837a12d03e610b1eb41889d237a878ca639d24534e8bb';
    Thash[16] = '0x4b15f1343c0e5441552f382307f81a61592489a85102fb1a4577af85d4ef00ea';
    Thash[17] = '0x1adbc149f1f84af4203ee06367b8bcc266ca7e3e5136391d417f1c729670c3a8';
    Thash[18] = '0x0e792cbf8ed55f2ec36c97d66e7e7040c3366c9a8c1c6d22310d98670a6ab03d';
    Thash[19] = '0x88d0bdf227663d00abdae71eeb9c95b0e8c081bddc61a13981d01c4c29ab1e66';

    // 2차원 배열로 변경
    // function createArrayE(rows, columns){
    //     var arr = new Array(rows);
    //     for(var i=0; i<rows; i++){
    //         arr[i]=new Array(columns);
    //     }
    //     return arr;
    // }
    // arrValue = createArrayE(Thash.length, 5);
    // arrDeposit = createArrayE(Thash.length, 5);
    // arrWithdraw = createArrayE(Thash.length, 5);

    //for(var i=0; i<Thash.length; i++){
        var receipt = await web3.eth.getTransaction(Thash[i]);

        //입금 : value만 따로 띄우기.
        test_value = receipt.value;
    
        //출금 : value + gas * gasPrice
        //all_gas : gas * gasPrice
        test_gas = receipt.gas;
        test_gasPrice =  receipt.gasPrice;
        all_gas = test_gas * test_gasPrice;
    
        all_price = receipt.gas + all_gas;
    
        test_price = all_price;
    
        //주는 사람 : from
        test_from = receipt.from;
    
        //받는 사람 : to
        test_to = receipt.to;

        //timeStamp 구하는 곳
        var Bnumber = receipt.blockNumber; 
        var reb = await web3.eth.getBlock(Bnumber);
        
        var bbbb, timeS;
        bbbb = reb.timestamp;
                
        Unix_timesStamp(bbbb);
        
        //timeStamp 형식 : 유닉스
        //유닉스 형태를 일반적인 형태로 바꿔주는 곳
        function Unix_timesStamp(t){
            var date = new Date(t*1000);
            var year = date.getFullYear();
            var month = "0" + (date.getMonth() + 1);
            var day = "0" + date.getDate();
            var hour = "0" + date.getHours();
            var minute = "0" + date.getMinutes();
            var second = "0" + date.getSeconds();
        
            timeS = year + "-" + month.substr(-2) + "-" + day.substr(-2) + " " + hour.substr(-2) + ":" + minute.substr(-2) + ":" + second.substr(-2);
            return timeS;
        }

        // ========================== 값 보내기  ===================================
        function Withdraw(){    // 출금 함수
            arrValue[0]="withdraw";
            arrValue[1]=test_price;     // 출금 금액
            arrValue[2]=test_to;        // 받는 사람
            arrValue[3]=balance;        // 잔액, 이더값
            arrValue[4]=timeS;        // 날짜
            arrValue[5]=i;              // 트랜잭션 수
            // return arrWithdraw;
        }
        function Deposit(){     // 입금 함수
            arrValue[0]="deposit"; 
            arrValue[1]=test_value;     // 입금 금액
            arrValue[2]=test_from;      // 주는 사람
            arrValue[3]=balance;        // 잔액, 이더값
            arrValue[4]=timeS;        // 날짜
            arrValue[5]=i;              // 트랜잭션 순서
            // return arrDeposit;
        }
        //출력            
        if(address == test_to){
            //입금내역
            Withdraw();  
        }
        else {
            //출금내역
            Deposit();
        }
        return arrValue;
        // ========================== 값 보내기 END ===================================
    //}
    // for(var k=0; k<10; k++){
    //     for (var z=0; z<5; z++)
    //     console.log(arrValue[k][z]);
    // }
    
    

}
