// Creating demon slayer's catalog
const demon_slayer_container = document.getElementById('demon_slayer_container');

demon_slayer.forEach(pic => {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');

    img.src = pic.url;
    div.appendChild(img);
    p.innerHTML = `Precio: $ ${pic.price}`;

    article.appendChild(div);
    article.appendChild(p);

    demon_slayer_container.appendChild(article);
});

// Creating pokemon's catalog
const pokemon_container = document.getElementById('pokemon_container');

pokemon.forEach(pic => {
    const article = document.createElement('article');
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');

    img.src = pic.url;
    div.appendChild(img);
    p.innerHTML = `Precio: $ ${pic.price}`;

    article.appendChild(div);
    article.appendChild(p);

    pokemon_container.appendChild(article);
});