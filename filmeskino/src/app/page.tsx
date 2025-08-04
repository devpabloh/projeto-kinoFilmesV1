import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Image from "next/image";

export default function Home() {
  return (
    <Grid numCols={6} column numRows={3}>
      <p className="w-20 h-20 bg-red-200">p1</p>
      <p className="w-20 h-20 bg-green-200">p1</p>
      <p className="w-20 h-20 bg-blue-200">p1</p>
      <p className="w-20 h-20 bg-purple-200">p1</p>
      <p className="w-20 h-20 bg-yellow-200">p1</p>
      <p className="w-20 h-20 bg-orange-200">p1</p>
      <p className="w-20 h-20 bg-orange-200">p1</p>
    </Grid>
  );
}
