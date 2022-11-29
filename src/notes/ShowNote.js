import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';

const URI = "https://l5qwl7rlk3.execute-api.us-east-1.amazonaws.com/notes/";

const Section = styled.section`
    width: 40%;
`;

const P = styled.p`
    margin: .5em 0 1em;
`;

const Created = styled.div`
    margin: .5em 0 1em;

    .text--grey {
        margin-right: 1em;
    }
`;

const ShowNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [createdAt, setCreatedAt] = useState("");
    const {id} = useParams();

    useEffect(() => {
        getNoteById();
    }, []);

    const getNoteById = async() => {
        const res = await axios.get(URI + id);
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
        setCreatedBy(res.data[0].createdBy);
        setCreatedAt(res.data[0].createdAt);
    }

    return(
        <Section>
            <h2>{title}</h2>
            <Created>
                <span className="text--grey">{createdAt}</span>
                <span className="text--orange">{createdBy}</span>
            </Created>
            <P>{content}</P>
            <Link to="/" className="button button-solid--orange">Volver</Link>
        </Section>
    )
}

export default ShowNote;