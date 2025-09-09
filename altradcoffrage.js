$(function(){

	// slider/carousel management
	$('.sliderFW.preset--carousel').each(function(index,item){
		setTimeout(function(){
			var slider = $(item).sliderFW('get');
			slider.$el.find('.sliderFW__arrow').appendTo(slider.$el);

			slider.content.items.on('click',function(e){
				if(!$(this).hasClass('active')){
					var index = $(this).index();
					if($(this).index() < slider.content.items.filter('.active').index())
						slider.goToPrev();
					else
						slider.goToNext();
				}
			});
			slider.onResize();
		},1);
	});

	// slide pages management
	$('.mod_article.slide').each(function(){
		$(this).children().not('.slide__img').wrapAll('<div class="slide__content"></div>');
		if($(this).hasClass('txt-pack'))
			$(this).find('.slide__content .ce_text').wrapAll('<div class="slide__content__pack"></div>');
		if($(this).hasClass('counter-pack'))
			$(this).find('.slide__content .countUpFW').wrapAll('<div class="slide__content__pack"></div>');
		$(this).addClass('active');
	});
	$('body.slides').addClass('active');


	$('.mod_wem_portfolio_filters form').find('select,input').on('change',function(){
		this.closest('form').submit()
	})
});