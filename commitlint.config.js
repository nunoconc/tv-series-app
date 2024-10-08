module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'header-max-length': [2, 'always', 100],
        'scope-enum': [
            2,
            'always',
            [
                // workspace packages
                'src',
            ],
        ],
        'type-enum': [
            2,
            'always',
            [
                'build',
                'breakingchange',
                'chore',
                'ci',
                'docs',
                'feat',
                'fix',
                'improvement',
                'perf',
                'refactor',
                'revert',
                'style',
                'test',
            ],
        ],
    },
};
