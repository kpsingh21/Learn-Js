const clock = document.getElementById('clock')


// let date = new Date()
// console.log(date.toLocaleTimeString());  it will reamin fix as it is clock we need to run this code every time

// setInterval(function(){}, milliseconds);

setInterval( function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)