I use the same React app for both Web App project and DevOps project.

## Deployed website on Azure
https://msa-2020-07-devops.azurewebsites.net 

## Description of the build & release pipelines for DevOps project
- Build pipeline
  - set trigger to master (runs every time there's a change in master branch)
  - install Node.js
  - npm install and build (build the React app into the build folder)
  - archive the build folder into a zip file (create the artifact)
  - publish the artifact

- Release pipeline
  - obtain the artifact from the build pipeline
  - enable the Continuous deployment trigger for master branch (automatically release every time a new build from master branch is available)
  - deploy to the Azure App Service (a remote server hosts the app so that everyone can visit it now)
