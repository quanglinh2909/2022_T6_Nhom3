(function($) {
    $.fn.Accordion = function(options) {
        var $el = $(this);
        var defaults = {
            active: 'open',
            el_wrap: 'li',
            el_content: 'ul',
            accordion: true,
            expand: true,
            btn_open: '<i class="fa fa-plus-square-o"></i>',
            btn_close: '<i class="fa fa-minus-square-o"></i>'
        };
        var options = $.extend({}, defaults, options);
        $(document).ready(function() {
            $el.find(options.el_wrap).each(function() {
                $(this).find('> a, > span, > h4').wrap('<div class="accr_header"></div>');
                if (($(this).find(options.el_content)).length) {
                    $(this).find('> .accr_header').append('<span class="btn_accor">' + options.btn_open + '</span>');
                    $(this).find('> ' + options.el_content + ':not(".accr_header")').wrap('<div class="accr_content"></div>');
                }
            });
            if (options.accordion) {
                $('.accr_content').hide();
                $el.find(options.el_wrap).each(function() {
                    if ($(this).hasClass(options.active)) {
                        $(this).find('> .accr_content').addClass(options.active).slideDown();
                        $(this).find('> .accr_header').addClass(options.active);
                    }
                });
            } else {
                $el.find(options.el_wrap).each(function() {
                    if (!options.expand) {
                        $('.accr_content').hide();
                    } else {
                        $(this).find('> .accr_content').addClass(options.active);
                        $(this).find('> .accr_header').addClass(options.active);
                        $(this).find('> .accr_header .btn_accor').html(options.btn_close);
                    }
                });
            }
        });
        $(window).load(function() {
            $el.find(options.el_wrap).each(function() {
                var $wrap = $(this);
                var $accrhead = $wrap.find('> .accr_header');
                var btn_accor = '.btn_accor';
                $accrhead.find(btn_accor).on('click', function(event) {
                    event.preventDefault();
                    var obj = $(this);
                    var slide = true;
                    if ($accrhead.hasClass(options.active)) {
                        slide = false;
                    }
                    if (options.accordion) {
                        $wrap.siblings(options.el_wrap).find('> .accr_content').slideUp().removeClass(options.active);
                        $wrap.siblings(options.el_wrap).find('> .accr_header').removeClass(options.active);
                        $wrap.siblings(options.el_wrap).find('> .accr_header ' + btn_accor).html(options.btn_open);
                    }
                    if (slide) {
                        $accrhead.addClass(options.active);
                        obj.html(options.btn_close);
                        $accrhead.siblings('.accr_content').addClass(options.active).stop(true, true).slideDown();
                    } else {
                        $accrhead.removeClass(options.active);
                        obj.html(options.btn_open);
                        $accrhead.siblings('.accr_content').removeClass(options.active).stop(true, true).slideUp();
                    }
                    if($(this).parent().parent().hasClass('li-special'))
                    {
                        if($(this).parent().hasClass('open'))
                            $('#mmenu .big-submenu-title').css('display', 'block');
                        else
                            $('#mmenu .big-submenu-title').css('display', 'none');
                    }
                    return false;
                });
            });

            $('body').find('table').addClass('table-responsive');
        });
    };




    $( "#inputDate" ).datepicker({
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        changeYear: true,
        showOtherMonths: true,
            selectOtherMonths: true,
            monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng  9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        dayNamesMin: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng  9', 'Tháng 10', 'Tháng 11', 'Tháng 12']
    });
     
    $('#menu_offcanvas').html($('#dmenu').html());            
    $('#mmenu').find('li > .wrap_submenu > ul').unwrap();
    $('#menu_offcanvas').Accordion({
        accordion: false,
        expand: false,
        el_content: 'ul, .wrap_submenu',
        btn_open: '<i class="fa fa-plus"></i>',
        btn_close: '<i class="fa fa-minus"></i>'
    });
    $('#mmenu .btn2.offcanvas').on('click', function() {
        if ($('#menu_offcanvas').hasClass('active')) {
            $(this).find('.overlay').fadeOut(250);
            $('#menu_offcanvas').removeClass('active');
            $('body').removeClass('show-sidebar show-menumobile');
        } else {
            $('#menu_offcanvas').addClass('active');
            $(this).find('.overlay').fadeIn(250);
            $('body').addClass('show-sidebar show-menumobile');
        }
    });

    $('#user-wrap li:first').hover(function() {
        $('.user-login').addClass('hover-login');
    }, function() {
        /* Stuff to do when the mouse leaves the element */
        $('.user-login').removeClass('hover-login');
    });
    $('#user-wrap li:first').click(function(event) {
        /* Act on the event */
        $('.user-login').addClass('hover-login');
    });


})(jQuery);; 