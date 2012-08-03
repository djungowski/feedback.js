(function($, jQuery) {
    $.fn.feedback = function( options ) {
        // Merge options with defaults
        $.fn.feedback.options = $.extend({}, $.fn.feedback.defaults, options);
        $.fn.feedback.createFeedbackButton();
    };

    $.fn.feedback.active = false;

    $.fn.feedback.options = {};

    $.fn.feedback.createFeedbackButton = function() {
        var feedbackButton;

        feedbackButton = $('<button>');
        feedbackButton.attr('id', $.fn.feedback.options.button.id);
        feedbackButton.html($.fn.feedback.options.button.inactive);
        feedbackButton.val($.fn.feedback.options.button.inactive);
        feedbackButton.css('position', 'fixed');
        feedbackButton.css('right', '5px');
        feedbackButton.css('top', '5px');

        feedbackButton.bind('click', function(event) {
            if ($.fn.feedback.active) {
                $.fn.feedback.active = false;
                feedbackButton.html($.fn.feedback.options.button.inactive);
                feedbackButton.val($.fn.feedback.options.button.inactive);
                $(document).unbind('click', $.fn.feedback.documentClickHandler);
            } else {
                $.fn.feedback.active = true;
                feedbackButton.html($.fn.feedback.options.button.active);
                feedbackButton.val($.fn.feedback.options.button.active);
                $(document).bind('click', $.fn.feedback.documentClickHandler);
            }
        });
        
        $($.fn.feedback.options.button.renderTo).append(feedbackButton);
        
    };

    $.fn.feedback.documentClickHandler = function(event) {
        console.log(event.clientX);
        console.log(event.clientY);
        console.log(event.target);
    };

    $.fn.feedback.defaults = {
        button: {
            id: 'djungowski-feedback-button',
            inactive: 'Give feedback',
            active: 'Finish feedback',
            renderTo: 'body'
        }
    };
})(jQuery, jQuery);