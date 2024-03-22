(function($){
  // Nav bar toggle
  $('#main-nav-toggle').on('click', function(){
    $('.nav-container-inner').slideToggle();
  });

  // Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }

  $('.datatable').dataTable( {
          "order": [[ 0, "desc" ]],
          "iDisplayLength": -1,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    } );

  //Back to top
  $("#back-to-top").on('click', function(){
    $('body,html').animate({scrollTop:0}, 600);
  });
})(jQuery);
