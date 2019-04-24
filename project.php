<!DOCTYPE html>
<html>
	<head>
		<title>David Hays Portfolio</title>
		<?php include("cdn/php/includes/head.php"); ?>
	</head>
	<body>
		<?php $qs = $_GET["id"]; ?>
		<script> var projectID = <?php echo json_encode($qs); ?>; </script>
		
		<?php include("cdn/php/views/header.php"); ?>
		<div id="project-detail"></div>
		<?php include("cdn/php/views/footer.php"); ?>
		<?php include("cdn/php/includes/scripts.php"); ?>
		<script type="text/javascript" src="cdn/js/project.js"></script>
	</body>
</html>