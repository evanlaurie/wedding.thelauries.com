<?php
  ini_set("display_errors", 0);
  session_start();
  
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
		<meta name="description" content="Elise and Evan got Maui'd!">
		<meta name="keywords" content="elise and evan,elise and evan laurie,laurie wedding,elise and evan wedding website,mauie'd,wedding website,wedding websites,our wedding website,personal wedding website">
		<meta property="og:description" content="Elise and Evan got Maui'd!">
		<meta property="og:site_name" content="Elise & Evan | Maui'd">
		<meta property="og:url" content="http://wedding.thelauries.com">
		<meta property="og:image" content="http://wedding.thelauries.com/resources/thumbnail.png">
		
		<link rel="shortcut icon" href="resources/favico/wedding-couple.ico">
		<link href="dist/styles.css" rel="stylesheet" type='text/css'>
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCvX2skfLHKeRsLP7WubV7vdrMT7SlUkrk"></script>
		<script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
      ga('create', 'UA-90328947-1', 'auto');
      ga('send', 'pageview');
    </script>
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
						<a id="nav-<?=$id ?>" href="#<?=$id ?>"><?=$section["nav"] ?></a>
						<?php if($i == 1): ?> <span class="spacer"></span><?php endif; ?>
						<?php $i++; ?>
					<?php endif; ?>
				<?php endforeach; ?>
			</nav>
		</header>
		<section class="section" id="section-home">
			<article class="section-content">
				<?php require_once("content/home.php"); ?>
			</article>
		</section>
		<div class="content" id="content">
		
		<?php foreach($sections as $id => $section): ?>
			<section class="section" id="section-<?=$id ?>">
				<?php if($section["title"]): ?>
				<div class="section-header">
  				<span class="section-header-left"></span>
					<h3 class="section-title">
  					<?=$section["title"] ?>
  				</h3>
  				<span class="section-header-right"></span>
				</div>
				<?php endif; ?>
				<article class="section-content">
					<?php require_once("content/".$id.".php"); ?>
				</article>
			</section>
		<?php endforeach; ?>

		</div>
		<footer>
			<?php require_once("content/footer.php"); ?>
		</footer>
	</body>
</html>