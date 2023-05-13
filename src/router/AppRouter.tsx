import { Navigate, Route, Routes } from "react-router-dom"
import UserApplication from "../components/userApplication/user-application.component"
import FormComponent from "../components/formComponent/form.component"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/userForm" element={<FormComponent />} />
                <Route path="/userApplication/:id" element={<UserApplication />} />
                <Route path="/" element={<Navigate to={"/userForm"} />}></Route>
            </Routes>
        </>
    )
}