import { useNavigate } from "react-router-dom";

import { PageWrapper, Article, ButtonControl } from "./styles";
import Button from "components/Button/Button";

function Apple() {

const navigate = useNavigate()

const goBack = () => {
    navigate("/clients")
}

  return (
    <PageWrapper>
      <ButtonControl> <Button name="Go back" onClick={goBack}/></ButtonControl>
      <Article>
        Apple Inc. [ˈæpəlˌɪŋk] ist ein US-amerikanischer Hard- und
        Softwareentwickler und ein Technologieunternehmen, das Computer,
        Smartphones und Unterhaltungselektronik sowie Betriebssysteme und
        Anwendungssoftware entwickelt und vertreibt. Zudem betreibt Apple ein
        Internet-Vertriebsportal für Musik, Filme und Software. Der Hauptsitz
        von Apple, der Apple Park, befindet sich im kalifornischen Cupertino.
        Apple wurde 1976 von Steve Wozniak, Steve Jobs und Ron Wayne als
        Garagenfirma gegründet und zählte zu den ersten Herstellern von Personal
        Computern. Das Unternehmen trug maßgeblich zu deren Entwicklung als
        Massenprodukt bei. Bei der Einführung der grafischen Benutzeroberfläche
        und der Maus in den 1980er Jahren nahm Apple mit den Computern Lisa und
        Macintosh eine Vorreiterrolle ein. Mit dem Erscheinen des iPods (2001),
        des iPhones (2007), des iPads (2010) und der Apple Watch (2014) weitete
        Apple sein Geschäft nach und nach auf andere Produktbereiche aus. Es
        legte damit die Basis für den bis heute anhaltenden Boom der Märkte für
        Smartphones und Tabletcomputer. In den letzten Jahren hat sich das
        iPhone, mit einem Umsatzanteil von mehr als 50 % am Gesamtumsatz des
        Konzerns, zu Apples wichtigstem Produkt entwickelt.[3]
      </Article>
    </PageWrapper>
  );
}

export default Apple;
