> Projecte - Cicle Formatiu de Grau Superior de Desenvolupament d'Aplicacions Multiplataforma (DAM)

**Taula de continguts**

- [Info](#info)
	- [Enllaços d'interès](#enllacos-dinteres)
	- [Què fa?](#que-fa)
	- [Relacions](#relacions)
- [Idioma (important)](#idioma-important)
- [Controladors i Models](#controladors-i-models)
	- [Controladors](#controladors)
	- [Models](#models)
- [Documentació del codi](#documentacio-del-codi)
- [Packagist](#packagist)
- [Instal·lació](#instal-lacio)
	- [Composer install](#composer-install)
	- [Configuració](#configuracio)
	- [Implementació](#implementacio)
		- [Vendor](#vendor)
		- [Migracions](#migracions)
- [API Routes](#api-routes)
	- [Departments Routes](#departments-routes)
	- [Professional Modules Routes](#professional-modules-routes)
	- [Temaries Routes](#temaries-routes)
	- [Training Units Routes](#training-units-routes)
	- [Vue + Axios (consumir rutes)](#vue-axios-consumir-rutes)
- [Qui?](#qui)

# Info

**[Programming Package](https://github.com/rogerforner/programming-package)** és el projecte final del Cicle Formatiu de Grau Superior de _Desenvolupament d'Aplicacions Multiplataforma (DAM)_, de l'[Institut de l'Ebre](https://www.iesebre.com/) (Tortosa - Terres de l'Ebre).

Aquest és un paquet que es pot veure implementat al repositori [Programming](https://github.com/rogerforner/programming), on a més a més hi trobaràs més informació sobre el projecte desenvolupat.

## Enllaços d'interès

- [Veure la presentació](https://rogerforner.github.io/programmingPresentacio/)

## Què fa?

Proporciona els CRUDs necessaris per dur endavant la gestió de:
- Departaments.
- Mòduls professionals.
- Unitats formatives.
- Nuclis formatius.

## Relacions

Es tenen en compte les relacions següents:
- Usuaris - Departaments (1,1)
	- Un usuari pot no ser cap de departament (0).
	- Un usuari pot ser cap de departament de com a màxim 1 (1).
	- Un departament només pot tenir un cap de departament (1,1).
- Usuaris - Departaments (N,N); [taula pivot]
	- Un usuari pot no estar assignat a un departament (0).
	- Un usuari pot estar assignat a més d'un departament (N).
	- Un departament pot no estar assignat a un usuari (0).
	- Un departament pot estar assignat a més d'un usuari (N).
- Departaments - Mòduls professionals (1,N)
	- Un departament pot no tenir cap mòdul professional (0).
	- Un departament pot tenir més d'un mòdul professional (N).
	- Un mòdul professional només pot ser assignat a un departament (1).
- Mòdul professional - Unitat formativa (1,N)
	- Un mòdul professional pot no tenir cap unitat formativa (0).
	- Un mòdul professional pot tenir més d'una unitat formativa (N).
	- Una unitat formativa només pot ser assignada a un mòdul professional (1,1).
- Unitat formativa - Nucli formatiu (1,N)
	- Una unitat formativa pot no tenir cap nucli formatiu (0).
	- Una unitat formativa pot tenir més d'un nucli formatiu (N).
	- Un nucli formatiu només pot ser assignat a una unitat formativa (1,1).

# Idioma (important)

Els noms dels models, dels controladors, dels mètodes i variables estàn amb
anglès, així com, també, els blocs de comentaris /** */.

Els comentaris que hi ha d'entre mig el codi està en català.

_És **important** tenir en compte aquest aspecte donat que les variables tornades
en les peticions AJAX són amb anglès_.

- Departaments => Departments | Department.
- Mòduls professionals => Professional modules | Professional module.
- Unitats formatives => Training units | Training unit.
- Nuclis formatius => Temaries | Temary.

# Controladors i Models

## Controladors

```php
namespace Rogerforner\ScoolProgramming\Http\Controllers\API;
```

Tots els controladors són fills (estenen) d'un controlador pare, el qual ha estat 
creat per depurar les respostes a través de la **API**.

- ApiResponseController (s'estén de Controller, Laravel).
- DepartmentController (s'estén de ApiResponseController).
- ProfessionalModuleController (s'estén de ApiResponseController).
- TemaryController (s'estén de ApiResponseController).
- TrainingUnitController (s'estén de ApiResponseController).

## Models

```php
namespace Rogerforner\ScoolProgramming\Models;
```

Cada controlador té el seu model, el qual disposa de les Relacions Eloquent de
Laravel.

- Department.
	- users(): _belongsToMany_
		- S'ha d'afegir la relació corresponent al model Users.
	- professionalModules(): _hasMany_
- ProfessionalModule.
	- department(): _belongsTo_
	- trainingUnits(): _hasMany_
- Temary.
	- trainingUnit(): _belongsTo_
- TrainingUnit.
	- professionalModule(): _belongsTo_
	- temaries(): _hasMany_

# Documentació del codi

La documentació del codi s'ha dut a terme mitjançant [Sami](https://github.com/FriendsOfPHP/Sami) 
i es pot visualitzar o bé a través de l'enllaç que es mostra a sota de la descripció del
repositori o bé [aquí](https://rogerforner.github.io/programming-package/).

La documentació està allotjada en el propi GitHub, a través de [GitHub Pages](https://pages.github.com/).

# Packagist

Pots trobar el paquet a [Packagist](https://packagist.org), el repositori de paquets de [Composer](https://getcomposer.org/).
- Aquest paquet és [rogerforner/scool_programming](https://packagist.org/packages/rogerforner/scool_programming).

# Instal·lació

## Composer install

Executa la següent comanda per instal·lar el paquet al teu projecte Laravel.

```
composer require rogerforner/scool_programming
```

## Configuració

Un cop instal·lat el paquet, ens dirigim a _config/app.php_ i hi instanciem aquest
al _Package Service Providers..._

```php
/*
 * Package Service Providers...
 */
Rogerforner\ScoolProgramming\ScoolProgrammingServiceProvider::class,
```

## Implementació

Un cop instanciat el paquet hem de fer que les migracions siguin inserides a la
carpeta propia d'aquestes, del Laravel, doncs només així les podrem executar.

### Vendor

Per fer-ho possible executem la següent comanda. S'ha de tenir en compte que aquestes
són necessaries per al bon funcionament del paquet.

```
php artisan vendor:publish
```

Un cop executada apareixeràn els _providers_, hem de inserir el número en el que es
trobi indexat.

```
Which provider or tag's files would you like to publish?:
  [0 ] Publish files from all providers and tags listed below
  [1 ] Provider: Fideloper\Proxy\TrustedProxyServiceProvider
  [2 ] Provider: Illuminate\Mail\MailServiceProvider
  [3 ] Provider: Illuminate\Notifications\NotificationServiceProvider
  [4 ] Provider: Illuminate\Pagination\PaginationServiceProvider
  [5 ] Provider: Laravel\Passport\PassportServiceProvider
  [6 ] Provider: Laravel\Tinker\TinkerServiceProvider
  [7 ] Provider: Rogerforner\ScoolProgramming\ScoolProgrammingServiceProvider
  [8 ] Tag: config
  [9 ] Tag: laravel-mail
  [10] Tag: laravel-notifications
  [11] Tag: laravel-pagination
  [12] Tag: migrations
  [13] Tag: passport-components
  [14] Tag: passport-config
  [15] Tag: passport-views
 >
```

En aquest cas podem veure que el _provider_ està indexat al número **7**.

### Migracions

Un cop realitzat l'apartat del "Vendor", duem a terme les migracions.

```
php artisan migrate:fresh
```

Si s'han creat _seeders_ (no és el nostre cas), podem executar:

```
php artisan migrate:fresh --seed
```

# API Routes

El paquet proporciona unes rutes a través les quals treballat, aquetes retornen
una resposta **JSON** amb múltiples variables, fet així per poder disposar de
missatges (errors o satisfactoris) personalitzats, com també de diverses variables
que continguin els objectes necessàris per a cada vista que es vulgui fer servir.

En el nostre cas d'exemple (mirar apartat Info) s'ha emprat [Vue](https://vuejs.org/) i [Axios](https://github.com/axios/axios)
per tal de consumir la API que proporciona el paquet.

Tot i així, a continuació, es porporcionen les rutes, tot i que, abans, es fa menció
de la comanda _artisan_ emprada per llistar-les.

```
php artisan route:list
```

## Departments Routes

```
|        | GET|HEAD  | api/scool/programming/departments                                | departments.index            | Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController@index           | auth:api     |
|        | POST      | api/scool/programming/departments                                | departments.store            | Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController@store           | auth:api     |
|        | GET|HEAD  | api/scool/programming/departments/{department}                   | departments.show             | Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController@show            | auth:api     |
|        | PUT|PATCH | api/scool/programming/departments/{department}                   | departments.update           | Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController@update          | auth:api     |
|        | DELETE    | api/scool/programming/departments/{department}                   | departments.destroy          | Rogerforner\ScoolProgramming\Http\Controllers\API\DepartmentController@destroy         | auth:api     |
```

## Professional Modules Routes

```
|        | GET|HEAD  | api/scool/programming/professional-modules                       | professional-modules.index   | Rogerforner\ScoolProgramming\Http\Controllers\API\ProfessionalModuleController@index   | auth:api     |
|        | POST      | api/scool/programming/professional-modules                       | professional-modules.store   | Rogerforner\ScoolProgramming\Http\Controllers\API\ProfessionalModuleController@store   | auth:api     |
|        | GET|HEAD  | api/scool/programming/professional-modules/{professional_module} | professional-modules.show    | Rogerforner\ScoolProgramming\Http\Controllers\API\ProfessionalModuleController@show    | auth:api     |
|        | PUT|PATCH | api/scool/programming/professional-modules/{professional_module} | professional-modules.update  | Rogerforner\ScoolProgramming\Http\Controllers\API\ProfessionalModuleController@update  | auth:api     |
|        | DELETE    | api/scool/programming/professional-modules/{professional_module} | professional-modules.destroy | Rogerforner\ScoolProgramming\Http\Controllers\API\ProfessionalModuleController@destroy | auth:api     |
```

## Temaries Routes

```
|        | GET|HEAD  | api/scool/programming/temaries                                   | temaries.index               | Rogerforner\ScoolProgramming\Http\Controllers\API\TemaryController@index               | auth:api     |
|        | POST      | api/scool/programming/temaries                                   | temaries.store               | Rogerforner\ScoolProgramming\Http\Controllers\API\TemaryController@store               | auth:api     |
|        | DELETE    | api/scool/programming/temaries/{temary}                          | temaries.destroy             | Rogerforner\ScoolProgramming\Http\Controllers\API\TemaryController@destroy             | auth:api     |
|        | GET|HEAD  | api/scool/programming/temaries/{temary}                          | temaries.show                | Rogerforner\ScoolProgramming\Http\Controllers\API\TemaryController@show                | auth:api     |
|        | PUT|PATCH | api/scool/programming/temaries/{temary}                          | temaries.update              | Rogerforner\ScoolProgramming\Http\Controllers\API\TemaryController@update              | auth:api     |
```

## Training Units Routes

```
|        | GET|HEAD  | api/scool/programming/training-units                             | training-units.index         | Rogerforner\ScoolProgramming\Http\Controllers\API\TrainingUnitController@index         | auth:api     |
|        | POST      | api/scool/programming/training-units                             | training-units.store         | Rogerforner\ScoolProgramming\Http\Controllers\API\TrainingUnitController@store         | auth:api     |
|        | DELETE    | api/scool/programming/training-units/{training_unit}             | training-units.destroy       | Rogerforner\ScoolProgramming\Http\Controllers\API\TrainingUnitController@destroy       | auth:api     |
|        | PUT|PATCH | api/scool/programming/training-units/{training_unit}             | training-units.update        | Rogerforner\ScoolProgramming\Http\Controllers\API\TrainingUnitController@update        | auth:api     |
|        | GET|HEAD  | api/scool/programming/training-units/{training_unit}             | training-units.show          | Rogerforner\ScoolProgramming\Http\Controllers\API\TrainingUnitController@show          | auth:api     |
```

## Vue + Axios (consumir rutes)

A continuació proporcionem un enllaç a la carpeta on disposem dels components
Vue a través dels quals consumim la API. Podrem veure que hi ha un component per
a cadascuna de les rutes/controladors.

- Repositori **programming**[/resources/assets/js/components/scool-programming/](https://github.com/rogerforner/programming/tree/master/resources/assets/js/components/scool-programming)

_Tal i com es menciona en l'apartat "Info", aquest repositori que es dona d'exemple només
ha estat fet servir per dur a terme les funcionalitats del paquet, cadascú és lliure
de desenvolupar les vistes i consumir els recursos de la API al seu gust._

# Qui?

Alumne:
- [Roger Forner Fabre](https://rogerforner.com)

Professors:
- Gonçal Verge Arnau
- Jaume Ramos Prades
- Javier Sancho Fabregat
- Quique Lorente Fuertes
- Santiago Sabaté Sanz
- Sergi Tur Badenas
