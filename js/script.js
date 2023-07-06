var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs((slideIndex +=n));
    }

    function showDivs(n) {
        var i;
        var imgList = document.getElementsByClassName("img-slideshow");
        if (n > imgList.length) slideIndex = 1;
        else if (n < 1) slideIndex = imgList.length; 
        for (i = 0; i < imgList.length; i++) {
            imgList[i].style.display = "none";
        }

            imgList[slideIndex - 1].style.display = "block";
        }

        setInterval(() => {
            plusDivs(1);
        }, 1500);

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
    event.preventDefault()
    const nameValue = name.value
    const emailValue = email.value
    const phoneValue = phone.value
    const messageValue = message.value
    validation(nameValue, emailValue, phoneValue, messageValue)
})

function validation(nameValue, emailValue, phoneValue, messageValue) {
    if (nameValue == "") {
        alert('Your name is empty')
    }

    else if (emailValue == "") {
        alert('Your email is empty')
    }

    else if (phoneValue == "") {
        alert('Your phone is empty')
    }

    else if (messageValue == "") {
        alert('Your message is empty')
    }

    else {
        alert("sukses")
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        // updateUI(nameValue, emailValue, phoneValue, messageValue)
    }
}

function updateUI(nameValue, emailValue, phoneValue, messageValue) {
    const nameOutput = document.getElementById("nameOutput")
    const emailOutput = document.getElementById("emailOutput")
    const phoneOutput = document.getElementById("phoneOutput")
    const messageOutput = document.getElementById("messageOutput")

    nameOutput.textContent =nameValue
    emailOutput.textContent =emailValue
    phoneOutput.textContent =phoneValue
    messageOutput.textContent =messageValue
}