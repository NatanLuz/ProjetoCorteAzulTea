document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
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
    { threshold: [0.3, 0.6, 0.8] },
  );

  sections.forEach((sec) => sectionObserver.observe(sec));

  // Garantir lazy-loading
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
  { threshold: 0.5 },
);

// Desenvolvendo o formulário de contato
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

let scrollTicking = false;

function handleScrollEffects() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (navbar) {
    if (scrollTop > 100) {
      navbar.classList.add("bg-white/95", "shadow-md");
      navbar.classList.remove("bg-gray-50/95", "shadow-sm");
    } else {
      navbar.classList.remove("bg-white/95", "shadow-md");
      navbar.classList.add("bg-gray-50/95", "shadow-sm");
    }
  }

  if (window.pageYOffset > 300) {
    backToTopBtn.classList.remove("opacity-0", "pointer-events-none");
    backToTopBtn.classList.add("opacity-100");
  } else {
    backToTopBtn.classList.add("opacity-0", "pointer-events-none");
    backToTopBtn.classList.remove("opacity-100");
  }
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      handleScrollEffects();
      scrollTicking = false;
    });
  },
  { passive: true },
);

handleScrollEffects();

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

// Formulário de Anamnese Multi-etapas
(function () {
  const totalSteps = 5;
  let currentStep = 1;

  const form = document.getElementById("anamneseForm");
  if (!form) return;

  const stepLabel = document.getElementById("stepLabel");
  const stepName = document.getElementById("stepName");
  const progressBar = document.getElementById("progressBar");
  const errorMessage = document.getElementById("errorMessage");

  const prevBtn = document.getElementById("prevStep");
  const nextBtn = document.getElementById("nextStep");
  const submitBtn = document.getElementById("submitForm");

  const stepTitles = {
    1: "Dados básicos",
    2: "Nível de suporte",
    3: "Sensibilidades",
    4: "Informações adicionais",
    5: "Finalização",
  };

  function validateCurrentStep() {
    if (errorMessage) errorMessage.classList.add("hidden");

    // Etapa 1: facilitar preenchimento e aceitar formatos flexíveis
    if (currentStep === 1) {
      const requiredIds = [
        "serviceType",
        "childName",
        "childAge",
        "guardianName",
        "phone",
        "desiredDate",
        "desiredTime",
      ];
      for (const id of requiredIds) {
        const el = document.getElementById(id);
        if (!el || !el.value || el.value.trim() === "") {
          if (errorMessage)
            errorMessage.textContent =
              "Por favor, preencha todos os campos obrigatórios desta etapa.";
          return false;
        }
      }
      // Validação flexível para data
      const dateVal = document.getElementById("desiredDate").value.trim();
      if (
        !/^\d{1,2}[\/\-]?\d{1,2}[\/\-]?\d{2,4}$|^\d{4}-\d{2}-\d{2}$/.test(
          dateVal,
        )
      ) {
        if (errorMessage)
          errorMessage.textContent =
            "Digite a data no formato dia/mês/ano (ex: 29/03/2026).";
        return false;
      }
      // Validação flexível para hora
      const timeVal = document.getElementById("desiredTime").value.trim();
      if (!/^\d{1,2}:?\d{2}$/.test(timeVal)) {
        if (errorMessage)
          errorMessage.textContent =
            "Digite o horário no formato hh:mm (ex: 13:30).";
        return false;
      }
      // Validação flexível para telefone
      const phoneVal = document
        .getElementById("phone")
        .value.replace(/\D/g, "");
      if (phoneVal.length < 10 || phoneVal.length > 11) {
        if (errorMessage)
          errorMessage.textContent = "Digite um telefone válido com DDD.";
        return false;
      }
    }

    if (currentStep === 2) {
      const supportLevel = document.querySelector(
        'input[name="supportLevel"]:checked',
      );
      if (!supportLevel) {
        if (errorMessage)
          errorMessage.textContent = "Selecione o nível de suporte.";
        return false;
      }
    }

    if (currentStep === 5) {
      const serviceLocation = document.querySelector(
        'input[name="serviceLocation"]:checked',
      );
      const fullAddress = document.getElementById("fullAddress");
      const desiredHaircut = document.getElementById("desiredHaircut");
      const howFound = document.getElementById("howFound");
      if (!serviceLocation) {
        if (errorMessage)
          errorMessage.textContent = "Selecione o local do atendimento.";
        return false;
      }
      if (!fullAddress || !fullAddress.value.trim()) {
        if (errorMessage)
          errorMessage.textContent = "Preencha o endereço completo.";
        return false;
      }
      if (!desiredHaircut || !desiredHaircut.value.trim()) {
        if (errorMessage)
          errorMessage.textContent = "Descreva o corte desejado.";
        return false;
      }
      if (!howFound || !howFound.value) {
        if (errorMessage)
          errorMessage.textContent = "Informe como conheceu o serviço.";
        return false;
      }
    }

    return true;
  }

  function updateStepUI() {
    const steps = document.querySelectorAll(".form-step");
    steps.forEach((step) => {
      const stepNumber = parseInt(step.getAttribute("data-step"), 10);
      if (stepNumber === currentStep) {
        step.classList.remove("hidden");
      } else {
        step.classList.add("hidden");
      }
    });

    if (stepLabel) {
      stepLabel.textContent = `Etapa ${currentStep} de ${totalSteps}`;
    }
    if (stepName) {
      stepName.textContent = stepTitles[currentStep] || "";
    }
    if (progressBar) {
      const progressPercent = (currentStep / totalSteps) * 100;
      progressBar.style.width = `${progressPercent}%`;
    }

    if (prevBtn) prevBtn.disabled = currentStep === 1;
    if (currentStep === totalSteps) {
      if (nextBtn) nextBtn.classList.add("hidden");
      if (submitBtn) submitBtn.classList.remove("hidden");
    } else {
      if (nextBtn) nextBtn.classList.remove("hidden");
      if (submitBtn) submitBtn.classList.add("hidden");
    }

    if (errorMessage) errorMessage.classList.add("hidden");
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep -= 1;
        updateStepUI();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!validateCurrentStep()) {
        if (errorMessage) errorMessage.classList.remove("hidden");
        return;
      }
      if (currentStep < totalSteps) {
        currentStep += 1;
        updateStepUI();
      }
    });
  }

  // Máscara para telefone (formato brasileiro, mas permite digitação livre)
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("blur", function () {
      let v = this.value.replace(/\D/g, "");
      if (v.length === 11) {
        this.value = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
      } else if (v.length === 10) {
        this.value = `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`;
      }
    });
  }

  // Melhor UX para data: não apaga o valor digitado, só valida no submit
  const dateInput = document.getElementById("desiredDate");
  if (dateInput) {
    dateInput.placeholder = "dd/mm/aaaa";
    // Não faz mais formatação automática, só valida no submit
    dateInput.addEventListener("input", function () {
      this.classList.remove("border-red-500");
      this.setCustomValidity("");
    });
  }
  const timeInput = document.getElementById("desiredTime");
  if (timeInput) {
    timeInput.placeholder = "hh:mm";
    timeInput.addEventListener("blur", function () {
      let v = this.value.replace(/\D/g, "");
      if (v.length === 4) {
        this.value = `${v.slice(0, 2)}:${v.slice(2)}`;
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!validateCurrentStep()) {
      if (errorMessage) errorMessage.classList.remove("hidden");
      return;
    }

    const getVal = (id) => {
      const el = document.getElementById(id);
      return el && el.value ? el.value.trim() : "";
    };

    const serviceType = getVal("serviceType");
    const childName = getVal("childName");
    const childAge = getVal("childAge");
    const guardianName = getVal("guardianName");
    let phone = getVal("phone");
    let desiredDate = getVal("desiredDate");
    let desiredTime = getVal("desiredTime");

    // Corrigir data para dd/mm/aaaa só no envio, se possível
    if (/^\d{4}-\d{2}-\d{2}$/.test(desiredDate)) {
      const [yyyy, mm, dd] = desiredDate.split("-");
      desiredDate = `${dd}/${mm}/${yyyy}`;
    } else if (/^\d{8}$/.test(desiredDate)) {
      desiredDate = `${desiredDate.slice(0, 2)}/${desiredDate.slice(2, 4)}/${desiredDate.slice(4)}`;
    } else if (/^\d{6}$/.test(desiredDate)) {
      desiredDate = `${desiredDate.slice(0, 2)}/${desiredDate.slice(2, 4)}/20${desiredDate.slice(4)}`;
    }

    // Corrigir telefone para formato nacional simples
    phone = phone.replace(/\D/g, "");
    if (phone.length === 11) {
      phone = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
    } else if (phone.length === 10) {
      phone = `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
    }

    // Corrigir hora para hh:mm
    if (/^\d{4}$/.test(desiredTime)) {
      desiredTime = `${desiredTime.slice(0, 2)}:${desiredTime.slice(2)}`;
    }

    const supportLevelEl = document.querySelector(
      'input[name="supportLevel"]:checked',
    );
    const supportLevel = supportLevelEl
      ? supportLevelEl.value
      : "Não informado";

    const hasSensitivitiesEl = document.querySelector(
      'input[name="hasSensitivities"]:checked',
    );
    const hasSensitivities = hasSensitivitiesEl
      ? hasSensitivitiesEl.value
      : "Não informado";
    const sensitivitiesDescription =
      getVal("sensitivitiesDescription") || "Sem descrição";

    const dryerTraumaEl = document.querySelector(
      'input[name="dryerTrauma"]:checked',
    );
    const dryerTrauma = dryerTraumaEl ? dryerTraumaEl.value : "Não informado";
    const dryerTraumaDescription =
      getVal("dryerTraumaDescription") || "Sem descrição";

    const haircutTraumaEl = document.querySelector(
      'input[name="haircutTrauma"]:checked',
    );
    const haircutTrauma = haircutTraumaEl
      ? haircutTraumaEl.value
      : "Não informado";
    const haircutTraumaDescription =
      getVal("haircutTraumaDescription") || "Sem descrição";

    const hasHyperfocusEl = document.querySelector(
      'input[name="hasHyperfocus"]:checked',
    );
    const hasHyperfocus = hasHyperfocusEl
      ? hasHyperfocusEl.value
      : "Não informado";
    const hyperfocusDescription =
      getVal("hyperfocusDescription") || "Sem descrição";

    const therapyMedication = getVal("therapyMedication") || "Não informado";

    const serviceLocationEl = document.querySelector(
      'input[name="serviceLocation"]:checked',
    );
    const serviceLocation = serviceLocationEl
      ? serviceLocationEl.value
      : "Não informado";

    const fullAddress = getVal("fullAddress") || "Não informado";
    const desiredHaircut = getVal("desiredHaircut") || "Não informado";

    const imageAuthorizationEl = document.querySelector(
      'input[name="imageAuthorization"]:checked',
    );
    const imageAuthorization = imageAuthorizationEl
      ? imageAuthorizationEl.value
      : "Não informado";

    const howFound = getVal("howFound") || "Não informado";

    let message = "";
    message += "FICHA DE ANAMNESE - CORTEAZUL TEA\n";
    message += "--------------------------------\n";
    message += `Serviço: ${serviceType}\n`;
    message += `Nome da criança: ${childName}\n`;
    message += `Idade: ${childAge}\n`;
    message += `Nome do responsável: ${guardianName}\n`;
    message += `Telefone (WhatsApp): ${phone}\n`;
    message += `Data desejada: ${desiredDate}\n`;
    message += `Horário desejado: ${desiredTime}\n\n`;

    message += "NÍVEL DE SUPORTE\n";
    message += `- Nível: ${supportLevel}\n\n`;

    message += "SENSIBILIDADES\n";
    message += `- Possui sensibilidades: ${hasSensitivities}\n`;
    message += `- Descrição sensibilidades: ${sensitivitiesDescription}\n`;
    message += `- Trauma com secador: ${dryerTrauma}\n`;
    message += `- Descrição secador: ${dryerTraumaDescription}\n`;
    message += `- Trauma com corte de cabelo: ${haircutTrauma}\n`;
    message += `- Descrição corte: ${haircutTraumaDescription}\n\n`;

    message += "INFORMAÇÕES ADICIONAIS\n";
    message += `- Possui hiperfoco: ${hasHyperfocus}\n`;
    message += `- Descrição hiperfoco: ${hyperfocusDescription}\n`;
    message += `- Terapia / Medicação: ${therapyMedication}\n\n`;

    message += "FINALIZAÇÃO\n";
    message += `- Local do atendimento: ${serviceLocation}\n`;
    message += `- Endereço completo: ${fullAddress}\n`;
    message += `- Corte desejado: ${desiredHaircut}\n`;
    message += `- Autorização de uso de imagem: ${imageAuthorization}\n`;
    message += `- Como conheceu o serviço: ${howFound}\n`;

    // Corrigir bug de substituição de letras por asterisco (caso algum plugin ou navegador altere)
    // Remove qualquer asterisco isolado em palavras
    message = message.replace(/\*+/g, "");

    const phoneNumber = "5551986604404";
    const waUrl =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.location.href = waUrl;
  });

  updateStepUI();
})();
