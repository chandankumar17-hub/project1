pipeline {
    agent { label 'linux_git' }

    environment {
        GIT_REPO = 'https://github.com/chandankumar17-hub/project1.git'
        BRANCH = 'main'
    }
    
    stages {
        stage('Clean Workspace') {
            steps {
                echo 'CLeaning workspace'
                deleteDir()
            }
        }
        stage('Lint') {
            steps {
                echo "Cloning the repo from Gitlab ........."
                git branch: "${BRANCH}",
                    url: "${GIT_REPO}",
                    credentialsId: '0d0c8abc-bbeb-4c7f-aca9-28fc3f2a9e7d'
            }
        }
        stage('Build') {
            steps {
                sh 'dos2unix build.sh'
                sh 'chmod +x build.sh'
                sh 'bash build.sh'
            }
        }
    }
}
post {
        always {
        unstable {
            echo 'Build marked as UNSTABLE!'
            emailext (
                subject: "Build Unstable: ${env.JOB_NAME} [#${env.BUILD_NUMBER}]",
                body: """<p>Build became <b>UNSTABLE</b> in job <b>${env.JOB_NAME}</b> [#${env.BUILD_NUMBER}]</p>""",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
        failure {
            echo 'Build failed!'
            emailext (
                subject: "Build Failed: ${env.JOB_NAME} [#${env.BUILD_NUMBER}]",
                body: """<p>Build failed in job <b>${env.JOB_NAME}</b> [#${env.BUILD_NUMBER}]</p>""",
                recipientProviders: [[$class: 'DevelopersRecipientProvider']]
            )
        }
    }
