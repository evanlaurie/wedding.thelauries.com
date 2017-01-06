<div class="section-header">
	<h3 class="section-title">Engagement Photos</h3>
</div>
<div class="gallery-wrapper">
	<div class="gallery">
		<div class="gallery-sizer"></div>
		<div class="gallery-nav">
			<div class="previous">
  			<i class="icon-left-open-big"></i>
			</div>
			<div class="next">
  			<i class="icon-right-open-big"></i>
			</div>
		</div>
		<div class="gallery-content">
		<?php
			foreach (glob("resources/engagement/*.jpg") as $filename) {
				echo '<div class="gallery-item"><img src="' . $filename .'"/></div>';
			}
		?>
		</div>
		<div class="gallery-credit">
  		<span>Photos by Christine Nguyen | <a target="_BLANK" href="http://olyphotography.com">www.olyphotography.com</a></span>
		</div>
	</div>
</div>
<div class="section-header">
	<h3 class="section-title">Wedding Photos</h3>
</div>
<div class="gallery-wrapper">
	<div class="gallery">
		<div class="gallery-sizer"></div>
		<div class="gallery-nav">
			<div class="previous">
  			<i class="icon-left-open-big"></i>
			</div>
			<div class="next">
  			<i class="icon-right-open-big"></i>
			</div>
		</div>
		<div class="gallery-content">
		<?php
			foreach (glob("resources/wedding/*.jpg") as $filename) {
				echo '<div class="gallery-item"><img src="' . $filename .'"/></div>';
			}
		?>
		</div>
		<div class="gallery-credit">
  		<span>Photos by Kyle Evanko | <a target="_BLANK" href="http://www.leluxehawaii.com">www.leluxehawaii.com</a></span>
		</div>
	</div>
</div>