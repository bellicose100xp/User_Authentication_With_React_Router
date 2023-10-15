import { useParams, useLocation } from "react-router-dom";

export default function Contact() {
    const { id } = useParams();
    const location = useLocation();

    return <p> Contacts Page for id {id} at location {location.pathname} </p>;
}
