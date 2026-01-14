import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useLang } from "./LanguageContext";

export default function Services() {
  const { t } = useLang();

  const cards = [
    {
      title: "Front-end sólido",
      desc: "Experiência com React e Angular, utilizando Tailwind e shadcn/ui para criar componentes reutilizáveis, com foco em UX, consistência visual e acessibilidade.",
    },
    {
      title: "Integrações & autenticação",
      desc: "APIs REST, autenticação (JWT, OAuth, SSO) e comunicação entre serviços.",
    },
    {
      title: "Full Stack pragmático",
      desc: "Desenvolvimento do front ao back com Node.js, C# (.NET), MongoDB e MySQL.",
    },
    {
      title: "Sistemas Tailormade",
      desc: "Arquitetura construída para suas regras, com foco em robustez, performance e UX.",
    },
    {
      title: "Qualidade & entrega",
      desc: "Clean Code, testes automatizados, versionamento e pipelines de CI/CD.",
    },
    {
      title: "Manutenção",
      desc: "Monitoramento, atualizações e suporte contínuo para estabilidade, segurança e performance.",
    },
  ];

  return (
    <section
      id="services"
      className="py-7 scroll-mt-20 bg-transparent"
    >
      <div className=" mx-auto px-6 text-center">
        <h1 className="text-2xl md:text-2xl font-medium mb-4">
          O que eu entrego como desenvolvedor?
        </h1>

        <p className="text-gray-500 max-w-3xl mx-auto mb-8">
          Experiência prática em aplicações de produção, cobrindo front-end, back-end, integrações e entrega contínua.
        </p>

        {/* WRAPPER */}
        <div className="relative services-wrapper">
          {/* SETA ESQUERDA */}
          <button
            className="services-prev bg-white"
            aria-label="Anterior"
          />

          {/* SETA DIREITA */}
          <button
            className="services-next"
            aria-label="Próximo"
          />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={600}
            grabCursor
            simulateTouch
            slidesPerGroup={1}
            spaceBetween={20}
            navigation={{
              prevEl: ".services-prev",
              nextEl: ".services-next",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="services-swiper"
          >
            {cards.map((c, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-[150px] bg-[#F3F1E7] border border-black/10 rounded-xl p-6 text-center dark:bg-[#1D1C1B] text-left transition ">
                  <div className="flex justify-center gap-3 mb-2">
                    <span className="text-black/70 dark:text-white">◉</span>
                    <h3 className="text-lg font-semibold">
                      {c.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CSS LOCAL FINAL */}
      <style>{`
        .services-wrapper {
          position: relative;
          padding: 0 56px;
        }

        .services-swiper {
          padding-bottom: 56px;
        }

        /* PAGINAÇÃO */
        .services-swiper .swiper-pagination {
          bottom: 12px !important;
        }

        .services-swiper .swiper-pagination-bullet {
          background: rgba(0, 0, 0, 1);
          opacity: 1;
        }

        .services-swiper .swiper-pagination-bullet-active {
          background: rgba(3, 3, 3, 0.8);
          width: 18px;
          border-radius: 999px;
        }

        /* Tema dark */
        .dark .services-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
        }

        .dark .services-swiper .swiper-pagination-bullet-active {
          background: rgba(255, 255, 255, 0.9);
        }

        /* BOTÕES (SETAS) */
        .services-prev,
        .services-next {
          position: absolute;
          top: 40%;
          transform: translateY(-50%);
          z-index: 20;
          width: 40px;
          height: 40px;
          border-radius: 999px;
          background: #1D1C1B;
          border: 1px solid rgba(255,255,255,0.25);
          cursor: pointer;
        }

        .services-prev {
          left: 0;
        }

        .services-next {
          right: 0;
        }

        /* DESENHO DA SETA */
        .services-prev::after,
        .services-next::after {
          content: "";
          position: absolute;
          inset: 0;
          margin: auto;
          width: 10px;
          height: 10px;
          border-right: 2px solid rgba(255,255,255,0.85);
          border-bottom: 2px solid rgba(255,255,255,0.85);
        }

        .services-prev::after {
          transform: rotate(135deg);
          left: 2px;
        }

        .services-next::after {
          transform: rotate(-45deg);
          right: 2px;
        }

        .services-prev:hover,
        .services-next:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255, 255, 255, 1);
        }

        /* hover no tema claro: só um pouco mais claro */
        .services-prev:hover,
        .services-next:hover {
          background: rgba(59, 53, 53, 1);
          border-color: rgba(0,0,0,0.18);
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .services-wrapper {
            padding: 0;
          }

          .services-prev,
          .services-next {
            display: none;
          }

          .services-swiper {
            padding-bottom: 48px;
          }
        }
      `}</style>
    </section>
  );
}
