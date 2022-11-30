import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const URI = "http://localhost:8000/notes/";

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

const CreateNote = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const store = async(e) => {
        e.preventDefault();
        
        if(title.length === 0 || content.length === 0 || createdBy.length === 0) {
            setError(true);
        } else {
            await axios.post(URI, {
                title: title,
                content: content,
                createdAt: month < 10 ? `${year}-0${month}-${day}` : `${year}-${month}-${day}`,
                createdBy: createdBy
            })
            navigate("/");
        }
    }

    return(
        <Modal>
            <h2>Agregar cartita</h2>
            <Form onSubmit={store}>
                <Label>Título
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className={title.length == 0 && error ? "input--error" : ""} />
                </Label>

                <Label>Contenido
                    <Textarea value={content} onChange={(e) => setContent(e.target.value)} className={content.length == 0 && error ? "input--error" : ""}></Textarea>
                </Label>

                <Label>Creado por
                    <input value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} type="text" className={createdBy.length == 0 && error ? "input--error" : ""} />
                </Label>

                <Buttons>
                    <button type="submit" className="button button-solid--orange">Crear cartita</button>
                    <Link to="/" className="button button-line--orange">Cancelar</Link>
                </Buttons>
            </Form>
        </Modal>
    )
}

export default CreateNote;