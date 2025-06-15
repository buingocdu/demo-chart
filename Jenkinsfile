pipeline {
    agent any

    tools {
        nodejs "NodeJS 18"
    }

    stages {
        stage('Install Node/NPM manually') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npm install'
            }
        }

        stage('Build project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
