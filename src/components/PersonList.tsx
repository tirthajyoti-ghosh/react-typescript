import { Name } from "./Person.types";

type PersonListProps = {
    names: Name[]
}

export const PersonList = ({ names }: PersonListProps) => {
    return (
        <div>
            <h2>List of people</h2>
            <ul>
                {names.map(name => (
                    <li key={name.first}>{name.first} {name.last}</li>
                ))}
            </ul>
        </div>
    );
};
