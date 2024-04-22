import { html } from "lit";
import './collapsable.css';
import './typography.css';

export interface CollapsableProps {
    summary: string;
    details: string;
    type: string;
}


export const Collapsable = ({summary, details, type}: CollapsableProps) => {
    return html `
        <details class="${[`collapsable`, `collapsable--${type}`].join(' ')}">
          <summary>
          <h5 class="font-weight--500">${summary}</h5>
          ${type === 'faq' ? html `<i class="fa fa-arrow-circle-down text-color--brand-yellow"></i>` : ``}
    
          </summary>
          <div>
          <p>${details}</p>
          </div>
        </details>
    `;
}