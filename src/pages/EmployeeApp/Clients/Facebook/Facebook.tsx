import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { PageWrapper, Article, ButtonControl } from "./styles";

function Facebook() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

  return (
    <PageWrapper>
      <ButtonControl><Button name="Go back" onClick={goBack}/></ButtonControl>
        
      <Article>
        {" "}
        Facebook ist ein soziales Netzwerk, das vom US-amerikanischen
        Unternehmen Meta Platforms betrieben wird. Es ist das am meisten
        genutzte soziale Netzwerk der Welt.[2] Facebook ermöglicht die
        Erstellung von drei Arten von Seiten: Seiten zur Darstellung der eigenen
        Person, Seiten zur Eigenpräsenz von Künstlern, Unternehmen oder
        sonstigen Organisationen, sowie Gruppen. Vor allem aus den eigenen
        Abonnements dieser Seiten ergibt sich ein individueller Feed, der wie
        bei den meisten anderen sozialen Netzwerken eine zentrale Rolle in der
        Benutzung einnimmt. Von einigen wird dieser Feed als ihr primärer
        Nachrichtenkanal genutzt, weshalb Facebook auch eine Konkurrenz von
        Nachrichtenportalen ist. Darüber hinaus bietet Facebook unter anderem
        einen Messenger sowie eine Entwicklungsplattform zur Erstellung von
        Anwendungssoftware.[3] Facebook wurde im Februar 2004 gegründet[4] und
        war jahrelang die unangefochtene Nummer eins der größten sozialen
        Netzwerke. Mit der Zeit verlor es diese Stellung allerdings aufgrund der
        steigenden Popularität anderer sozialer Netzwerke. Im Jahr 2019 betrug
        der Umsatz 70,7 Mrd. USD.[5] Es zählte nach eigenen Angaben im 1.
        Quartal 2022 rund 2,9 Milliarden Mitglieder, welche die Seite zumindest
        einmal pro Monat besuchten.[1] Facebook ist eine der 10 meistbesuchten
        Websites der Welt, fiel in Deutschland 2020 allerdings aus den Top 10
        heraus. Noch im Mai 2017 verzeichnete es nach anderen Statistiken in
        Deutschland 30 Millionen aktive Nutzer,[6] diese Zahl sank bis Ende 2019
        aber auf 25,9 Millionen.[7] Facebook-Seiten und -Likes werden auch,
        teils illegal, in großen Mengen und zu Täuschungszwecken gehandelt.
        Gerichtlich wurde dies als unlauterer Wettbewerb eingestuft.[8] In
        Deutschland war Facebook 2022 zwar immer noch das meistgenutzte soziale
        Netzwerk, 35 % benutzten es mindestens einmal in der Woche, bei jüngeren
        Menschen lag es allerdings nur noch auf Platz drei hinter Instagram und
        TikTok.[9]
      </Article>
    </PageWrapper>
  );
}

export default Facebook;
