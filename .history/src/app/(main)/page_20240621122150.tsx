import Image from "next/image";
import Container from "../_components/Container";

export default function Home() {
  return (
    <Container>
      <h1 className="text-[20px] text-sky-600 font-bold tracking-tighter">Login</h1>
      <form action="/" className="flex flex-col">
        <section>
          <label htmlFor="name">Try full name</label>
          <input type="text" />
        </section>

      </form>
    </Container>
  );
}
