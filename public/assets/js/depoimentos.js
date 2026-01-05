(function () {
  var imageItems = [
    { src: "assets/img/avaliacao1.jpg", alt: "Avaliação 1" },
    { src: "assets/img/avaliacao2.jpg", alt: "Avaliação 2" },
    { src: "assets/img/avaliacao3.jpg", alt: "Avaliação 3" },
    { src: "assets/img/avaliacao4.jpg", alt: "Avaliação 4" },
    { src: "assets/img/avaliacao5.jpg", alt: "Avaliação 5" },
    { src: "assets/img/avaliacao6.jpg", alt: "Avaliação 6" },
  ];

  var videoItem = {
    src: "assets/img/Depoimentoemvideo.mp4",
    alt: "Depoimento em vídeo",
  };

  function renderGrid() {
    var container = document.getElementById("depoimentos-carousel");
    if (!container) return;

    container.innerHTML = "";

    var grid = document.createElement("div");
    grid.className =
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10";

    imageItems.forEach(function (item) {
      var card = document.createElement("article");
      card.className =
        "avaliacao-card bg-white rounded-2xl shadow-md overflow-hidden flex flex-col";

      var mediaWrapper = document.createElement("div");
      mediaWrapper.className =
        "relative w-full overflow-hidden rounded-2xl pt-[120%]";

      var img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt;
      img.loading = "lazy";
      img.decoding = "async";
      img.className = "absolute inset-0 w-full h-full object-cover";
      mediaWrapper.appendChild(img);

      card.appendChild(mediaWrapper);
      grid.appendChild(card);
    });

    container.appendChild(grid);

    // Vídeo largo abaixo das fotos estilo sessão de vídeo principal
    var videoWrapperOuter = document.createElement("div");
    videoWrapperOuter.className =
      "max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg aspect-video";

    var video = document.createElement("video");
    video.controls = true;
    video.preload = "metadata";
    video.className = "w-full h-full object-cover";
    var source = document.createElement("source");
    source.src = videoItem.src;
    source.type = "video/mp4";
    video.appendChild(source);

    videoWrapperOuter.appendChild(video);
    container.appendChild(videoWrapperOuter);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderGrid);
  } else {
    renderGrid();
  }
})();
