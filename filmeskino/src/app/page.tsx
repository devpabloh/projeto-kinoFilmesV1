'use client'
import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Container from "@/components/template/Container";
import Wrap from "@/components/template/Wrap";
import Carrossel from "@/components/template/Carrossel";
import Botao from "@/components/template/Botao";
import Descricao from "@/components/template/Descricao";
import ImagemComFallBack from "@/components/template/ImagemComFallBack";
import { HourglassHighIcon } from "@phosphor-icons/react";

export default function Home() {
  return (
    <div className="relative w-96 h-96 border-2 border-red-400">
      <ImagemComFallBack url="" imgAlt="">
        <HourglassHighIcon size={150} />
      </ImagemComFallBack>
    </div>
  )
}
