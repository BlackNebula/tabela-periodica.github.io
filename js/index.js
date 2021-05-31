//Todas as celulas da tabela
const celulas = document.querySelectorAll('td')
const indice = document.querySelectorAll('td>p')

//Divisão por classes
const naoMetais = document.querySelectorAll('.nao-metal')
const metaisAlcalinos = document.querySelectorAll('.metal-alcalino')
const semimetais = document.querySelectorAll('.semimetais')
const metaisAlcalinosTerrosos = document.querySelectorAll('.metal-alcalino-terroso')
const metaisDeTransicao = document.querySelectorAll('.metal-de-transicao')
const outrosMetais = document.querySelectorAll('.outro-metal')
const halogenios = document.querySelectorAll('.halogenio')
const gasesNobres = document.querySelectorAll('.gas-nobre')
const lantanideos = document.querySelectorAll('.lantanideos')
const actinidios = document.querySelectorAll('.actinidios')

//Area de texto informativo
const txt = document.querySelector('#txt')
const txtTh = document.querySelector('#txtTh')

//Animações da tabela secundaria
celulas.forEach(function(elemento){
    elemento.onmouseenter = () =>{
        //Animação dos elementos 57 a 71
        if(elemento.innerText == '57-71'){
            for(let i=129; i <= 143; i++){
                celulas[i].classList.add('animacao')
            }
        } 
        else{
            for(let i=129; i <= 143; i++){
                celulas[i].classList.remove('animacao')
            }
        }

        //Animação dos elementos 89 a 103
        if(elemento.innerText == '89-103'){
            for(let i=147; i <= 161; i++){
                celulas[i].classList.add('animacao')
            }
        }
        else{
            for(let i=147; i <= 161; i++){
                celulas[i].classList.remove('animacao')
            }
        }
       
    }
})


//Colorindo a parte superido da area de explicação
naoMetais.forEach(function(naoMetal){
    naoMetal.onmouseover = () =>{
        txtTh.style.background = '#A1D344'
    }
    naoMetal.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

metaisAlcalinos.forEach(function(metalAlcalino){
    metalAlcalino.onmouseover = () =>{
        txtTh.style.background = '#F1B32E'
    }
    metalAlcalino.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

semimetais.forEach(function(semimetal){
    semimetal.onmouseover = () =>{
        txtTh.style.background = '#4FB6AC'
    }
    semimetal.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

metaisAlcalinosTerrosos.forEach(function(metalAlcalinoTerroso){
    metalAlcalinoTerroso.onmouseover = () =>{
        txtTh.style.background = '#EADA2F'
    }
    metalAlcalinoTerroso.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})


metaisDeTransicao.forEach(function(metalDeTransicao){
    metalDeTransicao.onmouseover = () =>{
        txtTh.style.background = '#EB8E8E'
    }
    metalDeTransicao.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

outrosMetais.forEach(function(outroMetal){
    outroMetal.onmouseover = () =>{
        txtTh.style.background = '#A2C7D3'
    }
    outroMetal.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

halogenios.forEach(function(halogenio){
    halogenio.onmouseover = () =>{
        txtTh.style.background = '#70CBEB'
    }
    halogenio.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

gasesNobres.forEach(function(gasNobre){
    gasNobre.onmouseover = () =>{
        txtTh.style.background = '#3D9EE3'
    }
    gasNobre.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

lantanideos.forEach(function(lantanideo){
    lantanideo.onmouseover = () =>{
        txtTh.style.background = '#90E3E9'
    }
    lantanideo.onmouseout = () =>{
        txtTh.style.background = '#e7e6e6'
    }
})

actinidios.forEach(function(actinidio){
    actinidio.onmouseover = () =>{
        txtTh.style.bac = () =>{
        txtTh.style.backkground = '#DCADD6'
    }
    actinidio.onmouseoutground = '#e7e6e6'
    }
})

function mudar(x){
    var elemento = document.getElementById('elemento').innerHTML;
    var div = document.getElementById("txt");
        if (x == 1){
        div.innerHTML = "O Hidrogênio é o elemento mais abundante do universo e é o elemento básico de toda e qualquer estrela. Cerca de 90% dos átomos presentes no universo são átomos de Hidrogênio.";
                }
        if (x == 2){
        div.innerHTML = "O elemento hélio é um gás nobre, pertencente a família 0 ou 8A da tabela periódica, é inerte, ou seja, não sofre reação química, segue a regra do dueto (é estável com 2 elétrons em sua última camada de valência), possui 8 isótopos, porém desprezíveis praticamente, pois cerca de 99,999% do hélio é o isótopo estável 4He.";
                }
    
}