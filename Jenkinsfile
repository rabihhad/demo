pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/rabihhad/demo.git'
            }
        }
        stage('Build') {
            steps {
                echo '🔨 Compilation en cours...'
            }
        }
        stage('Test') {
            steps {
                echo '🧪 Tests en cours...'
            }
        }
        stage('Deploy') {
            steps {
                echo '🚀 Déploiement terminé !'
            }
        }
    }
}
