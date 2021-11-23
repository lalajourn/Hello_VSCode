const search = function () {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')
    // const cartBtn = document.querySelector('.button-cart')

    input.addEventListener('input', (event) => {
        console.log(event.target.value)
    })
}

search()