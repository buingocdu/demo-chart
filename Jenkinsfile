pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }

    stages {

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive artifacts') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
