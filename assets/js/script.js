
function openMenu(){
    burgerIcon.classList.add('active')
    document.body.classList.add("stop-scrolling")
    menu.classList.remove('hide_menu')
}
function closeMenu(){
    burgerIcon.classList.remove('active')
    document.body.classList.remove("stop-scrolling")
    menu.classList.add('hide_menu')
}

/*-----------burger end---------------*/

// Fixed header and active link functionality
let lastScrollTop = 0
const fixedHeader = document.querySelector(".header_fixed")
const navSections = document.querySelectorAll(".nav_section")
const navLinks = document.querySelectorAll(".menu li a")

navLinks.forEach((l)=>{
    l.addEventListener('click',()=>{
        closeMenu()

        setTimeout(async ()=>{
            fixedHeader.style.top = "-85px"

        },1000)
    })
})
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    // Handle fixed header appearance

    if(!burgerIcon.classList.contains("active")){
        if (scrollTop > lastScrollTop) {
            fixedHeader.style.top = "-85px"
        } else {
            fixedHeader.style.top = "0px"
        }
        lastScrollTop = scrollTop
    }


    // Handle active link highlighting
    navSections.forEach(sec => {
        let offset = sec.offsetTop
        let id = sec.getAttribute('id')
        let windowHeight = window.innerHeight

        if (scrollTop >= offset - windowHeight/2) {
            navLinks.forEach(link => {
                link.classList.remove('active')
            });

            let activeLink = document.querySelector(`.menu li a[href*="${id}"]`)
            if (activeLink) {
                activeLink.classList.add('active')
            }
        }
    });
});
const onresize = function(e) {
    if(!window.matchMedia("(max-width: 1024px)").matches && burgerIcon.classList.contains("active")){
        closeMenu()
    }
}
window.addEventListener("resize", onresize);

/*-----------burger start---------------*/
const burgerIcon = document.querySelector('.burger_icon')
const menu = document.querySelector('.menu')

const logo = document.querySelector('.logo_wrapper')
logo.addEventListener('click',()=>closeMenu())
burgerIcon.addEventListener('click',(e)=>{
    if(!e.currentTarget.classList.contains("active")){
        openMenu()
    } else {
        closeMenu()
    }
})