import { html } from 'lit';
import './typography.css';

export interface TypeProps {
    label: string;
    weight: number;
    tag: string;
  }

  /**
 * Primary Text component for user interaction
 */
export const Typography = ({ label, weight, tag }: TypeProps) => {
     switch(tag) {
        case 'p':
            return html `
              <p class="${[`font-weight--${weight}`].join(' ')}">
              ${label}
              </p>
            `;
            break;

            case 'small':
                return html `
                  <small class="${[`font-weight--${weight}`].join(' ')}">
                  ${label}
                  </small>
                `;
                break;

                case 'JUMBO':
                    return html `
                      <h1 class="${[`jumbo`,`font-weight--${weight}`].join(' ')}">
                      ${label}
                      </h1>
                    `;
                    break;

            case 'h1':
                return html `
                  <h1 class="${[`font-weight--${weight}`].join(' ')}">
                  ${label}
                  </h1>
                `;
                break;
                case 'h2':
                    return html `
                      <h2 class="${[`font-weight--${weight}`].join(' ')}">
                      ${label}
                      </h2>
                    `;
                    break;
                    case 'h3':
                        return html `
                          <h3 class="${[`font-weight--${weight}`].join(' ')}">
                          ${label}
                          </h3>
                        `;
                        break;

                        case 'h4':
                            return html `
                              <h4 class="${[`font-weight--${weight}`].join(' ')}">
                              ${label}
                              </h4>
                            `;
                            break;

                            case 'h5':
                                return html `
                                  <h5 class="${[`font-weight--${weight}`].join(' ')}">
                                  ${label}
                                  </h5>
                                `;
                                break;
            default: 
            return html `
            <p class="${[`font-weight--${weight}`].join(' ')}">
            ${label}
            </p>
          `;
            break
     }
  };