import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, Article, ButtonControl } from "./styles";

function Tesla() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <ButtonControl>
        {" "}
        <Button name="Go back" onClick={goBack} />
      </ButtonControl>

      <Article>
        Tesla, Inc. (bis 1. Februar 2017 Tesla Motors) ist ein börsennotierter
        US-amerikanischer Autohersteller mit Sitz in Austin, der neben
        Elektroautos auch Batteriespeicher, Batterie-Speicherkraftwerke und
        Photovoltaikanlagen produziert. Gegründet wurde das Unternehmen im Jahr
        2003 von Martin Eberhard und Marc Tarpenning, die 2008 ausschieden. Im
        Frühjahr 2004 stiegen Risikokapital-Investoren ein, Elon Musk wurde
        Aufsichtsratsvorsitzender und ist seitdem prägende Figur von Tesla.
        Tesla unterhält (Stand: Oktober 2023) mehrere Produktionsstandorte in
        den Vereinigten Staaten, hinzu kommen eine Fabrik zur Endmontage in den
        Niederlanden (seit 2013) sowie jeweils eine sog. „Gigafactory“ in der
        Volksrepublik China (seit 2019) und Deutschland (seit 2022). 2022
        beschäftigte das Unternehmen eigenen Angaben zufolge über 127.000
        Mitarbeiter.[2]
      </Article>
    </PageWrapper>
  );
}

export default Tesla;
