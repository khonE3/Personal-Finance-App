pipeline {
    agent any

    environment {
        // เปลี่ยนเป็น ชื่อ image ของคุณ
        DOCKER_IMAGE = 'your-dockerhub-username/nextjs-app'
        // Credential ID ที่ตั้งใน Jenkins
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Image') {
            steps {
                script {
                    dir('my-app') {
                        // Build Docker image using the Dockerfile in my-app directory
                        // Note: Dockerfile uses oven/bun:1 base image
                        sh "docker build -t ${DOCKER_IMAGE}:${BUILD_NUMBER} ."
                    }
                }
            }
        }

        stage('Login & Push') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS_ID, usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh "echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                        
                        // Optional: Push as latest
                        sh "docker tag ${DOCKER_IMAGE}:${BUILD_NUMBER} ${DOCKER_IMAGE}:latest"
                        sh "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Cleanup') {
            steps {
                script {
                    sh "docker rmi ${DOCKER_IMAGE}:${BUILD_NUMBER}"
                    sh "docker rmi ${DOCKER_IMAGE}:latest"
                }
            }
        }
    }
    
    post {
        always {
             // Basic cleanup just in case
            cleanWs()
        }
    }
}
