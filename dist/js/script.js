jQuery(document).ready(function(e){
	var $ = jQuery;
	jQuery('#fixed-navbar').scrollToFixed({
		preFixed: function() { jQuery(this).css('box-shadow', '0px 1px 1px #888').find('.navbar-brand').css('display', 'inline'); },
		postFixed: function() { jQuery(this).css('box-shadow', '0px 2px 2px #888').find('.navbar-brand').css({display:'none'}); }
	});

	hljs.configure({useBR: false});

	jQuery('pre,code').each(function(i, block) {
		if($(block).attr('class').match('lang')){
			var x = $(block).attr('class').split(' ')
			console.log( x )
		}
		hljs.highlightBlock(block);
		console.log(block)
	});

});