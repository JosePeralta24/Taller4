document.addEventListener('DOMContentLoaded', function() {
    // Crea el contenedor principal
    const contenedorPadre = document.createElement('div');
    contenedorPadre.classList.add('contenedorPadre');
    contenedorPadre.style.backgroundImage = 'url(recursos/imagenes/viatren.jpg)';
    contenedorPadre.style.backgroundRepeat = 'no-repeat';
    contenedorPadre.style.height = '1100px';
    contenedorPadre.style.position = 'relative';
    contenedorPadre.style.margin = '-8px';
    contenedorPadre.style.backgroundSize = '100% 770px';
    document.body.appendChild(contenedorPadre);

    const capaSemiTransparente = document.createElement('div');
    capaSemiTransparente.style.position = 'absolute';
    capaSemiTransparente.style.top = '0';
    capaSemiTransparente.style.left = '0';
    capaSemiTransparente.style.width = '100%';
    capaSemiTransparente.style.height = '70%';
    capaSemiTransparente.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    contenedorPadre.appendChild(capaSemiTransparente);

    // Crea el menú
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.style.position = 'absolute';
    menu.style.zIndex = '2';
    menu.style.padding = '26px 0px 20px 20px';
    menu.style.backgroundColor = '#fff';
    menu.style.margin = '60px 0px 0px 14%';
    menu.style.width = '72%';
    menu.style.height = '5.02%';
    contenedorPadre.appendChild(menu);

    // Crea el logo en el menú
    const logo = document.createElement('div');
    const logoImg = document.createElement('img');
    logoImg.src = 'recursos/imagenes/logo.png';
    logoImg.alt = 'logo png';
    logo.appendChild(logoImg);
    menu.appendChild(logo);

    // Crea la lista de navegación
    const navegador = document.createElement('div');
    navegador.classList.add('navegador');
    const ul = document.createElement('ul');
    ul.style.fontSize = '14px';
    ul.style.display = 'flex'; 
    ul.style.alignItems = 'center'; 
    ul.style.listStyle = 'none'; 
    ul.style.marginLeft = '600px';
    ul.style.color = '#888';
    const items = ['HOME', 'SERVICES', 'EVENTS', 'ABOUT US', 'CONTACT'];
    items.forEach(itemText => {
        const li = document.createElement('li');
        li.textContent = itemText;
        li.style.borderRight = '2px solid #eee';
        li.style.padding = '0 20px'; 
        li.style.marginTop = '-91px';
        li.style.marginLeft = '-7px';
        
        ul.appendChild(li);
        if (itemText === 'HOME') {
            li.style.backgroundColor = '#9ed134';
            li.style.color = '#fff'; 
            const alturaMenu = parseFloat(menu.style.height); //altura del menú como número
            li.style.lineHeight = `${101}px`; //altura del fondo del ítem "HOME"
        }


    });
    navegador.appendChild(ul);
    menu.appendChild(navegador);

    // Crea la tarjeta
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('tarjeta');
    tarjeta.style.backgroundColor = '#fff';
    tarjeta.style.textAlign = 'center';
    tarjeta.style.margin = '340px 0px 0px 221px';
    tarjeta.style.position = 'absolute';
    tarjeta.style.padding = '40px 20px';
    tarjeta.style.zIndex = '2';
    tarjeta.style.width = '323px';
    tarjeta.style.height = '213px';
    contenedorPadre.appendChild(tarjeta);

    //elementos dentro de la tarjeta (precio, título, texto, botón)
    const precioTarjeta = document.createElement('span');
    precioTarjeta.textContent = '$8,450';
    precioTarjeta.style.backgroundColor = '#e54747';
    precioTarjeta.style.textDecoration = 'none';
    precioTarjeta.style.padding = '8px 20px';
    precioTarjeta.style.fontSize = '30px';
    precioTarjeta.style.color = '#fff';
    precioTarjeta.style.fontWeight = '700';
    tarjeta.appendChild(precioTarjeta);

    const tituloTarjeta = document.createElement('h4');
    tituloTarjeta.textContent = 'Venice, Italy';
    tituloTarjeta.style.fontSize = '25px';
    tituloTarjeta.style.fontWeight = '700';
    tituloTarjeta.style.color = '#444';
    tituloTarjeta.style.margin = '38px 0px 26px 0px';
    tarjeta.appendChild(tituloTarjeta);

    const textoTarjeta = document.createElement('p');
    textoTarjeta.textContent = 'Travel is free responsive template by templatemo.\nAll images used in this template are from Unsplash';
    textoTarjeta.style.fontSize = '15px';
    textoTarjeta.style.color = '#888';
    textoTarjeta.style.marginBottom = '40px';
    tarjeta.appendChild(textoTarjeta);

    const textoCompleto = textoTarjeta.textContent;
    const indexUnsplash = textoCompleto.indexOf('Unsplash');
    if (indexUnsplash !== -1) {
        const spanUnsplash = document.createElement('span');
        spanUnsplash.textContent = 'Unsplash';
        spanUnsplash.style.color = '#9ed134';
        const textoAntes = textoCompleto.substring(0, indexUnsplash);
        const textoDespues = textoCompleto.substring(indexUnsplash + 'Unsplash'.length);
        textoTarjeta.innerHTML = textoAntes + spanUnsplash.outerHTML + textoDespues;
    }


    const botonTarjeta = document.createElement('a');
    botonTarjeta.href = '';
    botonTarjeta.textContent = 'PRE-BOOKING';
    botonTarjeta.style.backgroundColor = '#9ed134';
    botonTarjeta.style.color = '#fff';
    botonTarjeta.style.fontWeight = '700';
    botonTarjeta.style.textDecoration = 'none';
    botonTarjeta.style.padding = '12px 35px';
    botonTarjeta.style.fontSize = '14px';
    tarjeta.appendChild(botonTarjeta);

    // Crea las flechas externas
    
    const flechaExternaIzq = document.createElement('a');
    flechaExternaIzq.href = '';
    flechaExternaIzq.textContent = '←';
    flechaExternaIzq.classList.add('flechasExternas');
    flechaExternaIzq.style.marginTop = '25%';
    flechaExternaIzq.style.position = 'absolute';
    flechaExternaIzq.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    flechaExternaIzq.style.textDecoration = 'none';
    flechaExternaIzq.style.color = 'black';
    flechaExternaIzq.style.padding = '20px 10px';
    contenedorPadre.appendChild(flechaExternaIzq);

    const flechaExternaDer = document.createElement('a');
    flechaExternaDer.textContent = '→';
    flechaExternaDer.classList.add('flechasExternas');
    flechaExternaDer.style.marginLeft = '97.7%';
    flechaExternaDer.style.marginTop = '25%';
    flechaExternaDer.style.position = 'absolute'
    flechaExternaDer.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    flechaExternaDer.style.textDecoration = 'none';
    flechaExternaDer.style.color = 'black';
    flechaExternaDer.style.padding = '20px 10px';
    contenedorPadre.appendChild(flechaExternaDer);


//flecha izquierda interna
const flechaInternaIzq = document.createElement('a');
flechaInternaIzq.textContent = '←';
flechaInternaIzq.style.backgroundColor = '#9ed134';
flechaInternaIzq.style.color = '#fff';
flechaInternaIzq.style.padding = '10px 8px';
flechaInternaIzq.style.textDecoration = 'none';
flechaInternaIzq.style.position = 'absolute';  
flechaInternaIzq.style.top = '80%';
flechaInternaIzq.style.left = '219px';
flechaInternaIzq.style.transform = 'translateY(-50%)';  
flechaInternaIzq.style.zIndex = '1000';  //para estar por encima de otros elementos

contenedorPadre.appendChild(flechaInternaIzq);  


//flecha derecha interna
const flechaInternaDer = document.createElement('a');
flechaInternaDer.textContent = '→'; 
flechaInternaDer.style.backgroundColor = '#9ed134'; 
flechaInternaDer.style.color = '#fff';  
flechaInternaDer.style.padding = '10px 8px'; 
flechaInternaDer.style.textDecoration = 'none';
flechaInternaDer.style.position = 'absolute';  
flechaInternaDer.style.top = '80%';  
flechaInternaDer.style.right = '126px'; 
flechaInternaDer.style.transform = 'translateY(-50%)';  
flechaInternaDer.style.zIndex = '1000';  

contenedorPadre.appendChild(flechaInternaDer);  

// sección de países
const paisesSection = document.createElement('div');
paisesSection.classList.add('paises');
paisesSection.style.position = 'absolute';
paisesSection.style.display = 'flex';
paisesSection.style.margin = '47% 0 0 16%';
paisesSection.style.zIndex = '2';
contenedorPadre.appendChild(paisesSection);


// Crear mini tarjetas para cada país
const paisesData = [
    { titulo: 'ITALY', imagen: 'recursos/imagenes/pasadizo.jpg', textoVerde: 'Rome, Milan, Naples', textoRojo: 'SILVER HOTEL, 5 NIGHTS, 5 STARTS', precio: '$1,800 BOOK NOW' },
    { titulo: 'FRANCE', imagen: 'recursos/imagenes/gente.jpg', textoVerde: 'Paris, Marseille, Lyon', textoRojo: 'NEW PALACE, 5 NIGHTS, 5 STARTS', precio: '$2,300 BOOK NOW' },
    { titulo: 'GERMANY', imagen: 'recursos/imagenes/calle.jpg', textoVerde: 'Berlin, Hamburg, Munich', textoRojo: 'LUXE HOTEL, 5 NIGHTS, 6 STARTS', precio: '$3,100 BOOK NOW' },
    { titulo: 'SPAIN', imagen: 'recursos/imagenes/paisaje.jpg', textoVerde: 'Madrid, Barcelona, Valencia', textoRojo: 'GOOD HOTEL, 4 NIGHTS, 6 STARTS', precio: '$4,800 BOOK NOW' }
];

// Iterar sobre los datos de los países
paisesData.forEach(data => {
    //contenedor de mini tarjeta
    const miniTarjeta = document.createElement('div');
    miniTarjeta.classList.add('miniTarjetas');

    //contenedor del título
    const titulosDiv = document.createElement('div');
    titulosDiv.classList.add('titulos');
    titulosDiv.textContent = data.titulo;
    titulosDiv.style.backgroundColor = '#9ed134';
    titulosDiv.style.color = 'white'; 
    titulosDiv.style.textAlign = 'center';
    titulosDiv.style.padding = '10px'; 
    titulosDiv.style.width = '270px';
    titulosDiv.style.height = '35px';
    titulosDiv.style.fontWeight = '700';
    titulosDiv.style.fontSize = '20px';
    titulosDiv.style.marginLeft = '-8px';
    miniTarjeta.appendChild(titulosDiv);

    //contenedor de la imagen
    const fotosDiv = document.createElement('div');
    fotosDiv.classList.add('fotos');

    //elemento de imagen
    const imagen = document.createElement('img');
    imagen.src = data.imagen;
    imagen.style.width = '290px';
    imagen.alt = data.titulo;
    imagen.style.marginLeft = '-8px';
    fotosDiv.appendChild(imagen);

    // Crear elemento de texto verde
    const textoVerdeP = document.createElement('p');
    textoVerdeP.classList.add('textoVerde');
    textoVerdeP.textContent = data.textoVerde;
    textoVerdeP.style.color = '#9ed134';
    textoVerdeP.style.fontWeight = '700';
    fotosDiv.appendChild(textoVerdeP);

    // Crear elemento de texto rojo
    const textoRojoP = document.createElement('p');
    textoRojoP.classList.add('textoRojo');
    textoRojoP.textContent = data.textoRojo;
    textoRojoP.style.color = '#e54747';
    textoRojoP.style.marginTop = '-13px';
    textoRojoP.style.fontWeight = '700';
    fotosDiv.appendChild(textoRojoP);

    // Crear enlace de precio
    const precioButton = document.createElement('button');
        precioButton.textContent = data.precio;
        precioButton.style.backgroundColor = '#9ed134';
        precioButton.style.color = 'white';
        precioButton.style.border = 'none'; 
        precioButton.style.padding = '12px 30px';
        precioButton.style.fontSize = '14px';
        precioButton.style.marginTop = '-20px';
        precioButton.style.cursor = 'pointer'; // Cambia el cursor al pasar por encima
        precioButton.style.fontWeight = '700';
        precioButton.style.width = '290px';
        precioButton.style.marginLeft = '-10px';
        fotosDiv.appendChild(precioButton);


    // Agrega contenedor de la imagen a la mini tarjeta
    miniTarjeta.appendChild(fotosDiv);

    // Agrega la mini tarjeta al contenedor de países
    paisesSection.appendChild(miniTarjeta);

    //ajusta la posición de la imagen respecto al texto
    miniTarjeta.style.display = 'flex';
    miniTarjeta.style.flexDirection = 'column';
    miniTarjeta.style.alignItems = 'center';
    // Separación entre título y contenido
    miniTarjeta.style.margin = '60px' ;
    miniTarjeta.style.marginTop = '-23px';
    miniTarjeta.style.marginLeft = '-26px';
});



//contenedorPadre2
const contenedorPadre2 = document.createElement('div');
contenedorPadre2.classList.add('contenedorPadre2');

contenedorPadre2.style.marginTop = '75%';
contenedorPadre2.style.display = 'flex';
contenedorPadre2.style.position = 'absolute';
contenedorPadre2.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
contenedorPadre2.style.width = '100%';
contenedorPadre2.style.justifyContent = 'center';

contenedorPadre.appendChild(contenedorPadre2);

//imágenes dentro de contenedorPadre2
const imagenesSrc = [
    'recursos/imagenes/nave.png',
    'recursos/imagenes/playa.png',
    'recursos/imagenes/animal.png',
    'recursos/imagenes/nave.png',
    'recursos/imagenes/playa.png',
    'recursos/imagenes/animal.png'
];

imagenesSrc.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.style.borderLeft = '1px solid #d4d4d4';
    img.style.padding = '2% 2.1% 2% 2%';
    img.style.marginLeft = '50px';
    img.style.marginRight = '-10px';
    contenedorPadre2.appendChild(img);
});

//contenedorFinal
const contenedorFinal = document.createElement('div');
contenedorFinal.classList.add('contenedorFinal');
contenedorFinal.style.display = 'flex';
contenedorFinal.style.padding = '8%';
contenedorFinal.style.fontSize = '12px';
contenedorFinal.style.color = '#888';
contenedorFinal.style.paddingTop = '90%';
contenedorPadre.appendChild(contenedorFinal);

//elementos dentro de contenedorFinal (logo, texto de copyright, íconos sociales)
const logoFinal = document.createElement('div');
const logoImgFinal = document.createElement('img');
logoImgFinal.src = 'recursos/imagenes/logo.png';
logoImgFinal.alt = 'logo png';
logoFinal.appendChild(logoImgFinal);
contenedorFinal.appendChild(logoFinal);

const copyrightText = document.createElement('p');
copyrightText.textContent = 'Copyright @ 2084 ';
copyrightText.style.marginLeft = '350px';
const companyNameSpan = document.createElement('span');
companyNameSpan.textContent = 'Company Name';
copyrightText.appendChild(companyNameSpan);
copyrightText.textContent += ' - Travelby ';
const templatemoSpan = document.createElement('span');
templatemoSpan.textContent = 'templatemo';
templatemoSpan.style.color = '#9ed134';


copyrightText.appendChild(templatemoSpan);
contenedorFinal.appendChild(copyrightText);

const socialIcons = document.createElement('div');
socialIcons.classList.add('social-icons');
socialIcons.style.marginLeft = '220px';
contenedorFinal.appendChild(socialIcons);
const socialIconPaths = [
    'recursos/imagenes/facebook-16.png',
    'recursos/imagenes/twitter-16.png',
    'recursos/imagenes/linkedin-16.png',
    'recursos/imagenes/dospuntos.png',
    'recursos/imagenes/wifi.png'
];

socialIconPaths.forEach(path => {
    const icon = document.createElement('img');
    icon.src = path;
    icon.style.marginRight = '40px';
    
    socialIcons.appendChild(icon);

});

socialIcons.style.display = 'flex';
socialIcons.style.alignItems = 'center';

socialIcons.appendChild(socialIcons);
contenedorFinal.appendChild(socialIcons);

});
