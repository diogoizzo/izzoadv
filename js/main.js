//Caputar Dom
const artigos = document.querySelector('.artigos');
const servicos = document.querySelector('.serviços');
const duvidas = document.querySelector('.duvidas');
const inputServiços = document.querySelector('#input-serviços');
const inputArtigos = document.querySelector('#input-artigos');
const inputDuvidas = document.querySelector('#input-duvidas');
const labelServiços = document.querySelector('#label-serviços');
const labelArtigos = document.querySelector('#label-artigos');
const labelDuvidas = document.querySelector('#label-duvidas');
const menu = document.querySelector('nav');
const imgMenu = document.querySelector('#img-menu');
//Fim da captura de Dom
//menu
function remover(obj1, label1, obj2, label2, obj3, label3) {
    obj1.classList.remove('menu-aberto');
    label1.classList.remove('menu-item-ativo');
    obj2.classList.remove('menu-aberto');
    label2.classList.remove('menu-item-ativo');
    if (obj3) {
        obj3.classList.remove('menu-aberto');
        label3.classList.remove('menu-item-ativo');
    }
}

function afundar(obj) {
    obj.parentElement.classList.toggle('btn-apertado');
}

function expandir(obj) {
    if (obj === inputServiços) {
        remover(artigos, labelArtigos, duvidas, labelDuvidas);
        setTimeout(() => {
            labelServiços.classList.toggle('menu-item-ativo');
            servicos.classList.toggle('menu-aberto');
        }, 650);
    } else if (obj === inputArtigos) {
        remover(servicos, labelServiços, duvidas, labelDuvidas);
        setTimeout(() => {
            labelArtigos.classList.toggle('menu-item-ativo');
            artigos.classList.toggle('menu-aberto');
        }, 650);
    } else if (obj === inputDuvidas) {
        remover(servicos, labelServiços, artigos, labelArtigos);
        setTimeout(() => {
            labelDuvidas.classList.toggle('menu-item-ativo');
            duvidas.classList.toggle('menu-aberto');
        }, 650);
    }
}

function expandirMenu() {
    if (menu.classList.contains('menu-principal-aberto')) {
        if (servicos.classList.contains('menu-aberto') || artigos.classList.contains('menu-aberto') || duvidas.classList.contains('menu-aberto')) {
            setTimeout(() => {
                menu.classList.remove('menu-principal-aberto');
            }, 400);
        } else {
            menu.classList.remove('menu-principal-aberto');
        };
        remover(servicos, labelServiços, artigos, labelArtigos, duvidas, labelDuvidas);
        imgMenu.src = "../img/menu.svg";
    } else {
        menu.classList.add('menu-principal-aberto');
        setTimeout(() => {
            imgMenu.src = "../img/fechar.svg";
        }, 400);
    }

}
//Fim - menu