# Modules
1. Local modules - files in folders like sum.js 
2. Inbuilt modules in node like --> os, file system(fs), for more information (Npm.org)[https://www.npmjs.com/]
3. External packages/modules/third-party libraries --> npm --> node package manager (Npm.org)[https://www.npmjs.com/]


## How to install npm packages
 `npm install package-name`



 ## Difference between dependencies and devDevDependencies
 In Node.js projects, the dependencies and devDependencies are two distinct sections in the package.json file, each serving a different purpose:

 - Dependencies --> 
     - The dependencies section lists the packages that are required for the application to run in a production environment. These are the packages that your application relies on to function properly.


     - When someone installs your project using npm install --production or when deploying the application, only the packages listed under dependencies will be installed.



 - devDependencies -->
    - The devDependencies section includes packages that are necessary during the development phase but are not required for the application to run in production. 
  
    - These are typically tools, testing frameworks, or other utilities that help developers with tasks like testing, linting, or building the project.
  
    - When someone installs your project with the default npm install command, both dependencies and devDependencies are installed. However, if they use npm install --production, only the packages listed under dependencies are installed.




## Why we use ` npm init  ` or `npm init -y`

- npm init is a command in Node.js that is used to initialize a new Node.js project and create a package.json file. 
- 
-The package.json file is a metadata file for your project, and it contains important information such as project name, version, description, entry point, test command, repository, dependencies, and more.
 