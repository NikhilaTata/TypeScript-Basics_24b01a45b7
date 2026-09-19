function StudentDetails() {
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: S. Kavyanjali</p>
            <p>Course: B.Tech CSE - AI & DS</p>
        </div>
    );
}

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to React</h1>
                <p>This is a class component.</p>
            </div>
        );
    }
}

function MainComponent() {
    return (
        <div>
            <Welcome />
            <StudentDetails />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
