import { LeafyGreen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary p-10 text-primary-content footer footer-center">
      <aside>
        <LeafyGreen className="w-20 h-20" />
        <p className="font-bold">
          An Image slider app by Sadia Promi (Rotna) <br />
          for Software Development Lab II
        </p>
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav>
        <div className="gap-4 grid grid-flow-col"></div>
      </nav>
    </footer>
  );
};

export default Footer;
