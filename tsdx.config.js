const babel = require('@babel/core');
const { terser } = require('rollup-plugin-terser');

let copyPlugin;
let bundleSizePlugin;

try {
    // Optional dependency used to copy declaration files into the build output
    copyPlugin = require('rollup-plugin-copy');
} catch (error) {
    console.warn('[tsdx.config] rollup-plugin-copy is not installed; declaration files will not be copied automatically.');
}

try {
    bundleSizePlugin = require('rollup-plugin-bundle-size');
} catch (error) {
    console.warn('[tsdx.config] rollup-plugin-bundle-size is not installed; bundle size reporting is disabled.');
}

const optionalChainPlugins = [
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
];

function createOptionalTransformPlugin() {
    return {
        name: 'transform-optional-chaining',
        async renderChunk(code, chunk) {
            const result = await babel.transformAsync(code, {
                filename: chunk.fileName,
                plugins: optionalChainPlugins,
                sourceMaps: true,
                babelrc: false,
                configFile: false,
                compact: false,
            });

            if (!result) {
                return null;
            }

            return {
                code: result.code,
                map: result.map || null,
            };
        },
    };
}

module.exports = {
    rollup(config, options = {}) {
        const terserIndex = config.plugins.findIndex((plugin) => plugin && plugin.name === 'terser');
        if (terserIndex >= 0) {
            // remove the default terser plugin so we can re-add it with modern syntax support
            config.plugins.splice(terserIndex, 1);
            const optionalTransformPlugin = createOptionalTransformPlugin();
            config.plugins.splice(terserIndex, 0, optionalTransformPlugin);
            const terserOptions = {
                sourcemap: true,
                output: { comments: false },
                compress: {
                    keep_infinity: true,
                    pure_getters: true,
                    passes: 10,
                },
                ecma: 2019,
                toplevel: options.format === 'cjs',
                warnings: true,
                numWorkers: 1,
            };
            config.plugins.splice(terserIndex + 1, 0, terser(terserOptions));
        }

        if (bundleSizePlugin) {
            config.plugins.push(bundleSizePlugin());
        }
        // copy declaration file over when the plugin is available
        if (copyPlugin) {
            config.plugins.push(copyPlugin({ targets: [{ src: 'src/index.d.ts', dest: 'dist' }] }));
        }
        return config;
    },
};
