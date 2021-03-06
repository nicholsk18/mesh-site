const mix = require('laravel-mix');
const browsersupport = require("./mesh-src/browserslistrc.js");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


//JS Files
mix.js([
    'resources/js/app.js',
    'resources/js/docs.js'
], 'public/js/app.js')


//Builder File
mix.js('resources/js/builder.js', 'public/js')
    .babel('public/js/builder.js', 'public/js/builder.es5.js')

//Sass Files
mix.sass('resources/sass/app.scss', 'public/css')
    .sass('mesh-src/src/mesh-grid.scss', 'public/css')
    .sass('mesh-src/src/mesh.scss', 'public/css').options({
        processCssUrls: false
    })

//Prod
if (mix.inProduction()) {
    mix.babel('public/js/app.js', 'public/js/app.js').babel('public/js/builder.js', 'public/js/builder.js')
    mix.options({
        autoprefixer: {
            options: {
                overrideBrowserslist: browsersupport.overrideBrowserslist
            }
        }
    })
}
    
//BrowserSync
mix.browserSync('meshcss.com')


