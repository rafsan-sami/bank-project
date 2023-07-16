//login button event hendelar
    const loginBtn = document.getElementById('login');
        loginBtn.addEventListener('click', function(){
        const loginArea = document.getElementById('login-area');
        loginArea.style.display = "none";
        const transectionArea = document.getElementById('transection');
        transectionArea.style.display = 'block';
    })

//deposit button event handler

    const depositInput = document.getElementById('depositBtn');
        depositInput.addEventListener("click", function(){
            // const amountHere = document.getElementById('depositAmount').value;
            // const dipositNumber = parseFloat(amountHere);

            // const currentDepositAmount = document.getElementById('currentDeposit').innerText;
            // const currentDepositNumber = parseFloat(currentDepositAmount);
            // const totalDeposit = dipositNumber + currentDepositNumber;
            // console.log(totalDeposit);
            // document.getElementById('currentDeposit').innerText = totalDeposit;

            const dipositNumber = getInputNumber('depositAmount');

            updateSpanText('currentDeposit', dipositNumber);
            updateSpanText('currentBlance', dipositNumber);
            
            document.getElementById('depositAmount').value = "";
        })


        //withdraw button handler

        const withdrawInput = document.getElementById('withdrawBtn');
        withdrawInput.addEventListener('click', function(){
            const withdrawNumber = getInputNumber('withdrawAmount');
            
            updateSpanText('currentWithdraw', withdrawNumber);
            updateSpanText('currentBlance', -1 * withdrawNumber);

            document.getElementById('withdrawAmount').value = "";
        })

        function getInputNumber(id) {
            const amountHere = document.getElementById(id).value;
            const amountNumber = parseFloat(amountHere);
            return amountNumber;
        }


        function updateSpanText(id, dipositNumber) {
            const currentAmount = document.getElementById(id).innerText;
            const currentNumber = parseFloat(currentAmount);
            const totalDeposit = dipositNumber + currentNumber;
            document.getElementById(id).innerText = totalDeposit;
        }