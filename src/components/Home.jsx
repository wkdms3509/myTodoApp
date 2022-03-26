import './Home.css';

const Home = ({children, Today}) => {
    return (
        <div className="Container">
            <div className="today">{Today()}</div>
            <h1>Todo App</h1>
            <div>{children}</div>
        </div>
    )
}

export default Home;