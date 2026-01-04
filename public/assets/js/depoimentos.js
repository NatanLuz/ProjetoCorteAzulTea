(function () {
  function renderDepoimentos(list) {
    var grid = document.getElementById("depoimentos-grid");
    if (!grid) return;
    grid.innerHTML = "";
    list.forEach(function (src) {
      var card = document.createElement("div");
      card.className =
        "avaliacao-card card hover-lift group text-center transform transition-all duration-300 hover:scale-105";
      var wrap = document.createElement("div");
      wrap.className =
        "w-full rounded-xl overflow-hidden shadow-lg bg-white p-2 flex items-center justify-center";
      var img = document.createElement("img");
      img.src = src;
      img.alt = "Avaliação Cliente";
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "w-full h-48 md:h-64 object-contain";
      wrap.appendChild(img);
      card.appendChild(wrap);
      grid.appendChild(card);
    });
  }

  fetch("assets/img/depoimentos.json")
    .then(function (r) {
      return r.json();
    })
    .then(function (list) {
      renderDepoimentos(list);
    })
    .catch(function () {
    });
})();
