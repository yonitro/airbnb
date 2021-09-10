import { mount, route, lazy } from 'navi'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Router, View } from 'react-navi'

import { withAuthentication } from "./api/authenticatedRoute";
import Landing from './components/pages/Landing'
import Layout from './components/pages/Layout'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'

import Spinner from './components/widgets/Spinner'
import './styles/index.scss';

const routes =
  mount({
    '/': route({
      title: "Landing Page",     
      view: <Landing />,
    }),
    '/login': route({
      title: "Login",     
      view: <Login />,
    }),

    "/profile": withAuthentication(
      route({
        title: "Profile",
        view: <Profile />,
      })
    ),
  })

ReactDOM.render(
  <Router routes={routes} context={{ token: localStorage.getItem("data_token_tookit") }}>
    <Layout>
      <Suspense fallback={<Spinner/>}>
        <View />
      </Suspense>
    </Layout>
  </Router>,
  document.getElementById('root')
)