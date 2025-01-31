const form = document.querySelector('form')
//if you try to get it outside then it will give you empty
//Document object give value in string you need to parse it according to requirement
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function(e){
 // to prevent default action of forms
 e.preventDefault()
 const height = parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.getElementById('weight').value)

//  console.log(height,weight);
 const results = document.querySelector('#results')

 if( height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid Height"
 }
 else if (  weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight: ${weight}`;
 } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
 }



})