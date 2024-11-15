pipeline {
    agent any

    environment {
        // ECR 레포지토리 URL과 이미지 이름 설정
        ECR_REGISTRY = "637341921879.dkr.ecr.ap-northeast-2.amazonaws.com/mhko/wedding"
        ECR_REPOSITORY = "wedding-app"
        IMAGE_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                // 소스 코드 체크아웃
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Docker 이미지 빌드
                sh "docker build -t ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG} ."
            }
        }

        stage('Test') {
            steps {
                // 테스트 실행 (예시, 실제 테스트 명령어로 대체 필요)
                sh "docker run --rm ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG} echo 'Tests passed'"
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    // AWS ECR 로그인
                    sh "aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin ${ECR_REGISTRY}"
                    // ECR에 이미지 푸시
                    sh "docker push ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}"
                }
            }
        }

        stage('Deploy') {
            steps {
                // Kubernetes에 배포 (예시, 실제 배포 명령어로 대체 필요)
                sh "kubectl set image deployment/wedding-app wedding-container=${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}"
            }
        }
    }

    post {
        always {
            // 항상 실행되는 작업
            sh "docker logout ${ECR_REGISTRY}"
        }
        success {
            // 파이프라인 성공 시 실행
            echo 'Pipeline succeeded!'
        }
        failure {
            // 파이프라인 실패 시 실행
            echo 'Pipeline failed!'
        }
    }
}