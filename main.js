const veiwList = ()=>{
    document.querySelector('.list').classList.add('addDiv');
    document.querySelector('.list').classList.remove('removeDiv');
    document.querySelector('.overlay').classList.remove('d-none');

}
const hideList = ()=>{
    document.querySelector('.list').classList.add('removeDiv');
    document.querySelector('.list').classList.remove('addDiv');
    document.querySelector('.overlay').classList.add('d-none');
}
document.querySelector('svg').onclick=veiwList;
document.querySelector('.svgDiv svg').onclick=hideList;
