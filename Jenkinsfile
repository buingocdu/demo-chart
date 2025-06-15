pipeline {
    agent any

    tools {
        nodejs "NodeJS 18" // Đảm bảo Jenkins đã cài NodeJS tên như vậy
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'feature/test-cicd', url: 'https://github.com/buingocdu/demo-chart.git'
            }
        }

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

        stage('Archive Build') {
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
}
