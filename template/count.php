<?php
   require ('phpQuery-onefile.php');

   $lid = file_get_contents('http://lidbeer.by/');
   $document = phpQuery::newDocument($lid);

   $counter = $document->find('#count')->text();

   echo $counter;