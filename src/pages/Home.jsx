import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/chat")}>
      Conversar com Astra
    </button>
  );
}

export default Home;