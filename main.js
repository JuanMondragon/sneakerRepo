TweenMax.defaultEase = Linear.easeOut;


new fullpage('#fullpage', {
    autoScrolling:true,
    navigation: false,
    slidesNavigation: true,
    controlArrows:false,
    scrollingSpeed:1000,
    anchors:['section1', 'section2', 'section3'],
    onLeave: (origin, destination,direction) =>{
        const section = destination.item;
        const title = section.querySelector('h1');
        const tl = new TimelineMax({delay: 0.5 });
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, {y:"0", opacity:1});

       

        if (destination.index === 2) {
            const banner = document.querySelectorAll(".banner")
           
            tl.fromTo(
                banner, 0.6, {
                    x: "100%"
                }, {
                    x: '0%'
                })
                .fromTo(
                    banner, 0.5, {
                        y: '50',
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1
                    }
                )


        }
        
        if(destination.index === 1) {
            const slides = document.querySelectorAll(".slide");
            const img = document.querySelector(".firstImg");
            tl.fromTo(slides, 0.7, {x:"100%"},{x:'-0%'})
            .fromTo(
                img,
                0.5,
                {y:'50', opacity: 0},
                {y:0, opacity:1}
            )
            }

            if(destination.index === 0) {
                
                const p1 = document.querySelector(".first-p");
                tl.fromTo(p1, 0.7, {x:"100%"},{x:'-0%'})
                .fromTo(
                    p1,
                    0.5,
                    {y:'50', opacity: 0},
                    {y:0, opacity:1}
                )
                }
        
    




    

    
    }
})


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


