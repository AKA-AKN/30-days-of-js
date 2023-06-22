const inputs=document.querySelectorAll('.controls input');
console.log(inputs);

function changeUpdate(){
    const suffix=this.dataset.sizing ||'';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    console.log(this.name);
}
inputs.forEach(input=>input.addEventListener('change',changeUpdate));
inputs.forEach(input=>input.addEventListener('mousemove',changeUpdate));
