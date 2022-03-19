import { build } from "esbuild";
import { glsl } from "esbuild-plugin-glsl";

build({
    entryPoints: ['./src/app.ts'],
    bundle: true,
    sourcemap : true,
    target : 'es2015',
    format:'esm',
    minify : true,
    outfile: './dist/js/app.js',
    tsconfig: './tsconfig.json',
    plugins: [
        glsl({
            minify: true,
        })
    ]
  }).catch(() => process.exit(1));