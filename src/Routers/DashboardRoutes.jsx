import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NavbarPage from '../components/UI/NavbarPage'
import MarvelPage from '../components/Marvel/MarvelPage'
import HeroesPage from '../components/Heroes/HeroesPage'
import DcPage from '../components/CD/DcPage'
import SearchPage from '../components/Search/SearchPage'
import LandingPage from '../components/LandingPage/LandingPage'

const DashboardRoutes = () => {
    return (
        <>
            <NavbarPage />

            <Switch>
                <Route exact path="/marvel" component= {MarvelPage} />
                <Route exact path="/hero/:heroeId" component= {HeroesPage} />
                <Route exact path="/dc" component= {DcPage} />
                <Route exact path="/search" component= {SearchPage} />
                <Route exact path="/" component= {LandingPage} />
                
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default DashboardRoutes
