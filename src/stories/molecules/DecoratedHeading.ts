import { html } from 'lit';
import '../typography.css';
import './decoratedHeading.css';

export interface DecoratedHeadingProps {
    label: string;
    position: string;
    tag: string;
}

export const DecoratedHeading = ({position, label, tag}:DecoratedHeadingProps) => {
    switch(tag) {
        case 'h1': 
            return html `
            <h1 class="${[`decorated-heading`, `decorated-heading--${position}`, `text-align-${position}`].join(' ')}">
            <span class="decorated-heading__text">
                ${label}
            </span>
            </h1>`;
        break;
        case 'h2': 
            return html `
            <h2 class="${[`decorated-heading`, `decorated-heading--${position}`, `text-align-${position}`].join(' ')}">
            <span class="decorated-heading__text">
                ${label}
            </span>
            </h2>`;
        break;
        
        case 'h3': 
        return html `
        <h3 class="${[`decorated-heading`, `decorated-heading--${position}`, `text-align-${position}`].join(' ')}">
        <span class="decorated-heading__text">
            ${label}
        </span>
        </h3>`;
    break;
      default: 
      return html `
      <h2 class="${[`decorated-heading`, `decorated-heading--${position}`, `text-align-${position}`].join(' ')}">
         <span class="decorated-heading__text">
          ${label}
         </span>
      </h2>
    `;
      break;
    }
}