(function($) {
    "use strict";

	// Use data-rotate-[number] to specify a rotatable content, where data-rotate-1="content" will be the content for the second slide,
	// data-rotate-2="content" will be the content for the third slide etc. The current element content is the content of the first slide.
	// You can also specify data-rotate-speed in milliseconds - this is the delay between each slide.
	// You can also specify data-rotate-delay in milliseconds - this is a global delay for the element. Using this, you can offset
	// the rotating effects of the element, relative to other rotating elements on the page.
    window.bindRotator = function() {
        $('[data-rotate-1]').each(function() {
            var $this   = $(this);
            if(true === $this.data('rotator-bound')) {
                return;
            }
            var speed   = !$this.get(0).hasAttribute('data-rotate-speed') || isNaN(parseInt($this.attr('data-rotate-speed'))) ? 5000 : parseInt($this.attr('data-rotate-speed'));
            var delay   = !$this.get(0).hasAttribute('data-rotate-delay') || isNaN(parseInt($this.attr('data-rotate-delay'))) ? 1 : parseInt($this.attr('data-rotate-delay'));
            var cnts    = [$this.html()];
            var eidx    = 1;
            while($this.get(0).hasAttribute('data-rotate-' + eidx)) {
                cnts.push($this.attr('data-rotate-' + eidx));
                eidx++;
            }
            $this.data('rotator-index', 0);
            $this.data('rotator-bound', true);
            setTimeout(function() {
                setInterval(function() {
                    var idx = parseInt($this.data('rotator-index')) + 1;
                    if(idx >= cnts.length) {
                        idx = 0;
                    }
                    var $new    = $this.clone();
                    $new.html(cnts[idx]);
                    $new.data('rotator-index', idx);
                    $new.addClass('hero-show');
                    $this.after($new);
                    $this.remove();
                    $this       = $new;
                }, speed);
            }, delay);
        });
    };
    window.bindRotator();
})(jQuery);