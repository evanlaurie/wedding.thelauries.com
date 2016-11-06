<?php
	$sections = array(
		"home" => array(),
		"story" => array(
			"nav" => "Story",
			"title" => "Our Story"
		),
		"photos" => array(
			"nav" => "Photos",
			"title" => "Photo Gallery"
		),
		"wedding" => array(
			"nav" => "Wedding",
			"title" => "The Wedding",
		),
		"rsvp" => array(
			"nav" => "RSVP",
			"title" => "Are you attending?"
		)
	);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>Evan & Elise Wedding</title>
		<link rel="shortcut icon" href="resources/favico/wedding-couple.ico">
		<link href="dist/styles.css" rel="stylesheet" type='text/css'>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCvX2skfLHKeRsLP7WubV7vdrMT7SlUkrk"></script>
		<script type="text/javascript" src="dist/bundle.js"></script>
	</head>
	<body>
		<div class="background"></div>
		<header id="header">
			<h1 class="logo"><span>Elise</span> <i class="flaticon-interlocking-rings"></i> <span>Evan</span></h1>
			<nav class="nav" id="nav">
				<?php $i = 0; ?>
				<?php foreach($sections as $id => $section): ?>
					<?php if($section["nav"]): ?>
						<a id="nav-<?php print $id; ?>" href="#<?php print $id; ?>"><?php print $section["nav"]; ?></a>
						<?php if($i == 1): ?> <span class="spacer"></span><?php endif; ?>
						<?php $i++; ?>
					<?php endif; ?>
				<?php endforeach; ?>
			</nav>
		</header>
		<div class="content" id="content">
		
		<?php foreach($sections as $id => $section): ?>
			<section class="section" id="section-<?php print $id;?>">
				<?php if($section["title"]): ?> 
					<h3 class="section-title"><?php print $section["title"]; ?></h3>
				<?php endif; ?>
				<article class="section-content">
					<?php require("content/".$id.".php"); ?>
				</article>
			</section>
		<?php endforeach; ?>

		</div>
		<footer>
			<div class="content">
				<h2>Thanks for Visiting our Website</h2>
				<div class="footer-text">				
					<h3>Mr. &amp; Future Mrs. Laurie</h3>
					<div class="copyrights">Copyright &copy; 2016 <a href="mailto:evan@thelauries.com">Evan</a> &amp; <a href="mailto:elise@thelauries.com">Elise Laurie</a></div>
					<div>Developed by <a target="_blank" href="http://evanlaurie.com">Evan Laurie</a></div>
				</div>
      </div>
		</footer>
	</body>
</html>