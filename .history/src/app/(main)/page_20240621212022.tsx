
import Container from "../_components/Container";
import FormsName from "../_components/FormsName";
import Image from 'next/image'

export default function Home() {
  return (
    <Container>
      <h1 className="text-[20px] text-sky-600 font-bold tracking-tighter">Login</h1>
      <FormsName />
      <Image src="/paloma.webp" alt="Cargando" width={20} height={20} />
    </Container>
  );
}
