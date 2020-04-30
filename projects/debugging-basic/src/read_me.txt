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
LOGICAL ERROR:
here when we click to delete server we can delete server except last server or clicked server not deleted
this is not showing error but our logic is different
we can debug this error using chrome debugger extension(developer tool) using on click function

goto => source->main.bundle.js and serch the function
    or
goto => source->(ctrl+p) and type app.component.ts -> find function
and click to debug start from perticular line number 

here we are deleting index+1 item from the server array 

so we can fix this error according to our logic

-------------------------------------------------------
debug usin angular-augury extention developer tool

install angular augury in chrome browser and reload application and debug (component, appModule, dependecies etc)


----------------- Component Lifecycle ----------------------
ngOnChange          : Called after a bound input property changes
ngOnInit            : Called once the component is initialized
ngDoCheck           : Called during every change dectection run
ngAfterContentInit  : Called every time the projected content has been checked
ngAfterViewInit     : Called after the component's view (and child views) has been initialized
ngAfterViewChecked  : Called every time the view (and child view) has been checked
ngOnDestroy         : Called once the component is about to be destroyed


* indicate the that this is structoral directive like *ngIf, *ngFor etc.
