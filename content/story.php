<?php
$events = array(
  array(
    'date' => 'October 8, 2013',
    'title' => 'The first message',
    'content' => 'Elise and Evan met on a popular online dating site. On this day, Elise sent Evan a message that read, “You. Are. Hilarious.”  Evan is still hilarious and Elise still thinks he is.'
  ),
  array(
    'date' => 'October 20, 2013',
    'title' => 'The first date',
    'content' => 'Evan and Elise met in person for the first time at Macrina Bakery in downtown Seattle.  After confirming that they were who they said they were, Evan and Elise both ordered Iced Vanilla Lattes and spent the next several hours talking about everything from family to football.'
  ),
  array(
    'date' => 'August 23, 2014',
    'title' => 'Moved in together',
    'content' => 'After dating for just over a year, Evan and Elise moved into their first apartment together in Mountlake Terrace, Washington.  While moving day was hard, living together has been one of the best decisions they’ve made thus far.'
  ),
  array(
    'date' => 'June 7, 2015',
    'title' => 'The engagement',
    'content' => 'She said yes!  Evan proposed to Elise on a waterfront rooftop observatory on Pier 66 in downtown Seattle; the primary location of their first date.  They chose to keep their engagement a secret until they were able to tell immediate family, which lasted all of about two weeks.'
  ),
  array(
    'date' => 'September 19, 2015',
    'title' => 'The dog',
    'content' => 'Evan and Elise welcomed their first baby girl together – their pup, Sophie!  Sophie came from a dog rescue in Sugarland, Texas, and has been an integral part of the family ever since.  Sophie is an only child… For now.'
  ),
  array(
    'date' => 'October 20, 2017',
    'title' => 'The wedding',
    'content' => 'Exactly four years after their first date, Evan and Elise welcome you to join them in celebration as they become husband and wife.'
  ),
);

?>

<div class="timeline">
  <?php foreach($events as $event): ?>
    <div class="event">
	  	<div class="event-content">
	  		<div class="arrow"></div>
	  		<div class="event-title"><?=$event['title'] ?></div>
	  		<div class="event-body"><?=$event['content'] ?></div>
	  		<span class="event-date"><?=($event['date']) ?></span>
	  	</div>
	  </div>
  <?php endforeach ?>
</div>