import { Link } from "@tanstack/react-router";
import type gridItem from "./gridItem";


interface gridItems{
    items: gridItem[];
}


export default function GridView({items}: gridItems) {
    return (
        <>
            <ul>
                {items.map((item) => (
                    <li>
                        <Link to={item.thumbnailURL}>
                            {items.map((item) => (
                                <li>
                                    <Link to={item.projectURL}>
                                        <img src={item.thumbnailURL} alt={item.thumbnailAlt} />
                                        <h3>{item.projectName}</h3>
                                    </Link>
                                </li>
                            ))}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};