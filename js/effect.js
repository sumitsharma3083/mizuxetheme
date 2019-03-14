$('.mycard').hover(function () {     
         $(this).addClass('bg-primary');
         $('.card-title').addClass('text-white')
         $('.card-text').addClass('text-dark')
         $('.card_description').addClass('text-white')

    }, function () {
        $(this).removeClass('bg-primary');
        $('.card-title').removeClass('text-white')
        $('.card-text').removeClass('text-dark')
        $('.card_description').removeClass('text-white')
    }
);
