$(document).ready(() => {
    $('.form__book').click(function() {
        let text = `<div class="form"> <img class="form__paw" src="img/paw.svg">
            <div class="form__clear">clear</div>
            <div class="booking__title">Спасибо за заявку! </div>
            <div class="form__text">Мы свяжимся с вами в ближайшее время</div>
            <div class="booking__button">
            <div class="button button_red">
                <p class="button__text">Ок</p>
                <div class="button__pets button__pets_white"></div>
            </div>
            </div>
        </div>`

        $('.booking').html(text);
    });

    $('.book-on').click(function() {
        $('#overlay').css('display', 'block');
    });
});

$(document).on('click', '.form__clear', function() {
    $('#overlay').css('display', 'none');
});
$(document).on('click', '.booking__button', function() {
    $('.booking').html('');
    $('#overlay').css('display', 'none');
});

