import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Container from "@/components/template/Container";
import Wrap from "@/components/template/Wrap";
import Carrossel from "@/components/template/Carrossel";

export default function Home() {
  return (
    <Carrossel slideAutomatico>
      <p>Texto 1</p>
      <p>Texto 2</p>
      <p>Texto 3</p>
    </Carrossel>
  );
}
