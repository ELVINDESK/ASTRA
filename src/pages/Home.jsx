import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: 100 }}>
      <h1>Astra IA</h1>

      <button
        onClick={() => navigate("/astra")}
        style={{
          padding: "12px 20px",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        Conversar com Astra
      </button>
    </div>
  );
}