// Challenge: Create a function that takes a phone number as input and checks whether it is a valid Bangladeshi phone number. The function can return a boolean value, an object, or a string indicating the result of the validation.

// Users iccha moto jekono kichu dite pare, se +880 diye start korte pare, se country code na diyeo start korte pare 018.. 017 diye. se 11 digit er kom ba beshi dite pare. so all things should be taken into consideration.

const number = +8801609729909;
function validNumber(number){
    if(!typeof number == 'number'){
        return 'Pleace Enter A Valid Number'
    }
    const allOperator = ['19','18','17','15','16','13'];
    const numberStr = number.toString()
    const bangladeshCode = numberStr.slice(0,2)
    const onlyNumber = numberStr.slice(3);
    if(numberStr.length === 13){
        if(numberStr.startsWith('880')){
            let result = 'Invalid Operaotr'
            for(let operatorNumber of allOperator){
                if(onlyNumber.startsWith(operatorNumber)){
                    result = 'It\'s A Valid Bnagladeshi Number';
                }
            }
            return result;
        }
        else{
            return 'Invalid Country Code'
        }
    }
    else{
        return 'Invalid Number'
    }
}
console.log(validNumber(number));

// const length = number.toString();
// console.log(length.length);