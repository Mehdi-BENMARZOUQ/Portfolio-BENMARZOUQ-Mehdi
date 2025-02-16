const path = require("path");

module.exports = function override(config, env) {
    // Add file-loader for audio files
    config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
            loader: "file-loader",
            options: {
                name: "[name].[ext]",
                outputPath: "public/songs", // Output folder for audio files
            },
        },
    });

    return config;
};