import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Socials() {
  return (
    <div className="socials">
      <a
        href="https://github.com/kamrancodex/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="icons" />
      </a>
      <a
        href="https://x.com/kamran11011/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter className="icons" />
      </a>
    </div>
  );
}

export default Socials;
