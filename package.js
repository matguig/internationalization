Package.describe({
    "name"          : "matguig:internationalization",
    "version"       : "0.0.1",
    "summary"       : "This Package will help you to manage your meteor project internationalization.",
    "git"           : "https://bitbucket.org/meteormatthieu/internationalization",
    "documentation" : "README.md"
});

Package.onUse( function( api ) {
    api.versionsFrom( "1.5" );

    api.use( "ecmascript" );

    api.mainModule( "internationalization.js" );
});

Package.onTest( function( api ) {
    api.use( "ecmascript" );
    api.use( "tinytest" );
    api.use( "matguig:internationalization" );

    api.mainModule( "internationalization-tests.js" );
});
