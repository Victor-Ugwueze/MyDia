const iconbar = document.querySelector('#menu-icon');

iconbar.addEventListener('click',function(){
   let a =  document.querySelector('#left-section');
   a.classList.contains('show') ? a.classList.remove('show') :
   a.classList.add('show')
    console.log("yes",a);
});

[...document.querySelectorAll('.nav-it')].forEach((element)=>{
    element.addEventListener('click',function(){
        let el = document.querySelector('.nav-it.active');
        let all = document.querySelectorAll('.nav-it');
        // console.log(el,all);
        //Change Active Navigation tab
        SelectElement(this,[...all],'active');

        //Select tab content
        el = document.querySelector('#main-section #'+this.dataset.target);
        all = document.querySelectorAll('.tab-pane');
        SelectElement(el,[...all],'selected');
    })
})

/*
Remove class from the current element and add class to another element
 @param  Element to add class
 @param Array of Elements to remove class
 @param className to add or remove
*/
function SelectElement(toAddClass,toRemoveclass,className){
    toRemoveclass.length<2 ? toRemoveclass[0].classList.remove(className) :
    toRemoveclass.forEach((element)=>{
        if(element.classList.contains(className)) element.classList.remove(className)
        return;
    });
    toAddClass.classList.add(className);
}