<?php 
session_start();

$history = [];
if (isset($_SESSION['history']) && is_array($_SESSION['history'])) {
    $history = $_SESSION['history'];
}

$start = microtime(true);
while (count($history) >= 3) {
    array_shift($history);
}

$startzone = date_default_timezone_get();
$startdate = date('H:i:s');

$X = $_GET['X_coordinate'];
$Y = $_GET['Y_coordinate'];
$R = $_GET['R_coordinate'];

$Xvalue = parseFloat($X);
$Yvalue = parseFloat($Y);
$Rvalue = parseFloat($R);

$check = 'Неверные данные';
if (in_array($X, ['-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3']) && $Yvalue >= -5 && $Yvalue <= 3 && $Rvalue >= 2 || $Rvalue <= 5) {
    if (
        ($Xvalue <= 0 && $Yvalue <= 0 && $Yvalue >= -$Rvalue / 2 && $Xvalue >= -$Rvalue) ||
        ($Xvalue <= 0 && $Yvalue >= 0 && $Yvalue <= -2 * $Xvalue + $Rvalue) ||
        ($Xvalue >= 0 && $Yvalue <= 0 && $Xvalue * $Xvalue + $Yvalue * $Yvalue <= $Rvalue * $Rvalue / 4)
    ) {
        $check = 'Попадает';
    } else {
        $check = 'Не попадает';
    }
}

array_push($history, [$X, $Y, $R, $check, $startdate, $startzone, microtime(true) - $start]);
$_SESSION['history'] = $history;

include_once 'result_table.php';

///

function parseFloat($value) {
    return (float) str_replace(",", ".", $value);
    
}