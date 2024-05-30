$(document).ready(function() {
    $("#mobile-btn").click(function(){
        $("#mobile-menu").toggleClass("active");
        $("#mobile-btn i").toggleClass("fa-x");
    });

    let anoAtual = new Date().getFullYear();
    $('#anoAtual').text(anoAtual);

    $('.nav-scroll').on('click', function(event) {
        event.preventDefault();

        // Get the target section's id
        const targetId = $(this).attr('href');
        const targetSection = $(targetId);

        // Calculate the new scroll position
        const offset = 200;
        const scrollPosition = targetSection.offset().top - offset;

        // Scroll to the new position
        $('html, body').animate({
            scrollTop: scrollPosition
        }, 30);
    });

    const sections = $("section");
    const navItems = $(".nav-item");

    $(window).on("scroll", function(){
        const header = $("header");
        let scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0){
            header.removeClass('box-shadow-header');
        }else{
            header.addClass('box-shadow-header');
        }

        scrollPosition  = scrollPosition + 350;
        sections.each(function(i){
            const section = $(this);
            const sectionId = section.attr('id');
            let sectionTop = section.offset().top - 96;
            let sectionBottom = sectionTop + section.outerHeight();

            console.log(sectionId);
            if(sectionId == 'consulta-gratuita'){
                sectionBottom = sectionTop + section.outerHeight() + 150;
                sectionTop = section.offset().top - 150;
            }

            if(scrollPosition >= sectionTop && 
                scrollPosition < sectionBottom){

                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });
});


function togglePanel(element) {
    const body = element.nextElementSibling;
    body.classList.toggle('active');
}