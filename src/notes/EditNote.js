import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from 'styled-components';

const URI = "https://l5qwl7rlk3.execute-api.us-east-1.amazonaws.com/notes/";

const Modal = styled.div`
    width: 40%;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    font-weight: 800;
    font-size: 18px;
`;

const Textarea = styled.textarea`
    height: 220px;
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 1.5em;

    a {
        margin-left: 1.5em;
    }
`;

const EditNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        getNoteById();
    }, []);

    const getNoteById = async() => {
        const res = await axios.get(URI + id);
        setTitle(res.data[0].title);
        setContent(res.data[0].content);
    }

    const update = async(e) => {
        e.preventDefault();
        
        if(title.trim() == "" || content.trim() == "") {
            setError(true);
        } else {
            await axios.put(URI + id, {
                title: title,
                content: content
            })
            navigate("/");
        }
    }

    return(
        <Modal>
            <h2>Editar cartita</h2>
            <Form onSubmit={update}>
                <Label>Título
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className={title.trim() == "" && error ? "input--error" : ""} />
                </Label>

                <Label>Contenido
                    <Textarea value={content} onChange={(e) => setContent(e.target.value)} className={content.trim() == "" && error ? "input--error" : ""}></Textarea>
                </Label>

                <Buttons>
                    <button type="submit" className="button button-solid--orange">Editar cartita</button>
                    <Link to="/" className="button button-line--orange">Cancelar</Link>
                </Buttons>
            </Form>
        </Modal>
    )
}

export default EditNote;