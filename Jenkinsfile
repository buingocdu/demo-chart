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
        echo "📁 Kiểm tra thư mục build:"
        sh 'ls -al build || echo "build not found"'

        // 🔐 Lưu thư mục build vào stash
        stash includes: 'build/**', name: 'react-build'
      }
    }

    stage('Copy build to main workspace') {
      steps {
        // 📥 Lấy lại build từ stash
        unstash 'react-build'
        sh 'ls -al build'
      }
    }

    stage('Lưu dist làm artifact') {
      steps {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
      }
    }
  }
}
