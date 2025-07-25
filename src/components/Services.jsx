import { Button, Col, Row } from "react-bootstrap";

const Services = () => {
    return (
        <div className="mx-auto text-center padding-standard w-50 text-white" id="servizi">
            <h2 className="font-libre fs-1">I Miei Servizi</h2>
            <p className="fs-5 my-0">
                Dall'idea alla consegna, un supporto completo e professionale per ogni tua esigenza progettuale.
            </p>
            <Row className=" justify-content-evenly mt-5 text-start">
                <Col xs={12} lg={6} className="d-flex mb-4">
                    <div className="fs-2 me-3">🏢</div>
                    <div>
                        <h4 className="fw-semibold">Progettazione Architettonica</h4>
                        <p className="mt-0">Servizi completi per residenziale, commerciale e ricettivo, creando spazi funzionali ed esteticamente pregevoli.</p>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex mb-4">
                    <div className="fs-2 me-3">🏗️</div>
                    <div>
                        <h4 className="fw-semibold">Ristrutturazioni e Riqualificazioni</h4>
                        <p className="mt-0">Dare nuova vita agli spazi esistenti, ottimizzando funzionalità e migliorando l'efficienza energetica e il comfort abitativo.</p>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex mb-4">
                    <div className="fs-2 me-3">🛋️</div>
                    <div>
                        <h4 className="fw-semibold">Interior Design</h4>
                        <p className="mt-0">Progettazione d'interni per creare ambienti che riflettano la personalità e le esigenze, curando ogni dettaglio dall'illuminazione all'arredo.</p>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex mb-4">
                    <div className="fs-2 me-3">📋</div>
                    <div>
                        <h4 className="fw-semibold">Pratiche Edilizie e Permessi</h4>
                        <p className="mt-0">Gestione completa della documentazione burocratica necessaria per l'avvio e la conclusione dei lavori, garantendo conformità e trasparenza.</p>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex mb-4">
                    <div className="fs-2 me-3">👷</div>
                    <div>
                        <h4 className="fw-semibold">Direzione Lavori</h4>
                        <p className="mt-0">Controllo e supervisione costante del cantiere per assicurare la corretta esecuzione del progetto, il rispetto dei tempi e del budget.</p>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="d-flex mb-4">
                    <div className="fs-2 me-3">📈</div>
                    <div>
                        <h4 className="fw-semibold">Consulenza Tecnica e Fattibilità</h4>
                        <p className="mt-0">Analisi preliminari e studi di fattibilità per guidare le scelte progettuali, fornendo un quadro chiaro delle opportunità e delle sfide.</p>
                    </div>
                </Col>
            </Row>
            <p className="fs-5 mt-5">
                Per maggiori dettagli sui nostri servizi e le principali novità in ambito edilizio, scarica la nostra brochure:
            </p>
            <a href="https://drive.google.com/file/d/17E05nYRrNkuK9481msShPU6MrmErsaqt/view" target="blank" className="btn btn-primary btn-custom fw-semibold fs-5 mt-2 p-3">Scarica la Brochure</a>
        </div>
    );
}

export default Services;