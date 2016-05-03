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
      $('select[name*="rank-select"').change(function(){
        // start by setting everything to enabled
        $('select[name*="rank-select"] option').attr('disabled',false);
        // loop each select and set the selected value to disabled in all other selects
        $('select[name*="rank-select"]').each(function(){
          var $this = $(this);
          $('select[name*="rank-select"]').not($this).find('option').each(function(){
            if($(this).attr('value') == $this.val())
              $(this).attr('disabled',true);
          });
        });
      });
    }
  }
})(jQuery);
