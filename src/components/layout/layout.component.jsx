import { MainContainer } from "./layout.styles"
import Header from "../header/header.component"
import TaskInput from "../input/input.component"
import TaskList from "../task-list/task-list.component"

const Layout = (props) => {
  return (
    <MainContainer>
        <Header />
        <TaskInput />
        <TaskList />
    </MainContainer>
  )
}

export default Layout