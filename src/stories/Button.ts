import { html } from 'lit';
import './button.css';

export interface ButtonProps {
  label: string,
  buttonType: string,
  buttonSize: string,
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, buttonType, buttonSize, onClick }: ButtonProps) => {

  return html`
    <button
      class=${['button', `button--${buttonType}`, `button--${buttonSize}`].join(' ')}
      @click=${onClick}
    >
      ${label}
    </button>
  `;
};
