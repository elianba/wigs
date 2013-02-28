<?php
function fopen_url($url, $timeout = '20') {
    if (function_exists('curl_init')) {
        $ch = curl_init();
        $user_agent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)";
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_USERAGENT, $user_agent);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch, CURLOPT_NOBODY, 0);
        // curl_setopt($ch,CURLOPT_FOLLOWLOCATION,1); 
        curl_setopt($ch, CURLOPT_FAILONERROR, 1);
        $html = curl_exec($ch);
        curl_close($ch);
    } elseif (function_exists('file_get_contents')) {
        $file = @fopen($url, 'rb');
        $i = 0;
        while (!feof($file) && $i++ < 1000) {
            $html .= strtolower(fread($file, 4096));
        }
        fclose($file);
    } else {
        $html = '0';
    }
    return $html;
}
?>
