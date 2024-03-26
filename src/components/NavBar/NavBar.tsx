import Button from "./Button/Button"
import "./navbar.css"

export default function NavBar() {
  return (
    <nav className="navbar">
        <Button link="/portfolio/" type="primary" label="Home"/>
        <Button link="/portfolio/studies" type="primary" label="Studies"/>
        <Button link="/portfolio/contact" type="primary" label="Contact"/>
    </nav>
  )
}
