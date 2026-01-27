const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
console.log(tabImages);

const changeContent = (array, value) => {
    array.forEach((el) => {
        if (el.dataset.tabsField === value) {
            el.classList.remove('hidden')
        } else {
            el.classList.add('hidden')
        }
    })

}

tabButtons.forEach((tabBtn) => {
    // tabBtn.onclick = () => {
    //     console.log('click');
    //     console.dir(tabBtn)

    // }

    tabBtn.addEventListener('click', (event) => {
        const dataValue = tabBtn.dataset.tabsHandler

        changeContent(tabDescriptions, dataValue)

        changeContent(tabImages, dataValue)


        tabButtons.forEach((btn) => {

            if (btn === event.target) {
                btn.classList.add('design-list__item_active')

            } else {
                btn.classList.remove('design-list__item_active')
            }

        })
    })

})
