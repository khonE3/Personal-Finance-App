pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'gotjitag/personal-finance-app'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    dir('my-app') {
                        sh 'curl -fsSL https://bun.sh/install | bash || true'
                        sh 'export PATH="$HOME/.bun/bin:$PATH" && bun install'
                    }
                }
            }
        }

        stage('Lint') {
            steps {
                script {
                    dir('my-app') {
                        sh 'export PATH="$HOME/.bun/bin:$PATH" && bun run lint'
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    dir('my-app') {
                        sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin'
                        sh "docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                        sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh "docker rmi ${DOCKER_IMAGE}:${BUILD_NUMBER} || true"
                    sh "docker rmi ${DOCKER_IMAGE}:latest || true"
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
        always {
            cleanWs()
        }
    }
}
