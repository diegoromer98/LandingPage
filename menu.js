const navOverlay = document.querySelector('.nav__overlay');
let currentDropdown = navOverlay;

navOverlay.classList.toggle('nav__overlay--show');


navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;

    if( isActive(currentElement, 'nav__parent') ){

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);

        if(window.innerWidth < 768){

            let height = (subMenu.clientHeight == 0) 
                        ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${height}px`;
        }else{

            if( !isActive(subMenu, 'nav__inner--show') ){
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show');

            currentDropdown = subMenu;

        }

    }
    
});

