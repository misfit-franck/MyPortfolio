import { Link } from "react-router-dom";

const NoExistPage = () => {
  return (
    <section>
      <h2>Euh...?</h2>
      <p>No page found with this url. Get <Link to='/'>Home Page</Link></p>
    </section>
  );
}

export default NoExistPage;