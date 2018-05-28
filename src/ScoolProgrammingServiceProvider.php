<?php

namespace Rogerforner\ScoolProgramming;

use Illuminate\Support\ServiceProvider;

class ScoolProgrammingServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // Instanciar les rutes.
        $this->loadRoutesFrom(__DIR__.'/routes.php');

        // Instanciar "resources" (assets i vistes).
        $this->loadViewsFrom(__DIR__.'/resources/views', 'scool-programming');
    }

    /**
     * Register services.
     * Li passem el mètode registerPublishables() a través del qual registrarem els fitxers
     * que han de ser copiats amb el vendor:publish.
     *
     * @return void
     */
    public function register()
    {
        $this->registerPublishables();
    }

    /**
     * A publicar amb el vendor.
     * 
     */
    private function registerPublishables()
    {
        $basePath = dirname(__DIR__);

        // Array de directoris que seran publicats.
        $publishables = [
            'migrations' => [
                "$basePath/publishable/database/migrations" => database_path('migrations'),
            ],
            'config' => [
                "$basePath/publishable/config/scool-programming.php" => config_path('scool-programming.php'),
            ]
        ];

        foreach ($publishables as $group => $paths) {
            $this->publishes($paths, $group);
        }
    }
}
