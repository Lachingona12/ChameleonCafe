const intersectionObserver = new IntersectionObserver((e) => {
    e.forEach((i) => {
        if (i.isIntersecting) {
            i.target.classList.add("animate")
        }
    })
})

const contentright = document.querySelectorAll(".contentright");
contentright.forEach((el) => intersectionObserver.observe(el))

const contentleft = document.querySelectorAll(".contentleft");
contentleft.forEach((el) => intersectionObserver.observe(el))