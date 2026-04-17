import { DeckProvider } from "@/deck/DeckContext";
import { DeckLayout } from "@/deck/DeckLayout";
import { chapters } from "@/slides/registry";

const Index = () => (
  <DeckProvider chapters={chapters}>
    <DeckLayout />
  </DeckProvider>
);

export default Index;
