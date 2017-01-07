<?php
  require_once('config.php');
  
  $sql = <<<SQL
    SELECT 
      post_by,
      DATE_FORMAT(post_date, '%m/%d/%Y') AS post_date,
      message
    FROM comments
SQL;
  
  $query = $conn->prepare($sql);
  $query->execute();

  $comments = $query->fetchAll(PDO::FETCH_ASSOC);
?>