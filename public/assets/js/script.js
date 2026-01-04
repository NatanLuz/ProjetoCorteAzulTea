document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Ajuste para a navbar fixa
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Menu mobile
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = mobileMenuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.className = "fas fa-bars text-xl";
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    } else {
      icon.className = "fas fa-times text-xl";
      mobileMenuBtn.setAttribute("aria-expanded", "true");
    }
  });

  // Fechar menu ao clicar em um link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      const icon = mobileMenuBtn.querySelector("i");
      icon.className = "fas fa-bars text-xl";
    });
  });
}

// Navbar scroll com efeito
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    navbar.classList.add("bg-white/95", "shadow-md");
    navbar.classList.remove("bg-white/95", "shadow-sm");
  } else {
    navbar.classList.remove("bg-white/95", "shadow-md");
    navbar.classList.add("bg-white/95", "shadow-sm");
  }

  lastScrollTop = scrollTop;
});

// Intersection Observer para as animações de entrada do site
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Aplicar animações de entrada aos elementos
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".card, .fade-in");
  animatedElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

  // Destacar link ativo no menu com base na seção visível
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sections = Array.from(document.querySelectorAll("section[id]"));

  const highlightActive = (activeId) => {
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      const id = href && href.startsWith("#") ? href.slice(1) : null;
      if (id && id === activeId) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      // Encontrar a seção mais visível
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible && visible.target && visible.target.id) {
        highlightActive(visible.target.id);
      }
    },
    { threshold: [0.3, 0.6, 0.8] }
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // Garantir lazy-loading em imagens padrão
  document.querySelectorAll("img").forEach((img) => {
    if (!img.hasAttribute("loading")) {
      img.setAttribute("loading", "lazy");
    }
    if (!img.hasAttribute("decoding")) {
      img.setAttribute("decoding", "async");
    }
  });

  // Otimizar vídeos para carregamento inicial mais leve
  document.querySelectorAll("video").forEach((vid) => {
    if (!vid.hasAttribute("preload")) {
      vid.setAttribute("preload", "metadata");
    }
  });
});

// Lazy loading para as imagens
const lazyImages = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach((img) => imageObserver.observe(img));

// Contador de números animado
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}

// Aplicar contadores quando elementos ficarem visíveis
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = parseInt(target.dataset.target);
        animateCounter(target, finalValue);
        counterObserver.unobserve(target);
      }
    });
  },
  { threshold: 0.5 }
);

// Desenvolvendo o Formulário de contato
const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check mr-2"></i>Enviado!';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
      }, 2000);
    }, 1500);
  });
}

// botao de voltar ao topo

const backToTopBtn = document.createElement("button");
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className =
  "fixed bottom-20 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-300 opacity-0 pointer-events-none z-40";
backToTopBtn.setAttribute("aria-label", "Voltar ao topo");

document.body.appendChild(backToTopBtn);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    backToTopBtn.classList.add("opacity-100");
  } else {
    backToTopBtn.classList.add("opacity-0", "pointer-events-none");
    backToTopBtn.classList.remove("opacity-100");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// configurando o preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});

// Tooltip para elementos com o data-tooltip
document.querySelectorAll("[data-tooltip]").forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    const tooltip = document.createElement("div");
    tooltip.className =
      "absolute bg-gray-900 text-white text-sm px-2 py-1 rounded z-50";
    tooltip.textContent = e.target.dataset.tooltip;
    tooltip.style.top = e.target.offsetTop - 30 + "px";
    tooltip.style.left =
      e.target.offsetLeft +
      e.target.offsetWidth / 2 -
      tooltip.offsetWidth / 2 +
      "px";

    document.body.appendChild(tooltip);
    e.target.tooltip = tooltip;
  });

  element.addEventListener("mouseleave", (e) => {
    if (e.target.tooltip) {
      e.target.tooltip.remove();
    }
  });
});

// Funçao Debounce que otimiza performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Aplicar debounce ao scrollar
const debouncedScroll = debounce(() => {}, 16);

window.addEventListener("scroll", debouncedScroll);
