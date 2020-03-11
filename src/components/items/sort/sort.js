$(document).ready(function() {

    // Сборка/выпадение списка.
    $(".sort").click(function() {
        $(this).toggleClass("sort__button");;
        $(this).find('.sort__li').toggleClass('sort__none')
    });

    $('.sort__text').click(function() {
        let text = $(this).text();
        let parent = $(this).parents().find($('.sort'))
        let mainText = parent.find('.sort__main').find('.sort__text').text();
        $(this).text(mainText);
        parent.find('.sort__main').find('.sort__text').text(text);
    });
});