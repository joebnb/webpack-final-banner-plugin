const PLUGIN_NAME = 'FinalBannerPug';

class FinalBannerPug {
    constructor(options = {}) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync(PLUGIN_NAME, (
            compilation, callback
        ) => {
            let filename = compilation.outputOptions.filename;
            compilation.assets[filename]._value = this.options.banner + compilation.assets[filename]._value;
            callback()
        });
    }
}

module.exports = FinalBannerPug;