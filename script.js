const nav = document.querySelector('#nav');
window.addEventListener('scroll',(e)=>{
    const offset = nav.getBoundingClientRect().top
    if(offset < 0){
     nav.classList.add('sticky');
     nav.style.position = 'sticky';
     nav.style.top = '0';
    }
})
const mob_nav = document.querySelector('#mob_nav');
function togglenav(){
    mob_nav.classList.toggle('hidden');
}

function hidenav(){
    mob_nav.classList.add('hidden');
}
gsap.from('#span1',{
    opacity : 0,
    duaration : 8,
    ease: "power3.out",
})
gsap.from('#span2',{
    delay : 1,
    opacity : 0,
    duaration : 8,
    ease: "power3.out",
})

gsap.registerPlugin(ScrollTrigger);

gsap.from('#m1', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#m1',
        scroller: document.body, 
        start : 'top 30%',
        end : '100% 70%',
        scrub: 1,
    }
});

gsap.from('#m2', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#m2',
        scroller: document.body, 
        start : 'top 30%',
        end : '100% 70%',
        scrub: 1,
    }
});

gsap.from('#m3', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#m3',
        scroller: document.body, 
        start : '-130% 30%',
        end : '100% 70%',
        scrub: 1,
    }
});

gsap.from('#m4', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#m4',
        scroller: document.body, 
        start : '-150% 30%',
        end : '100% 70%',
        scrub: 1,
    }
});

gsap.from('#m5', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#m5',
        scroller: document.body, 
        start : '-100% 30%',
        end : '100% 70%',
        scrub: 1,
    }
});

const h2 = document.querySelectorAll('#page3 h2');
let clutter = '';
h2.forEach((ele)=>{
    clutter = '';
    let eletext = ele.textContent;
    let elesplit = eletext.split('');
    elesplit.forEach((e)=>{
     clutter += `<span>${e}</span>`
    })
    ele.innerHTML = clutter;
})

document.addEventListener('DOMContentLoaded', () => {
    const h2 = document.querySelectorAll('#page3 h2');

    h2.forEach((ele) => {
        let clutter = '';
        let eletext = ele.textContent;
        let elesplit = eletext.split('');
        elesplit.forEach((e) => {
            clutter += `<span>${e}</span>`;
        });
        ele.innerHTML = clutter;

        
        const spans = ele.querySelectorAll('span');
        spans.forEach((span) => {
            gsap.to(span, {
                color : '#55dd4a',
                duration: 2,
                scrollTrigger: {
                    trigger: span,
                    start: 'top 50%',
                    end: 'top 90%',
                    scrub: 1,
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const h2 = document.querySelectorAll('#page4 h2');

    h2.forEach((ele) => {
        let clutter = '';
        let eletext = ele.textContent;
        let elesplit = eletext.split('');
        elesplit.forEach((e) => {
            clutter += `<span>${e}</span>`;
        });
        ele.innerHTML = clutter;

        
        const spans = ele.querySelectorAll('span');
        spans.forEach((span) => {
            gsap.to(span, {
                color : '#55dd4a',
                duration: 2,
                scrollTrigger: {
                    trigger: span,
                    start: 'top 50%',
                    end: 'top 90%',
                    scrub: 1,
                }
            });
        });
    });
});

gsap.from('#p-1', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#p-1',
        scroller: document.body, 
        start : '-90% 30%',
        end : 'top 70%',
        scrub: 1,
    }
});

gsap.from('#p-2', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#p-1',
        scroller: document.body, 
        start : '-90% 30%',
        end : 'top 70%',
        scrub: 1,
    }
});

gsap.from('#p-3', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#p-1',
        scroller: document.body, 
        start : '-90% 30%',
        end : 'top 70%',
        scrub: 1,
    }
});


gsap.from('#page5 h2',{
   opacity : 0,
   ease: "power3.out",
   scrollTrigger : {
    trigger : '#page5 h2',
    start : 'top 30%',
    end : 'top 70%',
    scrub : true
   }
})

gsap.from('#page5 h1',{
   opacity : 0,
   ease: "power3.out",
   scrollTrigger : {
    trigger : '#page5 h1',
    start : '-200% 20%',
    end : 'top 70%',
    scrub : true
   }
})


document.addEventListener('DOMContentLoaded', () => {
    const h2 = document.querySelectorAll('#page6 h1');

    h2.forEach((ele) => {
        let clutter = '';
        let eletext = ele.textContent;
        let elesplit = eletext.split('');
        elesplit.forEach((e) => {
            clutter += `<span>${e}</span>`;
        });
        ele.innerHTML = clutter;

        
        const spans = ele.querySelectorAll('span');
        spans.forEach((span) => {
            gsap.to(span, {
                color : '#55dd4a',
                duration: 2,
                scrollTrigger: {
                    trigger: span,
                    start: 'top 50%',
                    end: 'top 90%',
                    scrub: 1,
                }
            });
        });
    });
});

gsap.from('#pm1', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm1',
        scroller: document.body, 
        start : '-50% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});
gsap.from('#pm2', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm2',
        scroller: document.body, 
        start : '-100% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});
gsap.from('#pm3', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm3',
        scroller: document.body, 
        start : '-150% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});
gsap.from('#pm4', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm4',
        scroller: document.body, 
        start : '-200% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});
gsap.from('#pm5', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm5',
        scroller: document.body, 
        start : '-250% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});
gsap.from('#pm6', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm6',
        scroller: document.body, 
        start : '-280% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});
gsap.from('#pm7', {
    opacity: 0,
    scrollTrigger: {
        trigger: '#pm7',
        scroller: document.body, 
        start : '-100% 20%',
        end : 'top 70%',
        scrub: 1,
    }
});

const element = document.querySelectorAll('[aria-controls]');
const i = document.querySelectorAll('#page7 i');
element.forEach((ele)=>{
  const controlledId = ele.getAttribute('aria-controls');
  const controlledElement = document.getElementById(controlledId);
  ele.addEventListener('click',()=>{
    controlledElement.classList.toggle('hidden');
    i.forEach((single)=>{
      single.innerHTML = '<i class="ri-arrow-up-s-line"></i>';
    })
  })
  
})
gsap.to('#slider',{
    x : '-720',
    duration : 8,
    ease: "power3.out",
    scrollTrigger : {
        trigger : '#slider',
        scroller : document.body,
        start : '-350% 50%',
        end : '150% 70%',
        scrub : 15,
    }
})
gsap.to('#h2',{
    x : '-620',
    color : '#55dd4a',
    scrollTrigger : {
        trigger : '#h2',
        scroller : document.body,
        start : '20% 20%',
        end : '100% 70%',
        scrub : 5,
        pin : true
    }

})


// for calculate
const invoice = document.querySelector('#invoice');
const month = document.querySelector('#month');
const credit = document.querySelector('#credit');

const crespan = document.querySelector('#crespan');
const inspan = document.querySelector('#in');
const monspan = document.querySelector('#mon');

const rate = document.querySelector('#rate');

invoice.addEventListener('input',(e)=>{
  rate.innerHTML = e.target.value
  inspan.innerHTML = e.target.value
  Calculate();
})
month.addEventListener('input',(e)=>{
    rate.innerHTML = e.target.value
    monspan.innerHTML = e.target.value
    Calculate();
  })
  credit.addEventListener('input',(e)=>{
    rate.innerHTML = e.target.value
    crespan.innerHTML = e.target.value
    Calculate();
  })

  function Calculate(){
    rate.innerHTML = Math.floor(invoice.value * month.value*100  / credit.value)
  }