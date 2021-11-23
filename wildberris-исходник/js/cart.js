const cart = function () {
    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeBtn = cart.querySelector('.modal-close')

    console.log(cart);

    cartBtn.addEventListener('click', function () {
        // console.log('click')
        cart.style.display = 'flex'
    })

    closeBtn.addEventListener('click', function () {
        // cart.style.display = 'none'
        cart.style.display = ''
    })
}

cart()

// Инкапсуляция кода ↑ Теперь в др. ф-ции можно создавать переменными с такими же названиями.

// Метод querySelector пробегает по всей вёрстке и собирает все элементы 
// с определённыи селектором.
// const cart = document.querySelector('#modal-cart')
// В случае с getElementById работаем с идентификаторами (они уникальные, 
// в единственном числе). Находит первый элемент в вёрстке и дальше не ищет.
// Работает только в условиях document.

// console.log(cartBtn);
// console.dir(cartBtn);

// .onclick -- св-во объекта, может нести в себе только 1 зачение, 1 ф-цию.
// cartBtn.onclick = function () {
//     console.log('click')
// }

// cartBtn.addEventListener('click', function () {
//     console.log('click1')
// })