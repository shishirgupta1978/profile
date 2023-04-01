import {Layout, HomePage, AboutPage, ContactPage,ProjectsPage} from './pages'
import {Routes,Route,Navigate} from 'react-router-dom'

export function Urls() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Navigate to="/profile/home"/>}/>
      <Route path="home" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="contact" element={<ContactPage/>}/>
      <Route path="projects" element={<ProjectsPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

