import { exec } from 'child_process';

export default () => {
    exec('cd preview-gui && ..\\bin\\nodejs\\npx.cmd vite --open && exit', (error, stdout, stderr) => {
        console.log({ error, stdout, stderr })
    })
}