import { Row, Col } from "react-bootstrap";
import { Instagram } from "react-bootstrap-icons";

const Contacts = () => {
    return (
        <div className="padding-standard" id="contatti">
            <div className="w-50 mx-auto text-center">
                <h2 className="font-libre fs-1 text-white">Realizza il Tuo Progetto con un Partner Affidabile.</h2>
                <p className="fs-5 mt-4" style={{ color: "#D1D5D0" }}>Sia che tu stia pensando di costruire la casa dei tuoi sogni, riqualificare un immobile esistente o sviluppare un nuovo spazio commerciale, sono qui per trasformare la tua visione in una solida realtà, con passione e competenza.</p>
            </div>
            <div className="mt-5 mx-auto d-lg-flex" style={{ width: "85%" }}>
                <div className="w-xl-50 align-items-center d-lg-flex">
                    <Col xl={6}>
                        <img src="/foto.jpg" style={{ width: "20em" }} />
                    </Col>
                    <Col xl={6}>
                        <p className="fs-5 mt-4" style={{ color: "#D1D5D0" }}>
                            <em>
                                Sono un giovane
                                professionista con una forte
                                vocazione verso l'architettura, che
                                mi spinge ad impegnarmi con tutto
                                me stesso in questo lavoro, con
                                l'obiettivo di raggiungere numerosi
                                traguardi per sviluppare le mie
                                competenze e metterle a servizio
                                della comunità.
                                Mi occupo di varie attività: dalla
                                progettazione architettonica alle
                                sanatorie edilizie; fornire
                                supporto ai clienti che sono
                                intenzionati ad acquistare un
                                immobile, curando gli aspetti
                                tecnici.
                                Ho maturato un’esperienza
                                considerevole nel settore, e la
                                mia giovane età non può che
                                determinarmi ad accogliere sempre
                                nuovi stimoli.
                            </em>
                        </p>
                    </Col>
                </div>
                <div className="text-center w-50 m-auto">
                    <p className="mb-3 fw-semibold fs-5" style={{ color: "#9CA3AF" }}>Arch. Gennaro Lauri</p>
                    <p className="mb-2">📧 <a className="footer-link text-decoration-none" style={{ color: "#9CA3AF" }}>Email: arch.gennarolauri@gmail.com</a></p>
                    <p className="mb-2">✉️ <a className="footer-link text-decoration-none" style={{ color: "#9CA3AF" }}>Pec: gennaro.lauri@archiworldpec.it</a></p>
                    <p className="mb-2"><Instagram className="text-white me-2" /><a href="https://www.instagram.com/gennaro_lauri_architetto/" className="footer-link" style={{ color: "#9CA3AF" }}>gennaro_lauri_architetto</a></p>
                    <p className="mb-2">📱 <a className="footer-link text-decoration-none" style={{ color: "#9CA3AF" }}>+39 366 30 53 166</a></p>
                    <p style={{ color: "#9CA3AF" }}>📍 Padova</p>
                </div>
            </div>
        </div>
    );
}

export default Contacts;