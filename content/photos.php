<div class="gallery-wrapper">
	<div class="gallery">
		<div class="gallery-sizer"></div>
		<div class="gallery-nav">
			<div class="previous"></div>
			<div class="next"></div>
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