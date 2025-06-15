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
        sh 'ls -al build || echo "build not found"'
      }
    }
    stage('Copy build to main workspace') {
      steps {
        sh 'cp -r build ../build'
      }
    }

    stage('Lưu dist làm artifact') {
      steps {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
      }
    }
  }
}
