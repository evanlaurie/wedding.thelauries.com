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
<div id="map">
  <div id="map-canvas"></div>
  <div id="map-panel"></div>
</div>
