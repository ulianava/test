
// let maskOption = {
//     mask: '7 (ххх) ххх хх хх',
//     lazy: false 
// }
// let mask = new IMask(phone, maskOption);

document.addEventListener("DOMContentLoaded", () =>{
    
    const phoneArr = document.querySelectorAll('input[data-tel-input]');
    const getInputNumbersValue = function(input){
        return input.value.replace(/\D/g,'');
    }
    const onPhoneInput = function(e){
        let input = e.target,
            inputValue = getInputNumbersValue(input);
            formattedInputValue = '';
        // not numbers check
            if(!inputValue){
           return input.value = '';
        }
    
        // Russian nnumber 
        if (['7', '8' , '9'].indexOf(inputValue[0]) > -1){
            console.log('ru');
            if (inputValue[0] === '9') inputValue ='7' + inputValue;
            let firstChar = (inputValue[0] === '8') ? '8' : '7';
            formattedInputValue = firstChar + '';
            if(inputValue.length > 1){
                formattedInputValue += "(" + inputValue.substring(1,4)
            }
        } else {
            formattedInputValue = '7' + inputValue.substring(0, 16);
        }
        input.value = formattedInputValue;
        console.log(inputValue)

    }
    for (let i = 0; i < phoneArr.length; i++) {
        let phone = phoneArr[i];
        phone.addEventListener('input', onPhoneInput)
        
    }
    console.log(phoneArr)
})