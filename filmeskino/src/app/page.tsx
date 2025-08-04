import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Container from "@/components/template/Container";
import Wrap from "@/components/template/Wrap";

export default function Home() {
  return (
    <div className="w-96 bg-yellow-500">
      <Container>
        <p className="w-20 h-20 bg-red-200">p1</p>
        <p className="w-20 h-20 bg-green-200">p1</p>
        <p className="w-20 h-20 bg-blue-200">p1</p>
        <p className="w-20 h-20 bg-purple-200">p1</p>
        <p className="w-20 h-20 bg-yellow-200">p1</p>
        <p className="w-20 h-20 bg-orange-200">p1</p>
        <p className="w-20 h-20 bg-orange-200">p1</p>
      </Container>
    </div>
  );
}
