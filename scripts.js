$(document).ready(function(){
function animateSkills() {
        $('.progress-bar').each(function() {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (elementPos < topOfWindow + windowHeight - 50) {
                var width = $(this).attr('data-width');
                $(this).css('width', width);
            }
        });
    }
    animateSkills();
    $(window).scroll(function() {
        animateSkills();
    });

    $('.f-header').click(function() {
        var $item = $(this).parent('.f-item');
        var $content = $(this).next('.f-content');
        if ($item.hasClass('active')) {
            $item.removeClass('active');
            $content.css('max-height', '0');
            $content.css('padding-top', '0');
            $content.css('padding-bottom', '0');
        } else {
            
            $item.addClass('active');
            $content.css('max-height', $content.prop('scrollHeight') + 40 + 'px'); // 40px padding compensé
            $content.css('padding-top', '1.2rem');
            $content.css('padding-bottom', '1.2rem');
        }
    });
   $(document).on('click', '#btn-envoyer', function() {
        
        const nom = $('#nom').val().trim();
        const email = $('#email').val().trim();
        const message = $('#message').val().trim();

        let estValide = true;

        $('.input').css('border-color', 'var(--primary-color)');

        
        if (nom === "") {
            $('#nom').css('border-color', '#ff4d4d');
            estValide = false;
        }

        if (email === "" || !email.includes('@')) {
            $('#email').css('border-color', '#ff4d4d');
            estValide = false;
        }

        if (message === "") {
            $('#message').css('border-color', '#ff4d4d');
            estValide = false;
        }

        if(estValide){
            $('.input').css('border-color', 'var( --accent-primary)');
            $('.input').val('');
        }

        
    });
});