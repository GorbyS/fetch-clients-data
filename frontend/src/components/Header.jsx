export default function Header({title, perex}) {
    return (
        <header className="header">
            <h3>{title}</h3>
            <span>{perex}</span>
        </header>
    )
}