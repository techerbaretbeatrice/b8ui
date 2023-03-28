import babel from 'rollup-plugin-babel'
import css from "rollup-plugin-import-css";
import jsx from 'rollup-plugin-jsx'

// rollup.config.js
const config = {
    input: 'src/lib/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'b8ui',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**",
            plugins: [
                [
                    "react-css-modules"
                ]
            ]
        }),
        css()
    ]
}
export default config