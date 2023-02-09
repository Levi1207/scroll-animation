gsap.registerPlugin(ScrollTrigger, ScrollSmoother);


if(ScrollTrigger.isTouch !== 1){
    ScrollSmoother.create({
        wrapper:'.wrapper',
        content:'.content',
        smooth: 3,             
        effects: true,           
        smoothTouch: 0.1,
    })

    gsap.fromTo('.hero__section', 
    {
        opacity: 1
    },
    {
        opacity: 0,
        scrollTrigger:{
            trigger:'.hero__section',
            start:'center',
            end: '900',
            scrub:true
        }

    })

    let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')
    itemsL.forEach(item => {
        gsap.fromTo(item, 
    {
        x:-500,
        opacity: 0

    },
    {
        opacity: 1,
        x:0,
        scrollTrigger:{
            trigger:item,
            scrub:true
        }
    })
    });

    let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')
    itemsR.forEach(item => {
        gsap.fromTo(item, 
    {
        x:500,
        opacity: 0

    },
    {
        opacity: 1,
        x:0,
        scrollTrigger:{
            trigger:item,
            scrub:true
        }
    })
    });

    

    
}