<?php session_start(); ?>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <link href="table.css" rel="stylesheet">
</head>
<body>
    <table>
        <tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Начало работы</th>
            <th>Время работы</th>
            <th>Результат</th>
        </tr>
        <?php
        $history = $_SESSION['history'] or [];
        foreach ($history as $result): ?>
            <tr>
                <td><?=$result[0]?></td>
                <td style="word-break: break-all;"><?=$result[1]?></td>
                <td style="word-break: break-all;"><?=$result[2]?></td>
                <td><?=$result[3]?></td>
                <td style="white-space: nowrap;"><?=$result[4]?> <?=$result[5]?></td>
                <td style="white-space: nowrap;"><?=sprintf('%.5f', $result[6])?> sec.</td>
            </tr>
        <?php endforeach; ?>
    </table>
</body>
</html>