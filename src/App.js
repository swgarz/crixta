import './App.css';
import logo from './media/images/logo.png'
import video from './media/LOOP.mp4'
import {Container, Heading, Hero, Icon} from 'react-bulma-components'
import React from "react";

const App = () => {
    return <Hero color={""} size={"fullheight"}>
        <Hero.Header/>
        <Hero.Body>
            <Container textAlign={"center"}>                
                <video  id="framevideo" src={video} width="22%" height="22%" autoPlay loop muted frameborder="0" y framespacing="0" playsinline="playsinline"/>

                <Heading data-testid={'logo'}>
                    <img src={logo} alt="Crixta"/>
                </Heading>
                <Heading subtitle>
                    <Icon data-testid={'icon-facebook'}>
                        <a href="https://www.facebook.com/CrixtaOficial" target="_blank" rel={"noreferrer"}>
                            <i className="fab fa-facebook"/>
                        </a>
                    </Icon>
                    <Icon data-testid={'icon-instagram'}>
                        <a href="https://www.instagram.com/crixtaoficial/" target="_blank" rel={"noreferrer"}>
                            <i className="fab fa-instagram"/>
                        </a>
                    </Icon>
                    <Icon data-testid={'icon-youtube'}>
                        <a href="https://www.youtube.com/channel/UCNxI716ucEaJF8tvUY10ZZA" target="_blank"
                           rel={"noreferrer"}>
                            <i className="fab fa-youtube"/>
                        </a>
                    </Icon>
                    <Icon data-testid={'icon-spotify'}>
                        <a href="https://open.spotify.com/artist/4uZYPtWqPX3Pq3aRZaCNIf?autoplay=true" target="_blank"
                           rel={"noreferrer"}>
                            <i className="fab fa-spotify"/>
                        </a>
                    </Icon>
                    <Icon data-testid={'icon-spotify'}>
                        <a href="https://open.spotify.com/artist/4uZYPtWqPX3Pq3aRZaCNIf?autoplay=true" target="_blank"
                           rel={"noreferrer"}>
                            <i className="fa fa-envelope"/>
                        </a>
                    </Icon>
                    
                </Heading>
            </Container>
        </Hero.Body>
        <Hero.Footer/>
    </Hero>;
};

export default App;
