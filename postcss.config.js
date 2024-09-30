module.exports = {
    plugins: [
        require('@fullhuman/postcss-purgecss')({
            content: ['./**/*.html', './**/*.js'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}
