$(document).ready(() => {
    $('.slide-show__additional').click(function() {
        // TODO: нельзя повторно сделать изначальный элемент классом.
        let additionalImageClass = $(this).attr('class');
        let additionalImage = $(this);
        let mainImage = $(this).parent().find('.slide-show__main');

        mainImage.removeClass();
        additionalImage.removeClass();

        // mainImage.addClass(additionalImageClass);        
        mainImage.addClass(additionalImageClass);        
        additionalImage.addClass('slide-show__main');
        console.log(mainImage.parent());
        // console.log($(mainImage));
    });
});