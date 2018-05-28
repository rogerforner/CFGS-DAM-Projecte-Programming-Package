<?php

$dir = __DIR__ . '/';

$iterator = Symfony\Component\Finder\Finder::create()
  ->files()
  ->name('*.php')
  ->exclude('vendor')
  ->in($dir);

$options = [
  'theme' => 'default',
  'title' => 'Projecte de DAM',
];

$sami = new Sami\Sami($iterator, $options);
return $sami;