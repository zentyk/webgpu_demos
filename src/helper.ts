export const CheckWebGpu = () => {
    let result = 'Great, your browser supports WebGPU!';

    if(!navigator.gpu) {
        result = `Your current browser does not support WebGPU! Make sure you are on a system with WebGPU enabled. 
        Currently, WebGPU is supported in <a href="https/google.com/chrome/canary">Chrome Canary</a> with the flag "enable-unsafe-webgpu" enabled`;
    }

    const canvas = document.getElementById('canvas-webgpu') as HTMLCanvasElement;
    if(canvas){
        const div = document.getElementsByClassName('item2')[0] as HTMLDivElement;

        canvas.width = div.offsetWidth;
        canvas.height = div.offsetHeight;

        function windowResize(){
            canvas.width = div.offsetWidth;
            canvas.height = div.offsetHeight;
        };
        window.addEventListener('resize', windowResize);
    }
    return result;
}