const container = document.getElementById('container');

// const h1 = document.createElement(
//     'h1'
// );
// h1.innerText = 'hello from js'

// <div><h1><u>hello world from react</u></h1></div>

function Hello() {
    return <div><h1><u>hello world from react + jsx</u></h1></div>
}

const div = <Hello />

// const div =  React.createElement(
//     'div',
//     null,
//     React.createElement(
//         'h1',
//         null,
//         React.createElement(
//             'u',
//             null,
//             'hello world from react'
//         )
//     )
// )

const Header = () => {
    return <header><Menu /></header>
}

function Menu() {
    return <nav><ul><li><a href="google.com">google</a></li></ul></nav>
}

function Login() {
    return (
        <form>
            <input type="text" />
        </form>
    )
}

function Footer() {
    return <footer>hello footer</footer>
}

function App() {
    return (
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    )
}

// container.appendChild(h1);
ReactDOM.render(<App />, container);