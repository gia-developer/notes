import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import img from '../assets/notes.svg';
import { HiOutlinePlus, HiOutlineCog, HiChevronRight } from 'react-icons/hi';
import Modal from "../components/Modal";

const URI = "https://l5qwl7rlk3.execute-api.us-east-1.amazonaws.com/notes/";

const Main = styled.section`
    position: relative;
    width: 100%;
    min-height: calc(100vh - 8em);
    display: flex;
    justify-content: space-between;
`;

const Notes = styled.section`
    width: 70%;
`;

const H2 = styled.h2`
    margin-bottom: 24px;
`;

const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

const Li = styled.li`
    width: calc(33% - 1.5em);
    background: #F9F9F9;
    border-radius: 8px;
    padding: 1em;
    margin: 0 1.5em 1.5em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a.text--blue {
        margin-top: 1em;
        display: flex;
        align-items: center;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const Icon = styled.div`
    cursor: pointer;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .6em;
`;

const Text = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
            line-clamp: 3; 
    -webkit-box-orient: vertical;
`;

const Created = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1em;

    span {
        font-size: 14px;
    }
`;

const Info = styled.section`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InfoImg = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
`;

const InfoImgP = styled.p`
    padding: 1em 0 2em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

const Img = styled.img`
    width: 65%;
    margin: auto;
    margin-bottom: 2em;
`;

const H3 = styled.h3`
    padding-top: 1.5em;
    margin-bottom: 1em;
`;

const VersionList = styled.li`
    list-style: disc;
    margin-bottom: 1em;
`;

const ShowNotes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() =>{
        getNotes();
    }, []);

    const getNotes = async() => {
        const res = await axios.get(URI);
        setNotes(res.data);
    }

    const [openModal, setOpenModal] = useState("");
    const [isOpen, setIsOpen] = useState("");
    return(
        <>
            <Main>
                <Notes>
                    <H2>Cartitas 📝</H2>
                    <Link to="/create" className="button button--float">
                        <HiOutlinePlus size={18} /> Crear cartita
                    </Link>
                    {notes.length == 0 ? <p>Aún no hay cartitas. Comienza a redactar una utilizando el botón de <i>"Crear cartita"</i>.</p> :
                        <Ul>
                            {notes.map((note) => (
                                <Li key={note.id}>
                                    <div>
                                        <Title>
                                            <h3>{note.title}</h3>
                                            <Icon>
                                                <HiOutlineCog size={22} color="rgba(0, 0, 0, 0.5)" onClick={() => {setOpenModal(note.id); setIsOpen(!isOpen)}} />
                                                {isOpen && openModal === note.id ? <Modal id={note.id} /> : ""}
                                            </Icon>
                                        </Title>
                                        <Text>{note.content}</Text>
                                    </div>
                                    <Created>
                                        <span className="text--grey">{note.createdAt}</span>
                                        <span className="text--orange">{note.createdBy}</span>
                                    </Created>
                                    <Link to={`note/${note.id}`} className="text--blue">Ver nota <HiChevronRight size={18} /></Link>
                                </Li>
                            ))}
                        </Ul>
                    }
                </Notes>
                <Info>
                    <InfoImg>
                        <div>
                            <h2>Una manera de expresar tus sentimientos o ideas 💡</h2>
                            <InfoImgP><i>Cartitas de amó</i> se creó con la intención de que cada día relatemos lo que sentimos  o pensamos, una forma un poco diferente para decir cosas bonitas.</InfoImgP>
                        </div>
                        <Img src={img} alt="Chica escribiendo notas" />
                    </InfoImg>
                    <H3>Notas de la versión (beta)</H3>
                    <ul>
                        <VersionList>Crear cartitas</VersionList>
                        <VersionList>Editar cartitas</VersionList>
                        <VersionList>Asignar usuario manualmente</VersionList>
                    </ul>
                </Info>
            </Main>
        </>
    )
}

export default ShowNotes;