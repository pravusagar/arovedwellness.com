{
  document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('.splide', {
      type: "fade",
      rewind: true,
      autoplay: true,
      interval: 5200,
      arrows: false,
      speed: 3000,
      pauseOnHover: false,
    }).mount();

    splide.on('moved', function (newIndex) {
      updateHeadingWithAnimation(newIndex);
    });

    function updateHeadingWithAnimation(index) {
      var data = [
        { main: 'Aroved Wellness', sub: 'Subtitle 1' },
        { main: 'Another Heading', sub: 'Subtitle 2' },
        { main: 'Yet Another Heading', sub: 'Subtitle 3' },
        { main: 'Yet Another Heading', sub: 'Subtitle 4' },
        // Add more data as needed
      ];

      var mainHeading = document.querySelector('.main-heading');
      var subHeading = document.querySelector('.bottom-2nd-head');

      if (mainHeading && subHeading) {
        // Use GSAP for animations
        gsap.to(mainHeading, {
          text: { value: "", chars: "all", stagger: 0.2, ease: "power4.out" },
          duration: 0.5,
          onComplete: function () {
            gsap.to(mainHeading, {
              text: { value: data[index].main, chars: "all", stagger: 0.2, ease: "power4.in" },
              duration: 0.5,
            });
          },
        });
        
        
        
    
        gsap.to(subHeading, {
          text: { value: "", chars: "all", stagger: 0.2, ease: "power4.out" },
          duration: 0.5,
          onComplete: function () {
            gsap.to(subHeading, {
              text: { value: data[index].main, chars: "all", stagger: 0.2, ease: "power4.in" },
              duration: 0.5,
            });
          },
        });
      }
    }




    var newSplide = new Splide(".splide-new", {
      perPage: determinePerPage(),
      type: "loop",
      focus: 0,
      omitEnd: true,
      autoplay: true,
      interval: 3000,
      pagination: false,
      pauseOnHover: false,
      arrows: true,
    });

    newSplide.mount();
    function determinePerPage() {
      //  Check the screen width and return the appropriate perPage value
      if (window.innerWidth < 768) { //   Adjust this breakpoint as needed
        return 1;  //  Set perPage to 1 for mobile screens
      } else {
        return 4;  //  Set perPage to a different value for larger screens
      }
    }
    window.addEventListener("resize", function () {
      newSplide.options.perPage = determinePerPage();
      newSplide.destroy();   // Destroy the current instance
      newSplide.mount();   // Reinitialize the Splide slider with updated options
    });



  });
}

{
  // WHATSAPP DETAILS
  document.querySelector('.whatsapp-float').addEventListener('click', function() {
    window.open('https://api.whatsapp.com/send?phone=917008822838', '_blank');
});
}
