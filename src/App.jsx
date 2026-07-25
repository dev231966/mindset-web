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
import Evolucao from './pages/Evolucao.jsx'
import AjudaSuporte from './pages/AjudaSuporte.jsx'
import ConvidarAmigos from './pages/ConvidarAmigos.jsx'
import Conquistas from './pages/Conquistas.jsx'
import SequenciaEstudo from './pages/SequenciaEstudo.jsx'
import QuadroHonra from './pages/QuadroHonra.jsx'
import LojaRecompensas from './pages/LojaRecompensas.jsx'
import Perfil from './pages/Perfil.jsx'
import Configuracoes from './pages/Configuracoes.jsx'

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

        <Route path="/evolucao" element={<Evolucao />} />

        <Route path="/ajuda-suporte" element={<AjudaSuporte />} />

        <Route path="/convidar-amigos" element={<ConvidarAmigos />} />

        <Route path="/conquistas" element={<Conquistas />} />

        <Route path="/sequencia-estudo" element={<SequenciaEstudo />} />

        <Route path="/quadro-honra" element={<QuadroHonra />} />

        <Route path="/loja-recompensas" element={<LojaRecompensas />} />

        <Route path="/perfil" element={<Perfil />} />

        <Route path="/configuracoes" element={<Configuracoes />} />

      </Route>

    </Routes>
  )
}
