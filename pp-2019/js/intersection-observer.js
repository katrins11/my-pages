observeOnScroll();

function observeOnScroll () {
    var atTop = window.scrollY === 0;
    var sections = document.querySelectorAll(".section-watch");
    console.log('herna');
    //*************** POP UP MODUAL OBSERVER **************//
    var options = {
        root: document.querySelector('#pop-up-modal'),
        rootMargin: '0px',
        threshold: 1.0
    }
  
    function popUpEntries(entries, observer) { 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animation');
                // console.log('entry', entry);
            }
        });
    };
  
    var modualObserver = new IntersectionObserver(popUpEntries, options);
  

    //*************** GENERAL OBSERVER **************//
    var observer = new IntersectionObserver(function name(entries, observer) {
        entries.forEach( function name2 (entry, index) {

            setTimeout ( () => {
                if(atTop){
                    if (entry.intersectionRatio > 0) {
                        entry.target.classList.add('scroll-animation');
                        if(entry.target.classList.contains('scroll-animation')) {
                            observer.unobserve(entry.target);
                        }
                    } 
                }
            }, 250 * index);

            if(!atTop){
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('scroll-animation');
                    if(entry.target.classList.contains('scroll-animation')) {
                        observer.unobserve(entry.target);
                    }
                } 
            }

        }); 
    });

    //*************** START OBSERVING ELEMENT **************//
    sections.forEach(section => {
        observer.observe(section);
        modualObserver.observe(section);
    });
}