function App() {
    return (
        <div>
            <h1>Welcome to JSX</h1>

            <p>This is a simple program using JSX markup.</p>

            <h2>Student Details</h2>

            <p>Name: S. Kavyanjali</p>
            <p>Course: B.Tech CSE - AI & DS</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
