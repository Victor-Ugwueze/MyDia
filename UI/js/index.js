
const toggleLoginForm = {
        init : function(){
            this.initalizeDomVars();
            this.bindDomVars();
        },
        initalizeDomVars: function(){
            this.selectLogin = document.querySelectorAll('.nav-item');
        },
        bindDomVars : function(){
            [...this.selectLogin].forEach((loginTuggleButton)=>{
                loginTuggleButton.addEventListener('click',this.changeForm)
            });
        },
        changeForm : function(){
            //select form tab
           const  hideFormElement = document.querySelector('.modal .active');
           SelectElement(this,[hideFormElement],'active'); 
           
           //Select Tab content
            const elements = document.querySelectorAll('.modal .tab-pane');
            const elementToshow = document.querySelector("#"+this.dataset.target);
           SelectElement(elementToshow,[...elements],'selected');
        }
}

/*
Remove class from the current element and add class to another element
 @param  Element to add class
 @param Array of Elements to remove class
 @param className to add or remove
*/
function SelectElement(toAddClass,toRemoveclass,className){
    toRemoveclass.length<2 ? toRemoveclass[0].classList.toggle(className) :
    toRemoveclass.forEach((element)=>{
        if(element.classList.contains(className)) element.classList.remove(className)
        return;
    });
    toAddClass.classList.toggle(className);
}
toggleLoginForm.init();