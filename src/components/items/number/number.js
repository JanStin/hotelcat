$(document).ready(function() {
    
    $(".number__dot").click(function() {
        
        let dot = $(this);
        let dots = dot.parent();
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
    });
}); 
