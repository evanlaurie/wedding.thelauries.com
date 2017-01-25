<?php
  $post_id = uniqid();
  
  $_SESSION['guestbook'] = array(
    'post_id' => $post_id,
    'submitted' => 'false',
  );
  
  session_write_close();
  
  require_once('guestbook/get.php');
?>
<?php foreach($comments as $commnet): ?>
<div class="guestbook-item">
  <div class="guestbook-title">
    <div class="guestbook-name">
      <?=$commnet['post_by'] ?>
    </div>
    <div class="guestbook-date">
      <?=$commnet['post_date'] ?>
    </div>
  </div>
  <div class="guestbok-message">
    <?=$commnet['message'] ?>
  </div>
</div>
<?php endforeach ?>

<div class="guestbook-item ">
  <div class="guestbook-title">
    Sign the guest book
  </div>
  <div class="guestbok-message">
    <form id="guestbok-form" method="POST" enctype="multipart/form-data" action="guestbook/post.php">
		  <input type="hidden" value="<?=$post_id ?>" name="post_id" />
		  <input id="guestbok-form-name" type="text" name="name" placeholder="Your name">
      <textarea id="guestbok-form-message" name="message" placeholder="Your message"></textarea>
      <input id="guestbok-form-submit" type="submit" name="submit" value="Post">
    </form>
  </div>
</div>