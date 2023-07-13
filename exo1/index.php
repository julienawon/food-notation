<?php

try{
    $pdo = new PDO("mysql:host=localhost;dbname=my_db","root","julien13");
}catch(PDOException $e){
    echo $e->getMessage();
    die("Erreur de connexion à la base de données");
}

if(isset($_POST["ref"]) && isset($_POST["details"]) && isset($_POST["prix"]) && isset($_POST["qte"])){
    $ref = $_POST["ref"];
    $details = $_POST["details"];
    $prix = $_POST["prix"];
    $qte = $_POST["qte"];

    try{
        $sql = "INSERT INTO `my_db2` (`ref`, `details`, `prix`, `qte`) VALUES (?, ?, ?, ?);";
        $statement = $pdo->prepare($sql);
        $statement->execute([$ref,$details,$prix,$qte]);
        echo "Insertion réussie";
    }catch(PDOException $e){
        echo $e->getMessage();
        die("Erreur d'insertion");
    }
}

// try{
//     $sql = "SELECT * FROM `users`;";
//     $statement = $pdo->prepare($sql);
//     $statement->execute();
//     $result = $statement->fetchAll(PDO::FETCH_COLUMN, 0);
//     var_dump($result);
// }catch(PDOException $e){
//     echo $e->getMessage();
//     die("Erreur de selection");
// }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="#" method="post">
        <input type="text" name="ref" id="ref"></br>
        <input type="text" name="details" id="details"></br>
        <input type="text" name="prix" id="prix">
        <input type="text" name="qte" id="qte">
        <input type="submit" value="Ajouter">
    </form>
</body>
</html>

