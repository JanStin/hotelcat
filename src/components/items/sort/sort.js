$(document).ready(function() {

    // Сборка/выпадение списка.
    $(".sort").click(function() {
        let thisClick =  $(this);
        thisClick.toggleClass("sort__drop");
        thisClick.find('.sort__list').toggleClass('sort__none');
    });

    $('.sort__text').click(function() {
        let text = $(this).text();
        let parent = $(this).parents().find($('.sort'))
        let mainText = parent.find('.sort__main').find('.sort__text').text();
        $(this).text(mainText);
        parent.find('.sort__main').find('.sort__text').text(text);
    });
});