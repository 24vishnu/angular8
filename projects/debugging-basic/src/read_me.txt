for bootstrap we need to add 
        "styles": [
                ....
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
                ...
            ],
    in angular.json file "root": "projects/debugging-basic", projects
-------------------------
SYNTAX ERROR:
1. In this when we click on add server then an error occures
        "AppComponent.html:5 ERROR TypeError: Cannot read property 'push' of undefined"
    becouse app.component.ts we declear "servers" variable but we does not define the type of variable
    so we have define type of the server variable
2. now we define the type of variable as emplty array like
        server = []
    array have propeties name push(), pop(), sort() fill() etc.

    so after that error is handled

------------------------