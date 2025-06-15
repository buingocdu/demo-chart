pipeline {
  agent any

  environment {
    DEPLOY_DIR = 'D:\\WORKING\\ww\\my-react-app'
  }

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
      }
    }

    stage('Copy build vào thư mục deploy trên Windows') {
      steps {
        // Sử dụng bat thay vì sh cho Windows
        bat """
        if exist "%DEPLOY_DIR%" (
          rmdir /s /q "%DEPLOY_DIR%"
        )
        mkdir "%DEPLOY_DIR%"
        xcopy /E /I /Y build "%DEPLOY_DIR%"
        """
      }
    }

    stage('Thông báo hoàn thành') {
      steps {
        echo "✅ Đã deploy thành công! Mở http://localhost:3000/ để xem kết quả."
      }
    }
  }
}
