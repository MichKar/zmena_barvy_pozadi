document.querySelector("#form").addEventListener("submit", function (e) {
    e.preventDefault()
    body = document.querySelector("body")
    body.style.backgroundColor = e.target.array.value

    if (body.style.backgroundColor === "black") {
        document.querySelector("h1").style.color = "white"
    } else {
        document.querySelector("h1").style.color = "black"
    }

    e.target.array.value = ""
})