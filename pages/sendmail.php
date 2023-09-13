<?php
// Файлы phpmailer
require '../vendor/phpmailer/PHPMailer.php';
require '../vendor/phpmailer/SMTP.php';
require '../vendor/phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
//$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$website = $_POST['website'];

// Формирование самого письма
$title = "inquiry from web-site";
$body = "
<h2>Новое письмо EN</h2>
<b>E-mail:</b> $email<br><br>
<b>Телефон:</b> $phone<br><br>
<b>website:</b> $website<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'my.spacecraft.music@gmail.com'; // Логин на почте
    $mail->Password   = 'xnlanteirultoyhp'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('my.spacecraft.music@gmail.com', 'web-off.com'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('darkjazzyak@yandex.ru');
    $mail->addAddress('afokina@web-off.ru');
    $mail->addAddress('fokina.nas@yandex.ru'); // Ещё один, если нужен
    $mail->addAddress('info@web-off.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
// if (!empty($file['name'][0])) {
//     for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
//         $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
//         $filename = $file['name'][$ct];
//         if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
//             $mail->addAttachment($uploadfile, $filename);
//             $rfile[] = "Файл $filename прикреплён";
//         } else {
//             $rfile[] = "Не удалось прикрепить файл $filename";
//         }
//     }
// }
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $mail]);
