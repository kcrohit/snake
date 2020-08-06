node ('snake-app'){  
    def app
    stage('Cloning Git') {
        /* Let's make sure we have the repository cloned to our workspace */
       checkout scm
    }  
    

    
    stage('Build-and-Tag') {
    /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("kcrohit/snake:app1")
    }
    stage('Post-to-dockerhub') {
    
     docker.withRegistry('https://registry.hub.docker.com', 'dockerid') {
            app.push("latest")
        			}
         }
   
  
    
    stage('Pull-image-server') {
         sh "cd /home/jenkins/jenkins_workspace/workspace"
         sh "docker-compose down"
         sh "cd /home/jenkins/jenkins_workspace/workspace/snake1"
         sh "docker-compose up -d"	
      }
    
    
 
}
