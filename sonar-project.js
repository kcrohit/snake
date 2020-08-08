const scanner = require('sonarqube-scanner');
     scanner({
       serverUrl: 'http://35.193.140.155/:9000',
       options : {
       'sonar.sources': '.',
       //'sonar.inclusions' : '.' // Entry point of your code
       }
     }, () => {});
