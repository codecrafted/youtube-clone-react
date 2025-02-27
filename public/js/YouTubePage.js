
//***************************** CAMBIO ENTRE EL MENU-LEFT Y EL MENU-LEFT-SMALL
const menuBurger = document.querySelector('.icon-menu-left-burger');
const menuComplet = document.querySelector('.menu-left');
const menuSmall = document.querySelector('.menu-left-small');
const content = document.querySelector('.main-content');
menuBurger.addEventListener('click', changeMenuComplet);

const anchorForMenus = window.matchMedia('screen and (min-width: 768px)')
validationForMenus()
anchorForMenus.addEventListener('change', validationForMenus)

const anchorForContent = window.matchMedia('screen and (min-width: 1400px)')
validationForContent()
anchorForContent.addEventListener('change', validationForContent)

function changeMenuComplet() {
    menuComplet.classList.toggle('hidden')
    if (anchorForMenus.matches) {
        menuSmall.classList.toggle('hidden')
    }
    if (anchorForContent.matches) {
        content.classList.toggle('marginLeftLarge')
    }
}

function validationForMenus() {
    if (anchorForMenus.matches) {
        if (menuComplet.classList.contains('hidden')) {
            menuSmall.classList.remove('hidden')
        } else {
            menuSmall.classList.add('hidden')
        }
    } else {
        menuSmall.classList.add('hidden')
    }
}

function validationForContent() {
    if (anchorForContent.matches) {
        if (menuComplet.classList.contains('hidden')) {
            content.classList.remove('marginLeftLarge')
        } else {
            content.classList.add('marginLeftLarge')
        }
    } else {
        content.classList.remove('marginLeftLarge')
        menuComplet.classList.add('hidden')
        menuSmall.classList.remove('hidden')
    }

}


//***************************** DESPLIEGUE DE LOS MENÚS-RIGHT AND MORE
const menuCrear = document.querySelector('.menu-crear');
const menuApps = document.querySelector('.menu-apps');
const menuNotifications = document.querySelector('.menu-notifications');
const menuProfile = document.querySelector('.menu-profile');

const iconCrear = document.querySelector('.icon-menu-righ.icon-video_call');
const iconApps = document.querySelector('.icon-menu-righ.icon-stack');
const iconNotifications = document.querySelector('.icon-menu-righ.icon-bell');
const iconProfile = document.querySelector('.icon-menu-righ.image-profile');

iconCrear.addEventListener('click', deploy1);
iconApps.addEventListener('click', deploy2);
iconNotifications.addEventListener('click', deploy3);
iconProfile.addEventListener('click', deploy4);

function deploy1() {
    deployMenusRight(1);
}
function deploy2() {
    deployMenusRight(2);
}
function deploy3() {
    deployMenusRight(3);
}
function deploy4() {
    deployMenusRight(4);
}

function deployMenusRight(menuType) {
    removeMenusMore(menusMoreContent)
    removeMenusMore(menusMoreNotifi)
    switch (menuType) {
        case 1:
            menuCrear.classList.toggle('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
        case 2:
            menuApps.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
        case 3:
            menuNotifications.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuProfile.classList.add('hidden');
            break;
        case 4:
            menuProfile.classList.toggle('hidden');
            menuCrear.classList.add('hidden');
            menuApps.classList.add('hidden');
            menuNotifications.classList.add('hidden');
            break;
    }
}

function removeMenusRight() {
    menuCrear.classList.add('hidden');
    menuApps.classList.add('hidden');
    menuNotifications.classList.add('hidden');
    menuProfile.classList.add('hidden');
}


//********************************************** BARRA DE BUSCAR
const barraBuscar = document.querySelector('.search-bar');
const iconBuscar = document.querySelector('.icon-menu-righ.icon-search');
const iconBack = document.querySelector('.iconBack');

const anchorForSearch = window.matchMedia('screen and (min-width: 600px)'); //ver
validation();
anchorForSearch.addEventListener('change', validation);

function validation() {
    if (anchorForSearch.matches) {
        iconBuscar.removeEventListener('click', changeSearchBar);
        barraBuscar.classList.remove('hidden');
    } else {
        iconBuscar.addEventListener('click', changeSearchBar);
        barraBuscar.classList.add('hidden');
    }
}

function changeSearchBar() {
    if (barraBuscar.classList.contains('hidden')) {
        iconBuscar.removeEventListener('click', changeSearchBar);
        iconBack.addEventListener('click', changeSearchBar);
    } else {
        iconBuscar.addEventListener('click', changeSearchBar);
        iconBack.removeEventListener('click', changeSearchBar);
    }
    barraBuscar.classList.toggle('hidden');
}


//********************************************** MORE OPCTION
const menusMoreContent = document.querySelectorAll('.menu-more-options-content')
const iconMoreContent = document.querySelectorAll('.more-options-content')

iconMoreContent.forEach((icon, i) => {
    icon.addEventListener('click', () => deployMenuMoreContent(i))
});

const containers1 = window.matchMedia('screen and (max-width: 576px)')
containers1.addEventListener('change', container1)
container1()

const containers2 = window.matchMedia('screen and (min-width: 576px)')
containers2.addEventListener('change', container2)
container2()

const containers3 = window.matchMedia('screen and (min-width: 992px)')
containers3.addEventListener('change', container3)
container3()

const containers4 = window.matchMedia('screen and (min-width: 1200px)')
containers4.addEventListener('change', container4)
container4()

function container1() {
    if (containers1.matches) {
        assignClassFinish(1)
    }
}
function container2() {
    if (containers2.matches) {
        assignClassFinish(2)
    }
}
function container3() {
    if (containers3.matches) {
        assignClassFinish(3)
    }
}
function container4() {
    if (containers4.matches) {
        assignClassFinish(4)
    }
}

function assignClassFinish(containers) {
    if (containers === 1) {
        menusMoreContent.forEach(container => {
            container.classList.add('finish');
        });
    } else {
        menusMoreContent.forEach(container => {
            container.classList.remove('finish');
        });
        for (let i = containers - 1; i < menusMoreContent.length; i += containers) {
            menusMoreContent[i].classList.add('finish');
        }
    }
}

function deployMenuMoreContent(i) {
    removeMenusRight()
    removeMenusMore(menusMoreNotifi)
    if (menusMoreContent[i].classList.contains('deploy')) {
        removeMenusMore(menusMoreContent)
    } else {
        removeMenusMore(menusMoreContent)
        menusMoreContent[i].classList.add('deploy');
    }
}


//********************************************** MORE OPCTION NOTIFICATION
const menusMoreNotifi = document.querySelectorAll('.menu-more-options-notification')
const iconMoreNotifi = document.querySelectorAll('.more-options-notification')

iconMoreNotifi.forEach((icon, i) => {
    icon.addEventListener('click', () => {
        //console.log(i);
        if (menusMoreNotifi[i].classList.contains('deploy')) {
            removeMenusMore(menusMoreNotifi);
        } else {
            removeMenusMore(menusMoreNotifi);
            menusMoreNotifi[i].classList.add('deploy');
        }
    })
});


//********************************************** REMOVE MENUS MORE
function removeMenusMore(menus) {
    menus.forEach(menu => {
        menu.classList.remove('deploy');
    });
}