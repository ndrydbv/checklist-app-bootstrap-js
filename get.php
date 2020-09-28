<?php
    $_GET = array_map('strip_tags', $_GET);
    $_GET = array_map('htmlspecialchars', $_GET);
    foreach($_GET as $key => $value) {
        echo "$key is: $value <br>";
    }
?>
