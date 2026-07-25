import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Explicacao from './pages/Explicacao.jsx'
import Avaliacao from './pages/Avaliacao.jsx'
import Estudos from './pages/Estudos.jsx'
import Ferramentas from './pages/Ferramentas.jsx'
import Material from './pages/Material.jsx'

import './App.css'


export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/explicacao" element={<Explicacao />} />

        <Route path="/avaliacao" element={<Avaliacao />} />

        <Route path="/estudos" element={<Estudos />} />

        <Route path="/ferramentas" element={<Ferramentas />} />

        <Route path="/material" element={<Material />} />

      </Route>

    </Routes>
  )
}
