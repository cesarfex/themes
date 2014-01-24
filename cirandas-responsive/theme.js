jQuery(function ($) {
  if (cirandas_theme.small_header)
    cirandas_theme.load_small_header();
  else
    cirandas_theme.load_header();

  cirandas_theme.load_navigation();

  cirandas_theme.load_footer();
});


jQuery('document').ready(function(){
    jQuery('.boxes').addClass('row');
    boxes = jQuery('.box');
    switch (boxes.length) {
        case 1:
            break;
        case 2:
            jQuery('.box-2').addClass('col-lg-3 col-md-3 col-sm-4');
            jQuery('.box-1').addClass('col-lg-9 col-md-9 col-sm-8');
            break;
        case 3:
            jQuery('.box-2, .box-3').addClass('col-lg-3 col-md-3 col-sm-4');
            jQuery('.box-1').addClass('col-lg-6 col-md-6 col-sm-4');
            break;
    }
});