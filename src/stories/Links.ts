import { html } from 'lit';
import './typography.css';


export interface LinkProps {
    label: string;
    link: string;
    weight: number;
    type: string;
  }

  export const Link = ({label,link, weight,type}:LinkProps) => {
     return html `
        <a href="${link}" class="${[`text-link`, `text-link--${type}`, `font-weight--${weight}`].join(' ')}">
        ${label}
        </a>
     `; 
  }