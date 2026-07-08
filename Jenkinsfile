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
                        --volumes-from jenkins \\
                        -e GITHUB_WORKSPACE="${WORKSPACE}" \\
                        -e QUALIBOOTH_ORG_UUID="e7d4b02c-bca8-463c-972f-2770f741ea30" \\
                        -e QUALIBOOTH_REPO="${repoName}" \\
                        -e QUALIBOOTH_SHA="${env.GIT_COMMIT}" \\
                        -e QUALIBOOTH_BRANCH="${branchName}" \\
                        -e QUALIBOOTH_PROJECT_TYPE="${env.QUALIBOOTH_PROJECT_TYPE ?: 'html'}" \\
                        -e QUALIBOOTH_SCAN_PATHS="${env.QUALIBOOTH_SCAN_PATHS ?: '.'}" \\
                        ghcr.io/qualibooth/qualibooth-action:latest
                    """
                }
            }
        }
    }
}
