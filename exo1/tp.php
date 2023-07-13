<?php
    function t2l($text){
        $mots = explode(" ",$text);
        $uniques = array_unique($mots);
        return $uniques;
    }

    function getWords($text){
        $mots = explode(" ",$text);
        $mots = array_map("strtolower",$mots);
        $uniques = array_unique($mots);
        $result = [];
        foreach($uniques as $mot){
            $result[$mot] = 0;
        }
        foreach($mots as $mot){
            $result[$mot] += 1;
        }
        return $result;
    }

    $text_1 = "Le pays a le climat le plus sec";
    $text_2 = "Le climat chaud du maroc est le climat idéal pour les vacances";
    $text_3 = "Le climat a le plus grand impact sur le l'economie du pays";
    
    // var_dump(getWords($text_1));
    // var_dump(getWords($text_2));
    // var_dump(getWords($text_3));

    // calcul de la distance ecluidienne entre deux textes
    function distance($text1,$text2){
        $words1 = getWords($text1);
        $words2 = getWords($text2);
        $result = 0;
        foreach($words1 as $word => $count){
            if(array_key_exists($word,$words2)){
                $result += pow($count - $words2[$word],2);
            }else{
                $result += pow($count,2);
            }
        }
        foreach($words2 as $word => $count){
            if(!array_key_exists($word,$words1)){
                $result += pow($count,2);
            }
        }
        return sqrt($result);
    }
    // calcul de la distance de jaccard
    function jaccard($text1,$text2){
        $words1 = getWords($text1);
        $words2 = getWords($text2);
        $intersection = 0;
        $union = 0;
        foreach($words1 as $word => $count){
            if(array_key_exists($word,$words2)){
                $intersection += min($count,$words2[$word]);
                $union += max($count,$words2[$word]);
            }else{
                $union += $count;
            }
        }
        foreach($words2 as $word => $count){
            if(!array_key_exists($word,$words1)){
                $union += $count;
            }
        }
        return $intersection/$union;
    }
    echo jaccard($text_3,$text_1);
    echo jaccard($text_3,$text_2);