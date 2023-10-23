import { exec } from 'child_process';

export default () => {
    exec('cd preview-gui && ..\\bin\\nodejs\\vite.cmd --open && exit', (error, stdout, stderr) => {
        console.log({ error, stdout, stderr })
    })
}