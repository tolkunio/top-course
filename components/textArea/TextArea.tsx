import s from './TextArea.module.css'
import cn from "classnames";
import {TextAreaProps} from "@/components/textArea/TextArea.props";
import {forwardRef, ForwardedRef} from "react";

const TextArea = forwardRef(({className,error, ...rest}: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div className={s.textAreaWrapper}>
            <textarea
                className={cn(className ? className : '', s.textArea,{
                    [s.error]:error
                })} ref={ref} {...rest}/>
            {error && <span className={s.errorMsg}>{error.message}</span>}
        </div>
    );
});

export default TextArea;
