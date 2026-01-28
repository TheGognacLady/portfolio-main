const accordeon = document.querySelector('.feature-list')
const accordeonButtons = accordeon.querySelectorAll('.feature__link')
console.log(accordeonButtons);

accordeonButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const isActive = btn.classList.contains('feature__link_active')

        accordeonButtons.forEach((button) => {
            button.classList.remove('feature__link_active')
            button.nextElementSibling.classList.add('hidden')
        })

        if (!isActive) {
            btn.classList.toggle('feature__link_active')
            btn.nextElementSibling.classList.toggle('hidden')
        }

    })
})
