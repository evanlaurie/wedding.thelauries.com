<?php
$events = array(
  array(
    'date' => 'October 8, 2013',
    'title' => 'How We Met',
    'content' => 'Evan and Elise met on a popular online dating site. On this day, Elise sent Evan a message that read, “You. Are. Hilarious.”  Evan is still hilarious and Elise still thinks he is.'
  ),
  array(
    'date' => 'October 20, 2013',
    'title' => 'Our First Date',
    'content' => 'Evan and Elise met in person for the first time at Macrina Bakery in downtown Seattle.  After confirming that they were who they said they were, they both ordered Iced Vanilla Lattes and spent the next several hours talking about everything from family to football.'
  ),
  array(
    'date' => 'August 23, 2014',
    'title' => 'Our First Apartment',
    'content' => 'After dating for just over a year, Evan and Elise moved into their first apartment together in Mountlake Terrace, Washington.  While moving day was hard, living together has been one of the best decisions they’ve made thus far.'
  ),
  array(
    'date' => 'June 7, 2015',
    'title' => 'Our Engagement',
    'content' => 'She said yes!  Evan proposed to Elise on a waterfront rooftop observatory on Pier 66 in downtown Seattle; the primary location of their first date.  They chose to keep their engagement a secret until they were able to tell immediate family, which lasted all of about two weeks.'
  ),
  array(
    'date' => 'September 19, 2015',
    'title' => 'It\'s A Girl!',
    'content' => 'Evan and Elise welcomed their first baby girl together – their pup, Sophie!  Sophie came from a dog rescue in Sugarland, Texas, and has been an integral part of the family ever since.  Sophie is an only child… For now.'
  ),
  array(
    'date' => 'January 1, 2017',
    'title' => 'Maui&#8217;d',
    'content' => ' After over a year long engagement, Evan and Elise chose to get married on the beautiful island of Maui. The ceremony took place on Palauea Beach located near Wailea in the southern part of the island.'
  ),
);
?>
<div class="timeline">
  <?php foreach($events as $event): ?>
    <div class="event">
	  	<div class="event-content">
	  		<div class="arrow"></div>
	  		<div class="event-title facny-title"><?=$event['title'] ?></div>
	  		<div class="event-body"><?=$event['content'] ?></div>
	  		<span class="event-date"><?=$event['date'] ?></span>
	  	</div>
	  </div>
  <?php endforeach ?>
</div>