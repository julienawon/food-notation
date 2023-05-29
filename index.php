<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link type="text/css" rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Commentaire - Analysis</title>
</head>
<body>
    <header>
        <h1>Analyse de commntaire </h1>
        <ul>
            <li><a href="https://www.linkedin.com/in/abdelhakim-ben-ali-7b1b3b1b2/">Asmae</a></li>
            <li><a href="https://www.linkedin.com/in/abdelhakim-ben-ali-7b1b3b1b2/">Tresor</a></li>
            <li><a href="https://www.linkedin.com/in/abdelhakim-ben-ali-7b1b3b1b2/">Nesrine</a></li>
            <li><a href="https://www.linkedin.com/in/abdelhakim-ben-ali-7b1b3b1b2/">Julien</a></li>
        </ul>
    </header>
    <main>
        <section id="commentaire">
            <img src="couscous.jpg" alt="Image du couscous">
            <div>
                 <h1>Commentaire</h1>
                <form action="server.php" method="post" id="happycomment">
                    <textarea name="commentaire"  cols="50" rows="10"></textarea>
                    <input type="submit" value="Envoyer">
                </form>
            </div>
        </section>
        <section id="resultats">
        </section>
    </main>
    <footer>
        <p>© 2022 - Tous droits réservés</p>
    </footer>
   <script src="script.js"></script>
</body>
</html>