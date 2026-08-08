import navigation from "../../Pages/navigation";

function MobileMenu({ isOpen, onClose }) {

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>

      <ul>

        {navigation.map((item) => (

          <li key={item.id}>

            <a
              href={`#${item.id}`}
              onClick={onClose}
            >
              {item.label}
            </a>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default MobileMenu;