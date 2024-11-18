import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";
import BookmarkPage from "./views/Bookmark";
import { Toaster } from "@/components/ui/toaster";

function App() {
    return (
        <>
            <BrowserRouter>
                <Toaster />
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/bookmark" element={<BookmarkPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
