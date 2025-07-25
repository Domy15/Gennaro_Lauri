import { Col, Row } from "react-bootstrap";

const Skills = () => {
    return (
        <div className="mx-auto text-center padding-standard" id="punti" style={{ width: "90%" }}>
            <h2 className="font-libre fs-1">Cosa Offro</h2>
            <p className="fs-5 font-gray my-0">
                I pilastri del mio approccio progettuale, per un'architettura che supera le aspettative.
            </p>
            <Row className=" justify-content-evenly mt-5">
                <Col xs={12} lg={6} xl={4} className="text-center card-custom">
                    <div className="fs-1">💡</div>
                    <h3 className="fw-semibold">Progettazione Innovativa</h3>
                    <p className="mt-3 font-gray font-custom">Sviluppo soluzioni su misura, combinando estetica, funzionalità e sostenibilità per superare ogni aspettativa e definire nuovi standard.</p>
                </Col>
                <Col xs={12} lg={6} xl={4} className="text-center card-custom">
                    <div className="fs-1">📐</div>
                    <h3 className="fw-semibold">Esperienza e Professionalità</h3>
                    <p className="mt-3 font-gray font-custom">Garantisco un approccio meticoloso e una gestione impeccabile di ogni fase del progetto, dal concept iniziale alla realizzazione. La tua tranquillità è la mia priorità assoluta.</p>
                </Col>
                <Col xs={12} lg={6} xl={4} className="text-center card-custom">
                    <div className="fs-1">🔎</div>
                    <h3 className="fw-semibold">Attenzione ai Dettagli</h3>
                    <p className="mt-3 font-gray font-custom">Ogni linea, ogni materiale, ogni spazio è studiato con cura maniacale. La qualità del design e la precisione esecutiva sono il mio marchio di fabbrica, assicurando risultati che brillano per eccellenza.</p>
                </Col>
                <Col xs={12} lg={6} xl={4} className="text-center card-custom">
                    <div className="fs-1">🌿</div>
                    <h3 className="fw-semibold">Sostenibilità e Funzionalità</h3>
                    <p className="mt-3 font-gray font-custom">Progetto pensando al futuro, integrando soluzioni energeticamente efficienti e materiali ecocompatibili. Ogni spazio non è solo bello, ma anche efficiente, salubre e rispettoso dell'ambiente in cui si inserisce.</p>
                </Col>
                <Col xs={12} lg={6} xl={4} className="text-center card-custom">
                    <div className="fs-1">🤝</div>
                    <h3 className="fw-semibold">Soluzioni Personalizzate</h3>
                    <p className="mt-3 font-gray font-custom">Ogni cliente è unico, e così deve essere il suo progetto. Ascolto attentamente le tue esigenze, i tuoi gusti e il tuo budget per creare uno spazio che sia veramente tuo, un riflesso autentico della tua identità e delle tue aspirazioni.</p>
                </Col>
                <Col xs={12} lg={6} xl={4} className="text-center card-custom">
                    <div className="fs-1">🗣️</div>
                    <h3 className="fw-semibold">Abilità Comunicative e Relazionali</h3>
                    <p className="mt-3 font-gray font-custom">Competenza trasversale che si manifesta nella capacità argomentare le proprie idee progettuali, coordinare e motivare il team di lavoro e interagire proficuamente con imprese e maestranze in cantiere.</p>
                </Col>
            </Row>
        </div>
    );
}

export default Skills;