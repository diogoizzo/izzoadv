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
const informacoes = document.querySelector('.informações');
const inputTel = document.querySelector('#input-tel');
const inputMail = document.querySelector('#input-mail');
const inputEndereço = document.querySelector('#input-endereco');
const janelaTel = document.querySelector("#telefones");
const janelaMail = document.querySelector("#email");
const janelaEndereço = document.querySelector("#endereco");
const btnMenu = document.querySelector('.btn-menu-mobile');
const header = document.querySelector('header');
const slider = document.querySelector('.slider');
const btnsSaiba = document.querySelectorAll('.btnSaiba');
//Fim da captura de Dom
//Eventos
//Captura de evento dos botões saiba mais
for (let btn of btnsSaiba) {
    btn.parentElement.addEventListener('mouseenter', e => {
        if (window.innerWidth < 450) {
            btn.innerHTML = "Mais detalhes";
        }
    });
    btn.parentElement.addEventListener('mouseleave', e => {
        if (window.innerWidth < 450) {
            btn.innerHTML = "Saiba mais";
        }
    });
    btn.addEventListener('click', e => {
        if (window.innerWidth < 450) {
            if (e.target.parentElement.offsetHeight > 300) {
                btn.innerHTML = "Saiba mais";
                window.open('servicos.html', '_self');
            }
        }
    });
}

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

function verificaInfoAberta() {
    if (!janelaMail.classList.contains('display-none')) return inputMail;
    if (!janelaEndereço.classList.contains('display-none')) return inputEndereço;
    if (!janelaTel.classList.contains('display-none')) return inputTel;
}

function afundar(obj) {
    obj.parentElement.classList.toggle('btn-apertado');
}

function recolherMenu() {
    if (servicos.classList.contains('menu-aberto') || artigos.classList.contains('menu-aberto') || duvidas.classList.contains('menu-aberto')) {
        setTimeout(() => {
            menu.classList.remove('menu-principal-aberto');
        }, 400);
    } else {
        menu.classList.remove('menu-principal-aberto');
    };
    remover(servicos, labelServiços, artigos, labelArtigos, duvidas, labelDuvidas);
    imgMenu.src = "./img/menu.svg";
}

function expandir(obj) {
    if (!servicos.classList.contains('menu-aberto') && !artigos.classList.contains('menu-aberto') && !duvidas.classList.contains('menu-aberto')) {
        if (obj === inputServiços) {
            labelServiços.classList.toggle('menu-item-ativo');
            servicos.classList.toggle('menu-aberto');
        } else if (obj === inputArtigos) {
            labelArtigos.classList.toggle('menu-item-ativo');
            artigos.classList.toggle('menu-aberto');
        } else if (obj === inputDuvidas) {
            labelDuvidas.classList.toggle('menu-item-ativo');
            duvidas.classList.toggle('menu-aberto');
        }
        return;
    }
    if (obj === inputServiços) {
        remover(artigos, labelArtigos, duvidas, labelDuvidas);
        setTimeout(() => {
            labelServiços.classList.toggle('menu-item-ativo');
            servicos.classList.toggle('menu-aberto');
        }, 700);
    } else if (obj === inputArtigos) {
        remover(servicos, labelServiços, duvidas, labelDuvidas);
        setTimeout(() => {
            labelArtigos.classList.toggle('menu-item-ativo');
            artigos.classList.toggle('menu-aberto');
        }, 700);
    } else if (obj === inputDuvidas) {
        remover(servicos, labelServiços, artigos, labelArtigos);
        setTimeout(() => {
            labelDuvidas.classList.toggle('menu-item-ativo');
            duvidas.classList.toggle('menu-aberto');
        }, 700);
    }
}

function expandirMenu() {
    if (menu.classList.contains('menu-principal-aberto')) {
        recolherMenu();
    } else if (informacoes.classList.contains('informacoes-aberto')) {
        const itemAberto = verificaInfoAberta();
        itemAberto.parentElement.classList.remove('btn-apertado');
        const esperarRecolherInfo = () => new Promise((resolve, reject) => {
            informacoes.classList.remove('informacoes-aberto');
            setTimeout(() => {
                resolve();
            }, 1300);
        });
        esperarRecolherInfo().then(() => {
            menu.classList.add('menu-principal-aberto');
            imgMenu.src = "./img/fechar.svg";
        });
    } else {
        menu.classList.add('menu-principal-aberto');
        imgMenu.src = "./img/fechar.svg";
    }
}

function alternaInfo(obj) {
    switch (obj) {
        case inputTel:
            janelaMail.classList.add('display-none');
            inputMail.checked = false;
            inputMail.parentElement.classList.remove('btn-apertado');
            janelaEndereço.classList.add('display-none');
            inputEndereço.checked = false;
            inputEndereço.parentElement.classList.remove('btn-apertado');
            janelaTel.classList.remove('display-none');
            break;
        case inputMail:
            janelaMail.classList.remove('display-none');
            janelaEndereço.classList.add('display-none');
            inputEndereço.checked = false;
            inputEndereço.parentElement.classList.remove('btn-apertado');
            janelaTel.classList.add('display-none');
            inputTel.checked = false;
            inputTel.parentElement.classList.remove('btn-apertado');
            break;
        case inputEndereço:
            janelaMail.classList.add('display-none');
            inputMail.checked = false;
            inputMail.parentElement.classList.remove('btn-apertado');
            janelaEndereço.classList.remove('display-none');
            janelaTel.classList.add('display-none');
            inputTel.checked = false;
            inputTel.parentElement.classList.remove('btn-apertado');
            break;
    }
}

function expandirInfo(obj) {
    if (menu.classList.contains('menu-principal-aberto')) {
        const esperaRecolherMenu = (obj) => new Promise((resolve, reject) => {
            recolherMenu();
            btnMenu.classList.remove('btn-apertado');
            setTimeout(() => {
                imgMenu.src = "./img/menu.svg";
                resolve(obj);
            }, 1450);
        })
        esperaRecolherMenu(obj).then((obj) => {
            alternaInfo(obj);
            informacoes.classList.toggle('informacoes-aberto');
        });
    } else if (informacoes.classList.contains('informacoes-aberto')) {
        const itemAberto = verificaInfoAberta();
        itemAberto.parentElement.classList.remove('btn-apertado');
        if (obj !== itemAberto) {
            informacoes.classList.remove('informacoes-aberto');
            setTimeout(() => {
                alternaInfo(obj);
                informacoes.classList.add('informacoes-aberto');
            }, 1200);
        } else {
            informacoes.classList.remove('informacoes-aberto');
            obj.parentElement.classList.remove('btn-apertado');
        }
    } else {
        alternaInfo(obj);
        informacoes.classList.add('informacoes-aberto');
    }
}

function fecharInformações(obj) {
    obj.classList.add('btn-apertado');
    informacoes.classList.remove('informacoes-aberto');
    const itemAberto = verificaInfoAberta();
    itemAberto.parentElement.classList.remove('btn-apertado');
    setTimeout(() => {
        obj.classList.remove("btn-apertado");
    }, 180);
}
//Fim - menu
//Inicio Slider