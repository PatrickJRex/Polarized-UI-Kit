import { html } from 'lit';
import '../typography.css';
import './review.css';

export interface ReviewProps {
    reviewer: string;
    icon: string;
    reviewHeadline: string;
    reviewText: string;
}

export const Review = ({reviewer, icon, reviewHeadline, reviewText }: ReviewProps) => {
    return html `
     <div class="review-component">
     <header>
        <img src="../assets/${icon}"  alt="${reviewer} profile" />
      <span class="font-weight--600">${reviewer}</span>
     </header>
     <div class="review-component__body">
        <h2 class="font-weight--400">${reviewHeadline}</h2>
        <p class="text-margin-none">
        ${reviewText}
        </p>
     </div>
     </div>
    `;
}