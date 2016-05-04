(function ($) {
    Drupal.behaviors.fieldranking = {
        attach: function(context) {
            $('select[id*="rank-select"]').change(function(){
                // start by setting everything to enabled
                $('select[id*="rank-select"]').find('option').attr('disabled',false);
                // loop each select and set the selected value to disabled in all other selects
                $('select[id*="rank-select"]').each(function(){
                    var $this = $(this);
                    $('select[id*="rank-select"]').not($this).find('option').each(function(){
                        if($(this).attr('value') == $this.val() && $(this).val() != 0) {
                            $(this).attr('disabled',true);
                        }
                    });
                });
            });
        }
    }
})(jQuery);