const form = document.querySelector(".get-in-touch")


const mask = document.querySelector(".mask-form")


function clickonbutton() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function hiddenbutton() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mask.style.visibility = "hidden"
}