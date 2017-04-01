console.log(window.location);

// hash: часть url после символа #

/**
 * Отслеживание события изменения хэша
 */
window.onhashchange = function () {
    console.log(location.hash.slice(1));
};

// Перебросить на другую страницу
//location.href = '';
//location.reload(); перезагрузка страницы
//location.search; то что идет после ? в url

/**
 * Замены на кодирует url
 */
console.log(encodeURI('кто то'));

// decodeURI декодирует url
