<?php

/**
 * This script initializes the application by setting up autoloading,
 * loading necessary configurations, and starting the main application.
 */

require_once __DIR__ . '/core/Core.php';
require_once __DIR__ . '/router/routes.php';

/**
 * Autoloader function to load classes from specified directories.
 *
 * @param string $file The name of the file (class) to be loaded.
 */
spl_autoload_register(function ($file) {
    $directories = [
        __DIR__ . '/config/',
        __DIR__ . '/models/',
        __DIR__ . '/utils/',
        __DIR__ . '/controllers/'
    ];

    foreach ($directories as $directory) {
        $path = $directory . $file . '.php';
        
        if (file_exists($path)) {
            require_once $path;
        }
    }
});

// Needed initializations.
$env = new Env();
$core = new Core();

// Main.
$core->run($routes);
