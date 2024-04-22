import { html } from 'lit';


export interface DialogProps {
    mode: boolean;
    open: boolean;
    content: string;
}

export const Dialog = ({mode, open, content}: DialogProps) => {
    return html `
      <dialog ${open}>
       ${content}
      </dialog>
    `;
}