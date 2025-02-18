const cards = document.querySelectorAll(".about-col-1")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-up", entry.isIntersecting)
    })
})


cards.forEach(cards => {
    observer.observe(cards)
})


  