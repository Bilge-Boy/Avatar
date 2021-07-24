import "./header.css";
export default function Header(prop){
    return (
        <h1 className="header">{prop.text}</h1>
    );
}