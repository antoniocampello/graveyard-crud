<?php

/**
 * Array of route definitions for the application.
 *
 * @var array<string, array<string, string>> $routes An associative array where keys are URL patterns
 *                                                   and values are arrays mapping HTTP methods to 
 *                                                   controller actions.
 */
$routes = [
    '/people' => [
        'GET' => 'PersonController@index',
        'POST' => 'PersonController@store'
    ],
    '/people/{id}' => [
        'GET' => 'PersonController@show',
        'PUT' => 'PersonController@update',
        'DELETE' => 'PersonController@destroy'
    ],
];
