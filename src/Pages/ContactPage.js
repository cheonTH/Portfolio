import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
    return(
        <div className='contact-page'>
            <div className="contact-container">
                <h2>Contact</h2>
                <div>
                    <span>E-mail : xogus0530@gmail.com</span>
                </div>
                <div>
                    <span>Github</span>
                    <Link to="https://github.com/cheonTH">
                        <div className='github-btn'>
                            GitHub
                        </div>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default ContactPage