import s from './Footer.module.css'
import {FooterProps} from "@/layout/footer/Footer.props";

const Footer = ({...props}: FooterProps) => {
    return (
        <div{...props}>
            footer
        </div>
    );
};

export default Footer;
