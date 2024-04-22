import { html } from "lit";
import '../typography.css';
import './whySoPolarized.css';

export interface WhySoProps {
    headingImage: string;
    headline: string;
    bodyCopy: string;
    socialHeading: string;
}

export const WhySoPolarized = ({headingImage, headline, bodyCopy, socialHeading}: WhySoProps) => {
    return html `
        <section class="component-why-so-polarized">
           <header>
            <h2 class="component-why-so-polarized__headline text-align-center font-weight--600">
                <span>Why</span>
                <img src="../assets/${headingImage}" alt="Polarized" />
                <span>?</span>
            </h2>
           </header>
           <div class=" text-align-center component-why-so-polarized__body">
            <h4 class="font-weight--400">${headline}</h4>
            ${bodyCopy}

            <p class="text-margin-none">${socialHeading}</p>
            <nav class="component-why-so-polarized__socials">
              <a>
                <h4><i class="fa fa-facebook"></i></h4>
              </a>
              <a>
              <h4>
              <i class="fa fa-twitter"></i>
              </h4>
              </a>
              <a>
              <h4>
              <i class="fa fa-instagram"></i>
              </h4>
              </a>
              <a>
              <h4>
              <i class="fa fa-youtube"></i>
              </h4>
              </a>
            </nav>
           </div>

           <div class="floaters">
            <img src="../assets/icon-fun.svg" class="floaters__fun" alt="fun"/>
            <img src="../assets/icon-risky.svg" class="floaters__risky" alt="risky"/>
            <img src="../assets/icon-dangerous.svg" class="floaters__dangerous" alt="dangerous"/>
           </div>
        </section>
    `;
}