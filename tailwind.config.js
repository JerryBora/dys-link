module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                'neon-pink': '#ff00ff',
                'neon-blue': '#00ffff',
                'dark-bg': '#0a0a0a',
            },
            boxShadow: {
                'neon': '0 0 15px #ff00ff, 0 0 25px #00ffff',
            },
        },
    },
    plugins: [],
}