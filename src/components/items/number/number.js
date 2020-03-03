$(document).ready(function() {
    $(".number__dot").click(function() {
        
        let dot = $(this);
        let dots = dot.parent().find('.number__dot');
        let parent = $(this).parents();
        let slides = parent.find('.number__photo');

        let active = dot.data().value;
        for (i = 0; i < slides.length; i++) {
            let slide = $(slides[i]);
            slide.addClass('hidden');
            if(slide.data().value == active) {
                slide.removeClass('hidden');
            }
        }

        for (i = 0; i < dots.length; i++) {
            dot = $(dots[i]);
            if(dot.data().value != active) {
                dot.removeClass('active');
            } else {
                dot.addClass('active');
            }
        }
    });
}); 
