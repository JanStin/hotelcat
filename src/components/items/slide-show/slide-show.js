$(document).ready(() => {
    $('.slide-show__js').click(function() {
        if($(this).hasClass('slide-show__main')) {
            return;
        }

        let additionalImageClass = $(this).attr('class');
        let additionalImage = $(this);
        let mainImage = $(this).parent().find('.slide-show__main');

        mainImage.removeClass();
        additionalImage.removeClass();
    
        mainImage.addClass(additionalImageClass);        
        additionalImage.addClass('slide-show__main');
    });
});