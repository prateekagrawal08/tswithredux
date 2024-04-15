export {}
const coder = {

}

Object.create(coder);

function debounce(func:any, delay:any){
  let timer:any;
  return function(){
    clearTimeout(timer);
    timer=setTimeout(func)
  }  
}