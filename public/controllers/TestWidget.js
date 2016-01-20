function phantomCoverMouseEnter(e) {
	var widget = e.target,
		phantomCover = $(widget).children('.phantomCover');

	// if (e.type !== 'mouseenter') {
	// 	debugger;
	// }

	// $( phantomCover ).slideToggle( "slow", function() {
	//   	// Animation complete.
	// });

	if (e.type === 'mouseenter') {
	    $( phantomCover ).addClass('is-visible');
	} else {
	    $( widget ).removeClass('is-visible');
	} 
}

function testWidget($) {
	$('#widgetOne').mouseenter(phantomCoverMouseEnter);
	$('#widgetOne').mouseleave(phantomCoverMouseEnter);
}

$(testWidget);