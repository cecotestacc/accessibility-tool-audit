pipeline {
    agent any
    stages {
        stage('QualiBooth Accessibility Scan') {
            steps {
                script {
                    def repoName = env.GIT_URL
                        .replaceAll(/.*\/([^\/]+\/[^\/]+?)(\.git)?$/, '$1')
                    def branchName = env.GIT_BRANCH
                        ?.replace('origin/', '') ?: 'main'
                    sh """
                      docker run --rm \\
                        -v "${WORKSPACE}:/workspace" \\
                        -e QUALIBOOTH_ORG_UUID="${env.QUALIBOOTH_ORG_UUID}" \\
                        -e QUALIBOOTH_REPO="${repoName}" \\
                        -e QUALIBOOTH_SHA="${env.GIT_COMMIT}" \\
                        -e QUALIBOOTH_BRANCH="${branchName}" \\
                        -e QUALIBOOTH_API_URL="${env.QUALIBOOTH_API_URL ?: 'https://pipelinein.dev.qualibooth.com'}" \\
                        -e QUALIBOOTH_PROJECT_TYPE="${env.QUALIBOOTH_PROJECT_TYPE ?: 'react'}" \\
                        -e QUALIBOOTH_SCAN_PATHS="${env.QUALIBOOTH_SCAN_PATHS ?: 'react-demo'}" \\
                        ghcr.io/qualibooth/qualibooth-action:latest
                    """
                }
            }
        }
    }
}
