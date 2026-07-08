import type {ReactNode} from "react";
import styles from "./Card.module.css";

interface CardProps {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
}

const Card = ({icon, title, children}: CardProps) => {
    return (
        <div className={styles.card}>
            {icon &&
                <span className={styles.cardIcon}>{icon}</span>
            }

            <h3>{title}</h3>
            <div className={styles.cardContent}>{children}</div>
        </div>
    )
}

export default Card;