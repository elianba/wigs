<?php
session_start();
$server = $_SERVER;
$key = md5($_SERVER['REMOTE_ADDR']);
setcookie("user_" . $key, $key, time() + 3600);
$cookie = $_COOKIE;
print_r($cookie);
echo '<ul>';
foreach ($server as $key => $value) {
    echo '<li>' . $key . ':';
    print_r($value);
    echo '</li>';
}
echo '</ul>';

function get_real_ip(){
    $ip = $_SERVER["REMOTE_ADDR"];
    if (!empty($_SERVER["HTTP_CLIENT_IP"])) {
        $ip = $_SERVER["HTTP_CLIENT_IP"];
    }
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    return $ip;
}
$f = getenv("HTTP_X_FORWARDED_FOR");
var_dump($f);
echo get_real_ip();
?>
