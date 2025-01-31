const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')
//const btn2 = document.getElementsByClassName('button') //  it provide HTML  collection forEach not  available

buttons.forEach(function (btn) {
    // console.log("btn",btn)
    btn.addEventListener("click", function (e) {
        // console.log(e);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id
        }
        // try with switch cases:
        const color = e.target.id; // Get the button's ID
        switch (color) {
            case "blue":
                // console.log(e);
                body.style.backgroundColor = "blue"
                break;
            case "yellow":
                body.style.backgroundColor = "yellow"
                break;
        }
    })
})