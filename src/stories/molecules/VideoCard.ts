import { html } from "lit";
import '../../../node_modules/lite-youtube-embed/src/lite-yt-embed.css';
import '../../../node_modules/lite-youtube-embed/src/lite-yt-embed.js';
import './videoCard.css'

export interface VideoCardProps {
    image: string;
    videoId: string;
    alt: string;
}

export const VideoCard = ({videoId, image, alt}:VideoCardProps) => {
    let backgroundImage = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
    if(image) {
        backgroundImage = image;
    }
    return html `
    <lite-youtube videoid="${videoId}" style="background-image: url(${backgroundImage});">
    <a href="https://youtube.com/watch?v=${videoId}" class="lty-playbtn lty-playbtn--polarized" title="Play Video">
      <span class="lyt-visually-hidden">${alt}</span>
    </a>
    <div class="lty-fill"></div>
  </lite-youtube>   
    `;
}