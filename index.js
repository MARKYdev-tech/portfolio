const cards = document.querySelectorAll(".about-col-1")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-up", entry.isIntersecting)
    })
},
{
       threshold: 0.5,                                       
}
)


cards.forEach(cards => {
    observer.observe(cards)
})


  
