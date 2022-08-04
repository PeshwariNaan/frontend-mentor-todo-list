import { MainContainer } from "./layout.styles"
import Header from "../header/header.component"
import TaskInput from "../input/input.component"

const Layout = (props) => {
  return (
    <MainContainer>
        <Header />
        <TaskInput />
    </MainContainer>
  )
}

export default Layout