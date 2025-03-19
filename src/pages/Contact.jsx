import React from "react";
import { ReactComponent as ReactIcon } from '../assets/react.svg';

const SocialMediaLink = () => {
    return (
        <a href="https://www.linkedin.com/in/ivelis-becker/" target="_blank" rel="noopener noreferrer">
            <ReactIcon url="https://linkedin.com/in/couetilc" style={{ width: '50px', height: '50px' }} />
        </a>
    )
}

export default SocialMediaLink;

// export default function Contact() {
//     return (
//         <div>
//             <h1>Contact Me!</h1>
//             <ul>
//                 <li><a>LinkedIn: </a></li>
//                 <li><a>Email: </a></li>
//                 <li><a>GitHub: </a></li>
//                 <li><a>Click here to download Resume</a></li>
//             </ul>
//         </div>
//     );
// }