import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 bg-blue-500">
      <div className="w-full md:w-1/4 md:mr-4 h-24 mb-4 md:mb-0 mx-auto">
        {/* La clase mx-auto centrará la imagen horizontalmente en dispositivos móviles */}
        <Image
          src="https://static.vecteezy.com/system/resources/previews/018/926/016/non_2x/weather-icon-symbol-png.png"
          alt="Imagen del clima"
          width={96}
          height={96}
          objectFit="cover"
        />
      </div>
      <div className="flex justify-center md:justify-end w-full md:w-3/4 text-white text-2xl md:text-4xl font-bold">
        <p>Aplicación del clima</p>
      </div>
    </div>
  );
}
