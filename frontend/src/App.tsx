import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1 className="text-2xl">Главная страница</h1>;
}

function Tasks() {
  return <h1 className="text-2xl">Список задач</h1>;
}

function Team() {
  return <h1 className="text-2xl">Команда</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        {/* Шапка */}
        <header className="border-b p-4 bg-card">
          <h1 className="text-xl font-bold">TaskFlow</h1>
          <nav className="mt-2 space-x-4">
            <Link to="/">Главная</Link>
            <Link to="/tasks">Задачи</Link>
            <Link to="/team">Команда</Link>
          </nav>
        </header>

        {/* Контент */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
