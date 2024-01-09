gsap.registerPlugin(ScrollTrigger);
import Atropos from 'https://cdn.jsdelivr.net/npm/atropos@2.0.2/+esm'

const lenis = new Lenis({
    duration: 2.6,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
})

lenis.on('scroll', (e) => {
    document.querySelector('.bg').style.rotate = `${e.progress * 300}deg`
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.to(".image:nth-of-type(1)", {translateY: 500, duration: 20, scrollTrigger: {
    start: 'top 15%',
    end: '+=2000px',
    scrub: 0.5,
}});
gsap.to(".image:nth-of-type(2)", {translateY: -400, duration: 20, scrollTrigger: {
    start: 'top 15%',
    end: '+=2000px',
    scrub: 0.5,
}});
gsap.to(".image:nth-of-type(3)", {translateY: -200, duration: 20, scrollTrigger: {
    start: 'top 15%',
    end: '+=2000px',
    scrub: 0.5,
}});
gsap.to(".image:nth-of-type(4)", {translateY: 500, duration: 20, scrollTrigger: {
    start: 'top 15%',
    end: '+=2000px',
    scrub: 0.5,
}});
gsap.to(".image:nth-of-type(5)", {translateY: -600, duration: 20, scrollTrigger: {
    start: 'top 15%',
    end: '+=2000px',
    scrub: 0.5,
}});
gsap.to(".image:nth-of-type(6)", {translateY: 300, duration: 20, scrollTrigger: {
    start: 'top 15%',
    end: '+=2000px',
    scrub: 0.5,
}});

gsap.to(".arcText", {rotate: -360, scrollTrigger: {
        start: 'top',
        end: 'bottom',
        scrub: 0.5,
    }});
gsap.to(".dot", {scale: 8, scrollTrigger: {
        start: 'top',
        end: 'bottom',
        scrub: 0.5,
    }});


const options = document.querySelectorAll('.my-atropos');

options.forEach(option => {
    const myAtropos = Atropos({
        el: option,
        activeOffset: 40,
        shadow: false,
        highlight: false,
        shadowScale: 1.05,
        rotateXMax: 20,
        rotateYMax: 20,
        onEnter() {
            option.querySelector('h3').style.transform = 'scale(1.15) translateX(-90px)';
            option.querySelector('.container').classList.add('add-border');
        },
        onLeave() {
            option.querySelector('h3').style.transform = 'scale(1) translateX(-90px)';
            option.querySelector('.container').classList.remove('add-border');
        },
    });
});

