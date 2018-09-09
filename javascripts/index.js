$(function () {
    'use strict';
    var $page = $('#main'),
        options = {
            debug: true,
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 500, // Duration of our animation
                render: function ($container) {
                    //CSS animation reversing class
                    $container.addClass('is-exiting');
                    //console.log('animate');
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {
                    // Remove CSS animation reversing
                    $container.removeClass('is-exiting');
                    // Inject the new content
                    $container.html($newContent);
                }
            }
        },
        smoothState = $page.smoothState(options).data('smoothState');
});
