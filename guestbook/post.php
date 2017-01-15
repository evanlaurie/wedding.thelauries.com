<?php
  if($_POST['submit'] && $_POST['name'] && $_POST['message']){
    session_start();
    $session_post = $_SESSION['guestbook'];
    
    if($_POST['post_id'] === $session_post['post_id'] && $session_post['submitted'] === 'false') {
      require_once('config.php');
      
      $sql = <<<SQL
        INSERT INTO comments
        (post_by,message)  
        VALUES (:post_by,:message)
SQL;

      $query = $conn->prepare($sql);
      $query->execute(array(
        ':post_by' => $_POST['name'],
        ':message' => $_POST['message'],
      ));
      
      $_SESSION['guestbook']['submitted'] = 'true';
    }
    
    session_write_close();
  }
  header('Location: ../');
?>