import React from "react";
import CardPalestrante from "./CardPalestrante";
import VerProgramacao from "../pages/home/VerProgramacao";
import CarrosselPalestrantes from "../pages/home/Components/CarrosselPalestrantes";

function SecoesDoCronograma({ assunto, reverse = false, children }) {
  return (
    <div className="my-32">
      <div
        className={`flex justify-center gap-16 flex-wrap mx-[8vw] md:mx-[12vw] lg:flex-nowrap ${
          reverse && "flex-row-reverse"
        }`}
      >
        {/* IMAGEM */}
        <div className="flex justify-center">
          <div className="relative ">
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm absolute top-3 right-3 bg-white"></div>
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm absolute -top-3 left-3 bg-orange-400"></div>
            <div className="w-[250px] minusculo:w-[340px] sm:w-[400px] aspect-video rounded-sm relative z-10">
              {/* Senhoras e senhores, o nome vertical responsivo é real */}
              <figure className="flex w-full h-full items-center relative">
                <img
                  src={
                    (assunto.toLowerCase() == "tecnologia" &&
                      "tecnologia_thumb.png") ||
                    (assunto.toLowerCase() == "gestão" && "gestão_thumb.png") ||
                    (assunto.toLowerCase() == "mercado" && "mercado_thumb.png")
                  }
                  alt=""
                  className="h-full w-full object-cover"
                />
                {reverse ? (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:left-60 sm:rotate-90">
                    {assunto}
                  </figcaption>
                ) : (
                  <figcaption className="text-2xl uppercase font-bold text-center absolute w-full sm:top-[initial] -top-12 sm:-left-60 sm:-rotate-90">
                    {assunto}
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </div>

        {/* TEXTO */}
        <div
          className={`
            ${!reverse && "flex flex-col items-end"}`}
        >
          <p
            className={`text-lg font-light max-lg:text-center mb-4 ${
              !reverse && "text-right"
            }`}
          >
            {children}
          </p>

          <VerProgramacao />
        </div>
      </div>

      {/* PALESTRANTES */}
      <div className="mt-16 ">
        <h2 className="font-semibold text-2xl mx-[5vw] sm:mx-[10vw]">
          Palestrantes de {assunto} confirmados!
        </h2>

        {/* grid grid-cols-2 gap-4 md:grid-cols-4 */}
        <div className="mt-2">
          {/* TECNOLOGIA */}
          {assunto.toLowerCase() == "tecnologia" && (
            <CarrosselPalestrantes reverse={true}>
              <CardPalestrante
                prof="Gladimir Catarino"
                data="16/10, das 10:00 às 10:50"
                empresa="UniSenac"
                tema="IoT (Workshop)"
                image="https://avatars.githubusercontent.com/u/26561092?v=4"
              />
              <CardPalestrante
                data="18/10, das 10:30 às 11:30"
                prof="Pablo Chiaro de Rosa"
                empresa="UniSenac"
                tema="Agentes de IA: aplicações além do Chat com LLM e Langchain"
                image="/pablo.png"
              />
              <CardPalestrante
                prof="Débora Carvalho"
                data="17/10, das 10:40 às 11:40"
                empresa="UniSenac"
                tema="Desenvolvimento de Games"
              />

              {/*  {

  {
    prof: "William Machado",
    empresa: "Colégio Tiradentes",
    tema: "As Implicações Éticas nas Tecnologias Digitais",
    foto: "/william_machado.png",
    desc: "Doutor em Educação, mestrado em Educação e Tecnologias. Atuação como professor com pesquisas voltadas à Educomunicação, Tecnologias, Ética, Sociologia e Jornalismo. ",
    instagram: "https://www.instagram.com/willmachad/",
  },
 */}
              <CardPalestrante
                prof="William Machado"
                data="16/10, das 9:20 às 10:20"
                empresa="Colégio Tiradentes"
                image="/william_machado.png"
                tema="As Implicações Éticas nas Tecnologias Digitais"
              />
              <CardPalestrante />
              <CardPalestrante />
            </CarrosselPalestrantes>
          )}
          {/* GESTÃO */}

          {assunto.toLowerCase() == "gestão" && (
            <CarrosselPalestrantes>
              <CardPalestrante
                prof="Nanda Fersula"
                data="18/10, das 19:10 às 20:00"
                empresa="Instituto Sigales"
                image="/nanda_fersula.jpg"
                tema="Neuromarketing - Comece por Aqui"
              />
              <CardPalestrante
                prof="Adriana Silva da Silva"
                data="16/10, das 10:40 às 11:40"
                empresa="Main Leaf"
                image="/adriana_silva.jpg"
                tema="Do Conceito ao Lançamento: Gestão Ágil de Projetos de Jogos Digitais"
              />
              <CardPalestrante
                data="16/10, das 10:50 às 11:50"
                prof="Eduardo Roveré"
                empresa="ATLAS"
                tema="Mercado de Trabalho"
                image="https://avatars.githubusercontent.com/u/7376289?v=4"
              />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
            </CarrosselPalestrantes>
          )}
          {/* MERCADO */}
          {assunto.toLowerCase() == "mercado" && (
            <CarrosselPalestrantes mercado={true}>
              <CardPalestrante
                prof="Eduardo Roveré "
                data="16/10, das 10:50 às 11:50"
                empresa="Atlas"
                tema="Mercado de Trabalho"
              />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
              <CardPalestrante />
            </CarrosselPalestrantes>
          )}
        </div>
      </div>
    </div>
  );
}

export default SecoesDoCronograma;
