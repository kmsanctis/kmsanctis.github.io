$(document).ready(function () { 
    checkitem();
});

$('#carouselProfessionalExperience').on('slid.bs.carousel', checkitem);

function checkitem() {
    if ($('.carousel-item:first').hasClass('active')) {
        // Hide left arrow
        $('.carousel-control-prev').hide();
        // But show right arrow
        $('.carousel-control-next').show();
    } else if ($('.carousel-item:last').hasClass('active')) {
        // Hide right arrow
        $('.carousel-control-next').hide();
        // But show left arrow
        $('.carousel-control-prev').show();
    } else {
        // Show both left and right arrow
        $('.carousel-control-prev').show();
        $('.carousel-control-next').show();
    }
}