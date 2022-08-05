const execShPromise = require("exec-sh").promise;

let fs = require("fs");

const projects = [
  /*{ name: "202210_S1_E1_OlimpicosInvierno_Front" },*/
  { name: "202210_S1_E2_CocinasMundo_Front" },
  { name: "202210_S1_E3_SitiosTuristicos_Front" },
  { name: "202210_S1_E4_MuseoArteModerno_Front" },
  { name: "202210_S1_E5_AutosClasicos_Front" },
  { name: "202210_S2_E1_MundialesFutbol_Front" },
  { name: "202210_S2_E2_LigaAjedrez_Front" },
  { name: "202210_S2_E3_Discomovil_Front" },
  { name: "202210_S2_E4_ParqueAutomotor_Front" },
  { name: "202210_S2_E5_Agenda_Front" },
  { name: "202210_S3_E1_Musica_Front" },
  { name: "202210_S3_E2_Trekking_Front" },
  { name: "202210_S3_E3_DogSpa_Front" },
  { name: "202210_S3_E4_Kindergarten_Front" },
];

const createRepos = async () => {
  let out;
  try {
    for (const project of projects) {
      const jenkinsFile = getJenkinsFile(project.name);
      const sonarFile = getSonarFile(project.name);

      fs.writeFileSync("Jenkinsfile", jenkinsFile);
      fs.writeFileSync("sonar-project.properties", sonarFile);

      let command1 = `hub create Uniandes-isis2603/${project.name}`;
      out = await execShPromise(command1, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }

  console.log("out: ", out.stdout, out.stderr);
};

const updateRepos = async () => {
  let out;
  try {
    for (const project of projects) {
      const jenkinsFile = getJenkinsFile(project.name);
      const sonarFile = getSonarFile(project.name);

      fs.writeFileSync("Jenkinsfile", jenkinsFile);
      fs.writeFileSync("sonar-project.properties", sonarFile);

      let command1 = `git remote rm origin &&
        git remote add origin git@github.com:Uniandes-isis2603/${project.name}.git &&
        echo ".dummyfile" > .dummyfile &&
        git add . &&
        git commit -m "Update Jenkinsfile" &&
        git push origin master`;

      out = await execShPromise(command1, true);
    }
  } catch (e) {
    console.log("Error: ", e);
    console.log("Stderr: ", e.stderr);
    console.log("Stdout: ", e.stdout);
    return e;
  }

  console.log("out: ", out.stdout, out.stderr);
};

//createRepos();
updateRepos();

function getSonarFile(repo) {
  const content = `sonar.host.url=http://157.253.238.75:8080/sonar-isis2603/
  sonar.projectKey=${repo}:sonar
  sonar.projectName=${repo}
  sonar.projectVersion=1.0
  sonar.sources=src/app
  sonar.test=src/app
  sonar.test.inclusions=**/*.spec.ts
  sonar.exclusions=**/*.module.ts, **/utils/**
  sonar.ts.tslint.configPath=tslint.json
  sonar.javascript.lcov.reportPaths=coverage/front/lcov.info
  sonar.testExecutionReportPaths=reports/ut_report.xml`;
  return content;
}

function getJenkinsFile(repo) {
  const content = `pipeline {
    agent any
    environment {
       GIT_REPO = '${repo}'
       GIT_CREDENTIAL_ID = 'de5cd571-10da-4034-8ba8-af99beef4b14'
       SONARQUBE_URL = 'http://172.24.100.52:8082/sonar-isis2603'
    }
    stages {
       stage('Checkout') {
          steps {
             scmSkip(deleteBuild: true, skipPattern:'.*\\\\[ci-skip\\\\].*')


             git branch: 'master',
                credentialsId: env.GIT_CREDENTIAL_ID,
                url: 'https://github.com/Uniandes-isis2603/' + env.GIT_REPO
          }
       }
       stage('Git Analysis') {
          // Run git analysis
          steps {
             script {
                docker.image('gitinspector-isis2603').inside('--entrypoint=""') {
                   sh '''
                      mkdir -p ./reports/
                      datetime=$(date +'%Y-%m-%d_%H%M%S')
                      gitinspector --file-types="cs,js,asax,ascx,asmx,aspx,html,fs,ts" --format=html --RxU -w -T -x author:Bocanegra -x author:estudiante > ./reports/index.html
                   '''
                }
             }
             withCredentials([usernamePassword(credentialsId: env.GIT_CREDENTIAL_ID, passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                sh('git config --global user.email "ci-isis2603@uniandes.edu.co"')
                sh('git config --global user.name "ci-isis2603"')
                sh('git add ./reports/index.html')
                sh('git commit -m "[ci-skip] GitInspector report added"')
                sh('git pull https://\${GIT_USERNAME}:\${GIT_PASSWORD}@github.com/Uniandes-isis2603/\${GIT_REPO} master')
                sh('git push https://\${GIT_USERNAME}:\${GIT_PASSWORD}@github.com/Uniandes-isis2603/\${GIT_REPO} master')
             }
          }
       }
       stage('Build') {
          // Build app
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      npm i -s
                      npm i typescript@4.6.2
                      ng build
                   '''
                }
             }
          }
       }
      stage('Test') {
          steps {
             script {
                docker.image('citools-isis2603:latest').inside('-u root') {
                   sh '''
                      ng test --watch=false --code-coverage true
                      npm run sonar
                   '''
                }
             }
          }
       }
       stage('Static Analysis') {
          // Run static analysis
          steps {
             sh '''
                docker run --rm -u root -e SONAR_HOST_URL=\${SONARQUBE_URL} -v \${WORKSPACE}:/usr/src sonarsource/sonar-scanner-cli:4.3
             '''
          }
       }
    }
    post {
       always {
          // Clean workspace
          cleanWs deleteDirs: true
       }
    }
  }
  `;
  return content;
}
