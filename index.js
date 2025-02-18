const cards = document.querySelectorAll(".about-col-1")


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-up", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
},
{
       threshold: 0.3,                                       
}
)


cards.forEach(cards => {
    observer.observe(cards)
})


  
const serv = document.querySelectorAll(".serv-span")


const observerr = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slide-down", entry.isIntersecting)
        if (entry.isIntersecting) observerr.unobserve(entry.target)
    })
},
{
    threshold: 0.3,
})


serv.forEach(serv => {
    observerr.observe(serv)
})
  

  
