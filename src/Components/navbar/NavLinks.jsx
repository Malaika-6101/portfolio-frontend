import navigation from "../../Pages/navigation";

function NavLinks() {
  return (
    <ul className="nav-links">
      {navigation.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default NavLinks;