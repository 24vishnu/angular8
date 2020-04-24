1. install bootstrap using following command
    npm install --savec bootstrap
2. by default it is not include in angular_cli file so we need to add manually using following process:
    open "angular.json" file and goto the app-> styles and add the bootstrap.css file path as "node_modules/bootstrap/dist/bootstrap.css" 

    if it is not working then import he following bootstrap file path in styles.css file 
        @import "~bootstrap/dist/css/bootstrap.css";

3. create a file name header and create a folder in header file name header.component.ts
    in header.component.ts file we create and export a class name "HeaderComponent" and we have to add component decorator 