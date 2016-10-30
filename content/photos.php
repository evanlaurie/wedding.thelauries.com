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
	</div>
</div>