<?php

if(!empty($_GET['name'])
  && !empty($_GET['password'])
  && $_GET['name'] === 'bob'
  && $_GET['password'] === 'toto' ){
    echo 'true';
} else {
  echo 'false';
}
