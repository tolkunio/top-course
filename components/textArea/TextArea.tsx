import s from './TextArea.module.css'
import cn from "classnames";
import {TextAreaProps} from "@/components/textArea/TextArea.props";
import {forwardRef,ForwardedRef} from "react";

const TextArea = forwardRef(({className, ...rest}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <textarea className={cn(className ? className : '', s.textArea)} ref={ref} {...rest}/>
    );
});

export default TextArea;
