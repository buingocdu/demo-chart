pipeline {
  agent any

  environment {
    // Thư mục chứa source và cũng là nơi chứa build sau khi build xong
    WORKSPACE_DIR = 'D:\\WORKING\\ww\\my-react-app'
    DEPLOY_DIR = 'D:\\DEPLOY\\my-react-app' // thư mục đích để copy build đến
  }

  stages {
    stage('Kiểm tra pipeline') {
      steps {
        echo '✅ Pipeline đang hoạt động'
      }
    }

    stage('Build trong container NodeJS') {
      agent {
        docker {
          image 'node:18'
          args "-v ${env.WORKSPACE_DIR.replaceAll('\\\\', '/') }:/app"
        }
      }
      steps {
        dir('/app') {
          sh 'node -v'
          sh 'npm -v'
          sh 'npm install --legacy-peer-deps'
          sh 'CI=false npm run build'
          sh 'ls -al build || echo "build not found"'
        }
      }
    }

    stage('Copy build sang thư mục deploy') {
      steps {
        bat """
        if exist "%DEPLOY_DIR%" (
          rmdir /s /q "%DEPLOY_DIR%"
        )
        mkdir "%DEPLOY_DIR%"
        xcopy /E /I /Y "%WORKSPACE_DIR%\\build" "%DEPLOY_DIR%"
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
