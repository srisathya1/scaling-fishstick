import logo from './logo.svg';
import './App.css';

function App() {
  return (
<>
<div>sri</div>
    <div className="form-container">
            <h1>Contact Us</h1>
            <form action="#" method="post">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send</button>
            </form>
        </div>

</>
  );
}

export default App;
