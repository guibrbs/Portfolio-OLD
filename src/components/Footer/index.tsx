import './styles.css'

export default function Footer() {
    return(
        <footer className="footer-container">
            <div id="footer-description">
                <h3>Guilherme Barbosa Ferreira</h3>
                <p>Técnico em Informática</p>
                <p>Graduando em Engenharia de Software</p>
            </div>
            <div>
                <h3>Contato:</h3>
                <div className="contact-div">
                    <p>Telefone: (61) 99119-9619 |</p>
                    <a href="https://wa.me/5561991199619" target={'_blank'} rel={"noreferrer noopener"} className="wpp"><i className="fa-brands fa-whatsapp"></i></a>
                </div>
                <p>Email: mrguilhermeferreira@gmail.com</p>
            </div>
        </footer>
    )
}