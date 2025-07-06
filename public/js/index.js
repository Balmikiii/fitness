document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    //   banner section
    gsap.from(".app_banner", {
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });

    //   services seection
    gsap.from(".our-services", {
        scrollTrigger: {
            trigger: ".our-services",
            scroller: "body",
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });

    //   teams
    gsap.from(".team .row div", {
        scrollTrigger: {
            trigger: ".team",
            scroller: "body",
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });

    //   testimonial
    gsap.from(".testimonial", {
        scrollTrigger: {
            trigger: ".testimonial",
            scroller: "body",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });
  
    //   clearmind
    gsap.from(".clearmind img", {
        scrollTrigger: {
            trigger: ".clearmind",
            scroller: "body",
            start: "top 50%",
            toggleActions: "play none none none",
            once: true,
        },
        scale: 1.5,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });

    //   community
    gsap.from(".community", {
        scrollTrigger: {
            trigger: ".community",
            scroller: "body",
            start: "top 50%",
            toggleActions: "play none none none",
            once: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });

    //   community
    gsap.from(".get_touch", {
        scrollTrigger: {
            trigger: ".get_touch",
            scroller: "body",
            start: "top 70%",
            toggleActions: "play none none none",
            once: true,
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });

    // // freq_question
    gsap.from(".freq_question a",{
        scrollTrigger: {
            trigger: ".freq_question",
            scroller: "body",
            start: "top 50%",
            // toggleActions: "play none none none",
            once: true,
        },
        opacity:0,
        stagger: 0.5,
        y: 10,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    });
});
