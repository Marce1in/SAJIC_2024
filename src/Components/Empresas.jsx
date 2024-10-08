import React from "react";

function Empresas() {
  return (
    <section className="bg-[#313131] text-white flex flex-col items-center gap-6 py-28">
      <h2 className="text-3xl font-semibold w-3/5 text-center m-auto">
        Conheça as empresas que marcarão presença no evento!
      </h2>
      <div className="grid w-4/5 sm:grid-cols-2 md:grid-cols-3 m-auto gap-x-20 gap-y-12">
        <div className="bg-blue-300 w-full aspect-[16/11]">[IMAGE]</div>
        <div className="bg-blue-300 w-full aspect-[16/11]">[IMAGE]</div>
        <div className="bg-blue-300 w-full aspect-[16/11]">[IMAGE]</div>
        <div className="bg-blue-300 w-full aspect-[16/11]">[IMAGE]</div>
        <div className="bg-blue-300 w-full aspect-[16/11]">[IMAGE]</div>
        <div className="bg-blue-300 w-full aspect-[16/11]">[IMAGE]</div>
      </div>
    </section>
  );
}

export default Empresas;
