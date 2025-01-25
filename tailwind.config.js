module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "neon-green": "#39ff14", // Neon green
                "neon-pink": "#ff00ff",  // Neon pink
                "neon-blue": "#00ffff",  // Neon blue
                "neon-purple": "#a020f0", // Neon purple
            },
            boxShadow: {
                "neon-green": "0 0 10px #39ff14",
                "neon-pink": "0 0 10px #ff00ff",
            },
        },
    },
    plugins: [],
};
