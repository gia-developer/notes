import { Link } from "react-router-dom";
import styled from 'styled-components';
import { HiOutlinePencil } from 'react-icons/hi';

const URI = "http://localhost:8000/notes/";

const Open = styled.div`
    background: white;
    padding: 1em;
    border-radius: 8px;
    position: absolute;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    display: flex;
    flex-direction: column;

    a, button {
        border: none;
        background: none;
        color: rgba(0, 0, 0, 0.87);
        cursor: pointer;
        font-size: 16px;
        text-align: left;
        font-family: 'Nunito',sans-serif;
        display: flex;
        align-items: center;

        &:hover {
            text-decoration: underline;
        }

        svg {
            margin-right: .3em;
        }
    }

    button {
        margin-top: .7em;
    }
`;

const Modal = ({id}) => {
    return(
        <Open>
            <Link to={`/edit/${id}`}><HiOutlinePencil />Editar</Link>
        </Open>
    )
}

export default Modal;