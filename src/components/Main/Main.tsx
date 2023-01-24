import { Container } from "./StyledMain"
import {pop, rock, hipHop, metal} from "./../../Utils/Musics"
import { useState } from "react"

const Main = () => {


    return (
        <Container>
            {
                rock.map((element) => (
                    <p>{element.name} - {element.autor}</p>
                ))
            }
        </Container>
    )
}

export default Main;