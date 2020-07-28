<?php
    include_once('routes/routes.php');
    $routes = new routes();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto</title>

    <!--Styles from less-->
    <link rel="stylesheet/less" href="<?php echo $routes->style; ?>index.less">

    <!--JS libraries-->
    <script src="<?php echo $routes->libraries;?>jquery/jquery.js"></script>
    
    <!--Less style-->
    <script src="<?php echo $routes->less;?>"></script>

    <!--JS Bootstrap scripts-->
    <script src="<?php echo $routes->popper;?>" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="<?php echo $routes->libraries;?>bootstrap/js/bootstrap.js"></script>

    
    <!--Vue development-->
    <script src="<?php echo $routes->vue;?>"></script>

    <!--Axios http request-->
    <script src="<?php echo $routes->axios;?>"></script>
    
    <!--CSS libraries-->
    <link rel="stylesheet" href="<?php echo $routes->libraries;?>bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $routes->libraries;?>icons/icons.css">
    <link rel="stylesheet" href="<?php echo $routes->libraries;?>fonts/main.css">

<body>
    <div id="root">
        <container
            title="Hola mundo my bro ">
        </container>
    </div>
</body>

<!--Compontents-->
<script src="<?php echo $routes->components;?>carousel.js"></script>
<script src="<?php echo $routes->components;?>container.js"></script>

<!--Root app-->
<script src="<?php echo $routes->init;?>"></script>


<script src="tilt/tilt.jquery.min.js"></script>
<script >
	$('.js-tilt').tilt({
		scale: 1.1
	})
</script>
</html>