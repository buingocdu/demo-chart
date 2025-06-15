pipeline {
  agent any

  stages {
    stage('⚙ Test Stage') {
      steps {
        echo 'Jenkins đang chạy đúng pipeline'
      }
    }

    stage('Run inside NodeJS container') {
      steps {
        script {
          docker.image('node:18').inside {
            sh 'node -v'
            sh 'npm -v'
            sh 'npm install'
            sh 'npm run build'

            echo "📁 Kiểm tra thư mục dist:"
            sh 'ls -al dist || echo "dist not found"'

            // Lưu artifact ra ngoài container
            sh 'cp -r dist $WORKSPACE/'
          }
        }
      }
    }

    stage('Lưu dist làm artifact') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }
}
