<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="icon" href="OldPersonalPage/logo/kds.png">
        <title>Katrin D. Sig</title>
        <link rel="stylesheet" type="text/css" href="./css/style.css">

        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    </head>
    <body>

        <?php include('php/header.php')?>

        <div class="projects-page"></div>
        <?php $project = 'webIntern'; include('php/project-info-left.php')?>
        <?php $project = 'techTornado'; include('php/project-info-right.php')?>
        <?php $project = 'hrMonitor'; include('php/project-info-left.php')?>
        <?php $project = 'oldCV'; include('php/project-info-right.php')?>
        <?php $project = 'finnduleid'; include('php/project-info-left.php')?>
        <?php $project = 'volvo'; include('php/project-info-right.php')?>
        <?php $project = 'whereIs'; include('php/project-info-left.php')?>
        <?php $project = 'sundlaugar'; include('php/project-info-right.php')?>

        <?php include('php/front-contact.php')?>

        <script src="./js/intro.js"></script>
        <script src="./js/intersection-observer.js"></script>
    </body>
</html>