document.addEventListener("DOMContentLoaded", () => {
  // 1. MENU MOBILE RESPONSIVO
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Fecha o menu ao clicar em um link no celular
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. ABAS INTERATIVAS DAS ÁREAS DE ATUAÇÃO
  const areasData = {
    precisao: {
      title: "🛰️ Agricultura Digital e de Precisão",
      desc: "Uso de imagens de satélite, drones multiespectrais, GPS agrícola e Inteligência Artificial para aplicar água e fertilizantes exatamente onde a planta precisa, reduzindo custos e impactos ambientais."
    },
    solos: {
      title: "🌱 Ciência do Solo e Nutrição de Plantas",
      desc: "Análise química e física para correção de acidez, adubação equilibrada, plantio direto na palha e recuperação de áreas degradadas para manter a fertilidade por gerações."
    },
    zootecnia: {
      title: "🐄 Produção Animal e Pastagens",
      desc: "Manejo rotacionado de pastagens, nutrição animal, bem-estar no campo e integração Lavoura-Pecuária-Floresta (ILPF), aumentando a eficiência produtiva com menor emissão de carbono."
    },
    ambiental: {
      title: "🌳 Gestão Ambiental e Bioinsumos",
      desc: "Licenciamento ambiental rural, recuperação de Áreas de Preservação Permanente (APPs), controle biológico de pragas com inimigos naturais e certificação sustentável."
    }
  };

  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanel = document.getElementById("tabPanel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const key = btn.getAttribute("data-tab");
      const content = areasData[key];
      if (content && tabPanel) {
        tabPanel.innerHTML = `
          <h4>${content.title}</h4>
          <p>${content.desc}</p>
        `;
      }
    });
  });

  // 3. LIGHTBOX PARA AMPLIAR FOTOS DO STAND
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");

  document.querySelectorAll(".zoomable-img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  };

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
});
