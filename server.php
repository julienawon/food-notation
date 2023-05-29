
<?php 

require_once "vadersentiment.php";

$textToTest = $_POST['commentaire'];

$s = new SentimentIntensityAnalyzer();

$result = $s->getSentiment($textToTest);

echo json_encode($result);


