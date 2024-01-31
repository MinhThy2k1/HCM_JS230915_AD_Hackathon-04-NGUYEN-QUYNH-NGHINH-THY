
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/home/layout'
import QuestionDetail from '../pages/question_detail/QuestionDetail'

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}>

          <Route path='question_detail' element={<QuestionDetail />}></Route>

        </Route>

      </Routes>

    </BrowserRouter>
  )

}