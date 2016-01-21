function phantomCoverMouseEnter(e) {
    'use strict';
    var widget = e.target,
        phantomCover = $(widget).children('.phantomCover');

    if (e.type === 'mouseenter') {
        $(phantomCover).addClass('is-visible');
    } else {
        $(widget).removeClass('is-visible');
    }
}

function TestWidget($) {
    'use strict';
    $('#widgetOne').mouseenter(phantomCoverMouseEnter);
    $('#widgetOne').mouseleave(phantomCoverMouseEnter);
}

$(TestWidget);