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
      $(".edit-field-ranking-colorpicker").live("focus", function(event) {
        var edit_field = this;
        var picker = $(this).closest('div').parent().find(".field-ranking-colorpicker");
        
        // Hide all color pickers except this one.
        $(".field-ranking-colorpicker").hide();
        $(picker).show();
        $.farbtastic(picker, function(color) {
          edit_field.value = color;
        }).setColor(edit_field.value);
      });
    }
  }
})(jQuery);
