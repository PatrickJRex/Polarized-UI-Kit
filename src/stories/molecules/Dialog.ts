import { html } from 'lit';


export interface DialogProps {
    open: boolean;
    content: string;
}

export const Dialog = ({open, content}: DialogProps) => {
    return html `
      <dialog ${open}>
       ${content}
      </dialog>
    `;
}