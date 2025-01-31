const form = document.querySelector('form')
//if you try to get it outside then it will give you empty
//Document object give value in string you need to parse it according to requirement
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function (e) {
    // to prevent default action of forms
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.getElementById('weight').value)

    //  console.log(height,weight);
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid Height"
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        if (bmi > 24.9) {
            results.innerHTML = `<span> Your BMI is ${bmi} and are overweight </span>`;
        } else if (bmi < 18.6) {
            results.innerHTML = `<span> Your BMI is ${bmi} and you are Under Weight</span>`;
        } else {
            results.innerHTML = `<span> Your BMI is ${bmi} and you are BMI is Normal </span>`;
        }
    }
})



//other optimize way 

// const heightValue = Number(height);
// const weightValue = Number(weight);

// if (!heightValue || heightValue < 0) {
//     results.innerHTML = "Please provide a valid height.";
// } else if (!weightValue || weightValue < 0) {
//     results.innerHTML = `Please provide a valid weight: ${weight}`;
// } else {
//     const bmi = (weightValue / ((heightValue * heightValue) / 10000)).toFixed(2);
//     let message = `Your BMI is ${bmi} and `;

//     if (bmi > 24.9) {
//         message += "you are overweight.";
//     } else if (bmi < 18.6) {
//         message += "you are underweight.";
//     } else {
//         message += "your BMI is normal.";
//     }

//     results.innerHTML = `<span>${message}</span>`;
// }