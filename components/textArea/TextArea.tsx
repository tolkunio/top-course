import s from './TextArea.module.css'
import cn from "classnames";
import {TextAreaProps} from "@/components/textArea/TextArea.props";

const TextArea = ({children, className, ...rest}: TextAreaProps) => {
    return (
        <textarea placeholder={'text'} className={cn(className ? className : '', s.textArea)}{...rest}/>
    );
};

export default TextArea;
