/**
 * @file
 * Javascript for Field Example.
 */

/**
 * Provides a farbtastic colorpicker for the fancier widget.
 */


(function ($) {
  Drupal.behaviors.field_ranking_colorpicker = {
    attach: function(context) {
                $('select').change(function(){
                    // start by setting everything to enabled
                        $('#rank-select option').attr('disabled',false);
                   // loop each select and set the selected value to disabled in all other selects
                        $('select').each(function(){
                           var $this = $(this);
                  $('select').not($this).find('option').each(function(){
                              if($(this).attr('value') == $this.val() && $(this).attr('value') != 0)
                                 $(this).attr('disabled',true);
                              });
                          });
                 });
    }
  }
})(jQuery);
