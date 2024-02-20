const input = document.getElementById('input_number');
const btn = document.getElementById('submit_btn');
const result = document.getElementById('result');

btn.addEventListener('click', function () {
    const number = parseInt(input.value);

    function validNumber(number) {
        if (!typeof number == 'number') {
            result.innerText = 'Pleace Enter A Valid Number'
        }
        const allOperator = ['19', '18', '17', '15', '16', '13'];
        const numberStr = number.toString()
        const bangladeshCode = numberStr.slice(0, 2)
        const onlyNumber = numberStr.slice(3);

        if (numberStr.length === 13 || numberStr.length == 10) {
            if (numberStr.length === 13) {
                if (numberStr.startsWith('880')) {
                    let check = 'Invalid Operaotor'
                    for (let operatorNumber of allOperator) {
                        if (onlyNumber.startsWith(operatorNumber)) {
                            check = 'It\'s A Valid Bnagladeshi Number';
                            result.style.color = 'green'
                            input.value = '';

                        }
                    }
                    result.innerText = check;
                    if (check == 'Invalid Operaotor') {
                        result.style.color = 'red'
                    }
                }
                else {
                    result.innerText = 'Invalid Country Code'
                    result.style.color = 'red'
                    input.value = '';
                }
            }
            else {
                let check = 'Invalid Operaotor';
                for (let operatorNumber of allOperator) {
                    if (numberStr.startsWith(operatorNumber)) {
                        check = 'It\'s A Valid Bnagladeshi Number'
                        result.style.color = 'green'
                        input.value = '';
                    }
                }
                result.innerText = check;
                if (check == 'Invalid Operaotor') {
                    result.style.color = 'red'
                }
            }

        }
        else {
            result.innerText = 'Invalid Number'
            result.style.color = 'red'
        }
    }
    validNumber(number);
})