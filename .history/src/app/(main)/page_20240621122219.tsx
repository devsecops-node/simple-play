import Image from "next/image";
import Container from "../_components/Container";

export default function Home() {
  return (
    <Container>
      <h1 className="text-[20px] text-sky-600 font-bold tracking-tighter">Login</h1>
      <form action="/" className="flex flex-col">
        <section className="flex flex-col">
          <label htmlFor="name" >Try full name</label>
          <input type="text" placeholder="write your name ..."/>
        </section>
      </form>
    </Container>
  );
}
