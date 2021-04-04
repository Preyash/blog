import React from 'react'
import Navbar from './Navbar'
import { Jumbotron, Container } from 'reactstrap';

export default function Layout({ children }) {
    let checker = location.pathname === '/login' || location.pathname === '/register'
    return (
        <main>
            {!checker && <Navbar />}
            <Jumbotron>
                <Container>
                    {children}
                </Container>
            </Jumbotron>
        </main>
    )
}
