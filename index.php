<?php
	$sections = array(
		"story" => array(
			"nav" => "Story",
			"title" => "Our Story"
		),
		"wedding" => array(
			"nav" => "Wedding",
			"title" => "Palauea Beach"
		),
		"photos" => array(
			"nav" => "Photos",
		),
		"guestbook" => array(
			"nav" => "Guest Book",
			"title" => "Guest Book"
		),
	);
?>

<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="target-densitydpi=device-dpi, width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no">
		<title>Elise & Evan | Maui'd</title>
		<meta name="description" content="">
		<meta name="keywords" content="elise and evan,elise and evan laurie,laurie wedding,elise and evan wedding website,mauie'd,wedding website,wedding websites,our wedding website,personal wedding website">
		<meta property="og:description" content="">
		<meta property="og:site_name" content="Elise & Evan | Maui'd">
		<!-- <meta property="og:url" content="http://wedding.thelauries.com"> -->
		<meta property="og:image" content="http://wedding.thelauries.com/resources/thumbnail.png">
		
		<link rel="shortcut icon" href="resources/favico/wedding-couple.ico">
		<link href="dist/styles.css" rel="stylesheet" type='text/css'>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCvX2skfLHKeRsLP7WubV7vdrMT7SlUkrk"></script>
		<script type="text/javascript" src="dist/bundle.js"></script>
	</head>
	<body>
		<div id="background"></div>
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
		<section class="section" id="section-home">
			<article class="section-content">
				<?php require("content/home.php"); ?>
			</article>
		</section>
		<div class="content" id="content">
		
		<?php foreach($sections as $id => $section): ?>
			<section class="section" id="section-<?php print $id;?>">
				<?php if($section["title"]): ?>
				<div class="section-header">
					<h3 class="section-title">
  					<?php print $section["title"]; ?>
  				</h3>
				</div>
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
					<h3>Mr. &amp; Mrs. Laurie</h3>
					<div class="copyrights">Copyright &copy; 2017 <a href="mailto:evan@thelauries.com">Evan</a> &amp; <a href="mailto:elise@thelauries.com">Elise Laurie</a></div>
					<div>Developed by <a target="_blank" href="http://evanlaurie.com">Evan Laurie</a></div>
				</div>
      </div>
		</footer>
	</body>
</html>