(function($, jQuery) {
    $.fn.feedback = function( options ) {
        // Merge options with defaults
        $.fn.feedback.options = $.extend({}, $.fn.feedback.defaults, options);
        $.fn.feedback.createFeedbackButton();
    };

    $.fn.feedback.options = {};

    $.fn.feedback.createFeedbackButton = function() {
        var feedbackButton,
            renderTo;

        feedbackButton = $('<button>');
        feedbackButton.html($.fn.feedback.options.button.inactive);
        feedbackButton.val($.fn.feedback.options.button.inactive);
        feedbackButton.css('position', 'fixed');
        feedbackButton.css('right', '5px');
        feedbackButton.css('top', '5px');
        
        renderTo = $.fn.feedback.options.button.renderTo;
        $(renderTo).append(feedbackButton);
        
    };

    $.fn.feedback.defaults = {
        button: {
            inactive: 'Give feedback',
            active: 'Finish feedback',
            renderTo: 'body'
        }
    };
})(jQuery, jQuery);