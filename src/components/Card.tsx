import type {ReactNode} from "react";
import "./Card.css";

interface CardProps {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
}

const Card = ({icon, title, children}: CardProps) => {
    return (
        <div className="card">
            {icon &&
                <span className="card-icon">{icon}</span>
            }

            <h3>{title}</h3>
            <div className="card-content">{children}</div>
        </div>
    )
}

export default Card;