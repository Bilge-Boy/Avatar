import Img from "./Img/img";
import Header from "./header/header";
export default function Avatar(prop){
    return(
        <div className="card">
            <Header text="Hello There!" />
            <Img src={prop.src}/>
        </div>
    );
}