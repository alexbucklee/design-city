<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST["user_name"];
$phone = $_POST["user_phone"];
// $email = $_POST['user_email'];
$token = "889073054:AAEGma6dXh37swbhQUPHVPEUgdlCmr7BB3E";
$chat_id = "-368568431";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  // 'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  echo "Спасибо за заявку!";
} else {
  echo "Error";
}
?>
