pipeline {
    agent any

    environment {
        // ECR 레포지토리 URL과 이미지 이름 설정
        ECR_REGISTRY = "637341921879.dkr.ecr.ap-northeast-2.amazonaws.com"
        ECR_REPOSITORY = "mhko/wedding"
        IMAGE_TAG = "latest"
        DOCKER_IMAGE_NAME = "mhko/wedding"
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
                sh "docker build -t ${DOCKER_IMAGE_NAME} ."
                
                // 이미지에 ECR 태그 지정
                sh "docker tag ${DOCKER_IMAGE_NAME}:${IMAGE_TAG} ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}"
            }
        }

        stage('Test') {
            steps {
                // 테스트 실행 (예시, 실제 테스트 명령어로 대체 필요)
                sh "docker run --rm ${DOCKER_IMAGE_NAME}:${IMAGE_TAG} echo 'Tests passed'"
            }
        }

        stage('Push to ECR') {
            steps {
                script {
                    // AWS ECR 로그인
                    sh """
                        aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin ${ECR_REGISTRY}
                    """
                    
                    // ECR에 이미지 푸시
                    sh "docker push ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG}"
                }
            }
        }
    }
    
    post {
        always {
            // 항상 실행되는 작업
            sh "docker logout ${ECR_REGISTRY}"
            
            // 로컬 이미지 정리
            sh """
                docker rmi ${DOCKER_IMAGE_NAME}:${IMAGE_TAG} || true
                docker rmi ${ECR_REGISTRY}/${ECR_REPOSITORY}:${IMAGE_TAG} || true
            """
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