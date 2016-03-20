<?php
	$sections = array(
		"story"   => "Story",
		"photos"  => "Photos",
		"wedding" => "Wedding",
		"rsvp"    => "RSVP",
	);
?>

<!DOCTYPE html>
<html>
	<haed>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1">
		<title>Evan & Elise Wedding</title>
		
		<link href="lib/icomoon/style.css" rel="stylesheet" type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Pinyon+Script|Open+Sans+Condensed:300|Open+Sans|Julius+Sans+One' rel='stylesheet' type='text/css'>
		
		<link href="lib/arctext/css/style.css" rel="stylesheet" type='text/css'>
		<link href="css/style.css" rel="stylesheet" type='text/css'>
		
		<script type="text/javascript" src="lib/jquery-2.1.1.min.js"></script>
		<script type="text/javascript" src="lib/jquery.sticky-1.0.0.js"></script>
		<script type="text/javascript" src="lib/jquery.easing.1.3.js"></script>
		<script type="text/javascript" src="lib/jquery.waypoints.js"></script>
		<script type="text/javascript" src="lib/jquery.countdown-2.0.5/jquery.countdown.js"></script>
		
		<script type="text/javascript" src="lib/arctext/js/jquery.arctext.js"></script>
		<script type="text/javascript" src="js/site.js"></script>
		
	</haed>
	<body>
		<div class="background"></div>
		<header id="header">
			<h1 class="logo">Elise <i>&#xe607;</i> Evan</h1>
			<nav class="nav" id="nav">
				<?php $i = 0; ?>
				<?php foreach($sections as $id => $title): ?>
					<a id="nav-<?php print $id; ?>" href="#<?php print $id; ?>"><?php print $title; ?></a>
					<?php if($i == 1): ?> <span class="spacer"></span><?php endif; ?>
					<?php $i++; ?>
				<?php endforeach; ?>
			</nav>
		</header>
		<div id="wrapper">
			<section class="section" id="section-home">
				<div class="content">
					<div class="home-title">
						<h1>Tying the knot!</h1>  
						<h2>October 20, 2017</h1>
						<div id="countdown"></div>
					</div>
					<div class="transition"></div>
				</div>
			</section>
			<section class="section" id="section-story">
				<div class="content">
					<h3>Our Story</h1>
					<div class="timeline">
			
						<div class="event left">
							<div class="event-content">
								<div class="arrow"></div>
								<div class="event-title"></div>
								<span class="event-date">October 8, 2013</span>
							</div>
						</div>
						
						<div class="event right">
							<div class="event-content">
								<div class="arrow"></div>
								<div class="event-title"></div>
								<span class="event-date">October 20, 2013</span>
							</div>
							
						</div>
						<div class="event left">
							<div class="event-content">
								<div class="arrow"></div>
								<div class="event-title"></div>
								<span class="event-date">August 23, 2014</span>
							</div>
						</div>
						
						<div class="event right">
							<div class="event-content">
								<div class="arrow"></div>
								<div class="event-title"></div>
								<span class="event-date">June 7, 2015</span>
							</div>
							
						</div>
						<div class="event left">
							<div class="event-content">
								<div class="arrow"></div>
								<div class="event-title"></div>
								<span class="event-date">October 20, 2017</span>
							</div>
						</div>
						
					</div>
				</div>
			</section>
			<section class="section" id="section-photos">
				<div class="content">
					<h3>Photo Gallery</h1>
					<div class="gallery-wrapper">
						<div class="gallery">
							<div class="gallery-sizer"></div>
							<div class="gallery-nav">
								<div class="previous"></div>
								<div class="next"></div>
							</div>
							<div class="gallery-content">
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="section" id="section-wedding">
				<div class="content">
					<h3>The Wedding</h1>
				</div>
			</section>
			<section class="section" id="section-rsvp">
				<div class="content">
					<h3>Are you attending?</h1>
				</div>
			</section>
		</div>
		<footer>
			<div class="content">
				<h2>Thanks for Visiting our Website</h2>
				<div class="footer_txt">				
					<h3>Mr. &amp; Future Mrs. Laurie</h3>
					<div class="copyrights">Copyright &copy; 2015 <a href="mailto:evan@thelauries.com">Evan</a> &amp; <a href="mailto:elise@thelauries.com">Elise Laurie</a></div>
					<div>Developed by <a target="_blank" href="http://evanlaurie.com">Evan Laurie</a></div>
				</div>
      </div>
		</footer>
	</body>
</html>