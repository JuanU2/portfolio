import "./button.css"
interface ButtonProps {
    label: string,
    type: string,
    link: string
}

export default function Button( props: ButtonProps ) {
  return (
    <a href={props.link} className={"menu-button " + props.type}>{props.label}</a>
  )
}
