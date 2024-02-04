// Challenge: Create a function that takes a phone number as input and checks whether it is a valid Bangladeshi phone number. The function can return a boolean value, an object, or a string indicating the result of the validation.

// Users iccha moto jekono kichu dite pare, se +880 diye start korte pare, se country code na diyeo start korte pare 018.. 017 diye. se 11 digit er kom ba beshi dite pare. so all things should be taken into consideration.

const number = 16097299090;
console.log(number.toString().length);
function checkNumber(x){
    if(x.toString().length === 11){
        return `It\'s a valid number ${x}`;
    }
    else if(x.toString().length > 11){
        return 'You should enter a valid number';
    }
}
console.log(checkNumber(number));