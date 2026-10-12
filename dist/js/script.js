gsap.registerPlugin(ScrollTrigger);

gsap.to(".notebook-screen", {
  className: "notebook-screen notebook-screen-aberto",
  scrollTrigger: {
    trigger: ".notebook-screen",
    start: "top bottom",
    end: "top bottom",
    scrub: true,
    markers: false,
  },
});

  document.addEventListener("DOMContentLoaded", function () {
    const lenis = new Lenis({
      duration: 1.2,
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#xp-section",
    start: "top 70%",
    end: "bottom 20%",
    toggleActions: "play none none reverse",
  },
});

tl.from(".logo", { x: -50, opacity: 0, duration: 0.6, ease: "power2.out" })
  .from(
    ".line",
    {
      scaleY: 0,
      opacity: 0,
      transformOrigin: "center top",
      duration: 0.4,
      ease: "power2.out",
    },
    "-=0.3"
  )
  .from(
    ".visa",
    { x: 40, opacity: 0, duration: 0.6, ease: "power2.out" },
    "-=0.3"
  )
  .from(
    ".titulo",
    { y: 40, opacity: 0, duration: 0.7, ease: "power3.out" },
    "-=0.1"
  )
  .from(
    ".box",
    { y: 50, opacity: 0, duration: 0.6, ease: "power3.out" },
    "-=0.3"
  )
  .from(
    ".itens h2",
    { y: 30, opacity: 0, duration: 0.5, ease: "power2.out", stagger: 0.15 },
    "-=0.2"
  )
  .from(
    ".texto",
    { y: 20, opacity: 0, duration: 0.5, ease: "power2.out" },
    "-=0.3"
  )
  .from(
    ".botao",
    { scale: 0.9, opacity: 0, duration: 0.5, ease: "back.out(1.7)" },
    "-=0.3"
  )
  .from(
    ".cartao",
    {
      x: 60,
      opacity: 0,
      rotateY: 20,
      duration: 0.9,
      ease: "power3.out",
    },
    "-=0.6"
  );

// leve animação contínua no cartão
gsap.to(".cartao", {
  y: -10,
  rotate: 1,
  duration: 4,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true,
});



// aguarda carregamento dos scripts
// animação do título e do parágrafo: entram primeiro
gsap.from('#international-xp h1', {
opacity: 0,
y: 18,
duration: 0.8,
ease: 'power2.out',
delay: 0,
scrollTrigger: {
trigger: '#international-xp',
start: 'top 90%',
toggleActions: 'play none none none',
once: true
}
});

gsap.from('#international-xp h2', {
opacity: 0,
y: 18,
duration: 0.8,
ease: 'power2.out',
delay: 0,
scrollTrigger: {
trigger: '#international-xp',
start: 'top 90%',
toggleActions: 'play none none none',
once: true
}
});


gsap.from('#international-xp p', {
opacity: 0,
y: 10,
duration: 0.7,
ease: 'power2.out',
delay: 0.08,
scrollTrigger: {
trigger: '#international-xp',
start: 'top 90%',
toggleActions: 'play none none none',
once: true
}
});


// animação das cards: aparecem com stagger quando a seção estiver visível
gsap.from('#international-xp .card2', {
opacity: 0,
y: 28,
scale: 0.995,
duration: 1.55,
ease: 'power2.out',
stagger: 0.12,
delay: 0.12,
scrollTrigger: {
trigger: '#international-xp',
start: 'top 50%',
toggleActions: 'play none none none',
once: true
}
});


// animação sutil ao entrar/reentrar (opcional): pequenas transições quando o usuário faz scroll dentro da seção
ScrollTrigger.create({
trigger: '#international-xp',
start: 'top center',
onEnter: () => {
// (já cuidamos do play com once:true acima) — aqui você pode adicionar micro-interações se quiser
}
});


 // aguarda carregamento
  window.addEventListener('load', () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const triggerSelector = '#app-unico'; // troque se não adicionou o id

    // timeline para a entrada (controle mais fino, mantém tudo sincronizado)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerSelector,
        start: 'top 25%',    // quando a seção chega a 85% da viewport
        toggleActions: 'play none none none',
        once: true
      }
    });

    gsap.from("#app-unico h2", {
      opacity: 0,
      y: 18,
      duration: 0.8,
      ease: "power2.out",
      delay: 0,
      scrollTrigger: {
        trigger: "#app-unico",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    gsap.from("#app-unico h6", {
      opacity: 0,
      y: 10,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.08,
      scrollTrigger: {
        trigger: "#app-unico",
        start: "top 80%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // anima coluna esquerda (entra da esquerda)
    tl.from('#leftNodes .mindmap-node2', {
      x: -28,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: 'power2.out'
    }, 0);

    // anima coluna direita (entra da direita), começa levemente depois
    tl.from('#rightNodes .mindmap-node1', {
      x: 28,
      opacity: 0,
      stagger: 0.12,
      duration: 1,
      ease: 'power2.out'
    }, 0.08);

    // anima imagem central (pop suave)
    tl.from('#mindmapImage img', {
      scale: 0.94,
      opacity: 0,
      y: 14,
      duration: 1.2,
      ease: 'expo.out'
    }, 0.12);

    // depois do play, adiciona uma micro-flutuação contínua na imagem (opcional)
    tl.call(() => {
      gsap.to('#mindmapImage img', {
        y: 6,
        duration: 6.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: 0.2
      });
    }, null, '+=0.2');

    // micro-interação hover (opcional): levanta o nó ao passar o mouse
    document.querySelectorAll('#leftNodes .mindmap-node2, #rightNodes .mindmap-node1').forEach(node => {
      node.style.cursor = 'default';
      node.addEventListener('mouseenter', () => {
        gsap.to(node, { y: -6, duration: 1, ease: 'power2.out' });
      });
      node.addEventListener('mouseleave', () => {
        gsap.to(node, { y: 0, duration: 1, ease: 'power2.out' });
      });
    });

  });

   gsap.registerPlugin(ScrollTrigger);

   gsap.from("#aproximacao h1", {
     scrollTrigger: {
       trigger: "#aproximacao",
       start: "top 60%",
     },
     y: 60,
     opacity: 0,
     duration: 1,
     ease: "power3.out",
   });

   gsap.from("#aproximacao img", {
     scrollTrigger: {
       trigger: "#aproximacao",
       start: "top 55%",
     },
     y: 40,
     opacity: 0,
     duration: 1,
     stagger: 0.2,
     ease: "power2.out",
   });

   gsap.from("#aproximacao a", {
     scrollTrigger: {
       trigger: "#aproximacao",
       start: "top 50%",
     },
     scale: 0.8,
     opacity: 0,
     duration: 0.8,
     delay: 0.4,
     ease: "back.out(1.7)",
   });

   gsap.from("#aproximacao p", {
     scrollTrigger: {
       trigger: "#aproximacao",
       start: "top 50%",
     },
     y: 30,
     opacity: 0,
     duration: 0.8,
     delay: 0.6,
     stagger: 0.15,
     ease: "power1.out",
   });

   gsap.from(".img-aproxima", {
     scrollTrigger: {
       trigger: "#aproximacao",
       start: "top 55%",
     },
     x: 80,
     opacity: 0,
     duration: 1.2,
     ease: "power3.out",
   });

gsap.registerPlugin(ScrollTrigger);
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// garante estado inicial limpo (resolve bugs de "ficar escuro")
function ensureReset() {
  document.querySelectorAll("#carrosselImagens img").forEach((img) => {
    img.style.opacity = 0;
    img.style.transform = "none";
    img.style.filter = "none";
    img.style.mixBlendMode = "normal";
    img.style.zIndex = 1;
  });
  // garante visibilidade do texto também
  const title = document.querySelector("#xp-nomes h1");
  const p = document.querySelector("#xp-nomes p");
  if (title) title.style.opacity = 1;
  if (p) p.style.opacity = 1;
}

ensureReset();

if (!reduceMotion) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#xp-nomes",
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });

  // título e parágrafo
  tl.fromTo(
    "#xp-nomes h1",
    { y: 36, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
  );
  tl.fromTo(
    "#xp-nomes p",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
    "-=0.35"
  );

  // imagens: entrada suave e limpa
  tl.fromTo(
    "#carrosselImagens img",
    { y: 28, opacity: 0, scale: 0.98 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.65,
      ease: "power3.out",
      stagger: { each: 0.12, from: "center" },
      onComplete: () => {
        // garanta que não ficará nenhum estilo inline conflitante após animação
        document.querySelectorAll("#carrosselImagens img").forEach((img) => {
          img.style.opacity = "1";
          img.style.transform = "none";
          img.style.filter = "none";
          img.style.mixBlendMode = "normal";
        });
      },
    }
  );
} else {
  // reduced motion: apenas mostra tudo limpo
  document.querySelectorAll("#carrosselImagens img").forEach((img) => {
    img.style.opacity = 1;
    img.style.transform = "none";
  });
}


document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Estado inicial
  gsap.set(".js-img-sec2", { opacity: 0, y: 80 });

  // Animação suave ao entrar no viewport
  gsap.to(".js-img-sec2", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".js-img-sec2",
      start: "top 60%", // inicia quando o topo da imagem chega a 60% da tela
      toggleActions: "play none none none", // anima só 1x
    },
  });
});