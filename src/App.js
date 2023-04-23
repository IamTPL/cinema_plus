import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage/HomePage';
import LoginPage from './Page/LoginPage/LoginPage';
import Layout from './Layout/Layout';
import Spinner from './component/Spinner/Spinner';
import DetailPage from './Page/DetailPage/DetailPage';
import BookingPage from './Page/BookingPage/BookingPage';
import SignPage from './Page/SignPage/SignPage';
import BookingHistory from './Page/BookingHistory/BookingHistory';

function App() {
    return (
        <div className="">
            <Spinner></Spinner>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Layout Component={HomePage}></Layout>}
                    ></Route>
                    <Route
                        path="/login"
                        element={<LoginPage></LoginPage>}
                    ></Route>
                    <Route
                        path="/sign_up"
                        element={<SignPage></SignPage>}
                    ></Route>
                    <Route
                        path="/booking_history"
                        element={<Layout Component={BookingHistory}></Layout>}
                    ></Route>
                    <Route
                        path="/detail/:id"
                        element={<Layout Component={DetailPage}></Layout>}
                    ></Route>
                    <Route
                        path="/booking/:id"
                        element={<Layout Component={BookingPage}></Layout>}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
