pipeline {
  agent any

  stages {
    stage('Kiểm tra') {
      steps {
        echo '✅ Pipeline đang hoạt động'
      }
    }

    stage('Build trong container NodeJS') {
      agent {
        docker {
          image 'node:18'
        }
      }
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npm install --legacy-peer-deps'
        sh 'CI=false npm run build'
        echo "📁 Kiểm tra thư mục dist:"
        sh 'ls -al dist || echo "dist not found"'
      }
    }

    stage('Lưu dist làm artifact') {
      steps {
        archiveArtifacts artifacts: 'dist/**', fingerprint: true
      }
    }
  }
}
