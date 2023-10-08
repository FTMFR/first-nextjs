import { MouseEventHandler } from 'react';

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    clickHanlder?: MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | 'submit';
};