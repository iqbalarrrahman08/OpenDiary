import CardDiaries from "@/components/global/CardDiaries";
import Wrapper from "@/components/global/Wrapper";

export const revalidate = 0;

export default function page(): React.ReactElement {
  return (
    <Wrapper>
      <CardDiaries />
    </Wrapper>
  );
}
