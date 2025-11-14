import { Link } from "@tanstack/react-router";
import type gridItem from "./gridItem";


interface gridItems {
    items: gridItem[];
}


export default function GridView({ items }: gridItems) {
    return (
        <div className="projectGrid">
            <ul>
                {items.map((item) => (
                    <li>
                        <Link to={item.thumbnailURL}>
                            <div className="gridItem">
                                <Link to={item.projectURL}>
                                    <img src={item.thumbnailURL} alt={item.thumbnailAlt} width="100%" style={{display:"block"}}/>
                                    <h3>{item.projectName}</h3>
                                </Link>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
};