import Image from "next/image";
import Container from "../_components/Container";
import FormsName from "../_components/FormsName";

export default function Home() {
  return (
    <Container>
      <h1 className="text-[20px] text-sky-600 font-bold tracking-tighter">Login</h1>
      <FormsName />
    </Container>
  );
}
