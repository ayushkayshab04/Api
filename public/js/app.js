console.log('Client side javascript file is loaded!')

// fetch("http://puzzle.mead.io/puzzle")
//     .then((response) => {
//         response.json().then((data) => {
//             console.log(data)
//         })
//     })




const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const Location = search.value
    fetch(`http://localhost:3000/weather?address=${search.value}`)
        .then((response) => {
            response.json().then((error, data) => {
                if (error) messageOne.textContent(error)
                console.log(data)
            })
        })

})