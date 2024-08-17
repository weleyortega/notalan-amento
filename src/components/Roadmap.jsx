import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden" id="roadmap">
      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="https://found.ee/Surrealamordealiana">CLIQUE AQUI E FAÇA O PRÉ-SAVE</Button>
      </div>
    
  </Section>
);

export default Roadmap;
