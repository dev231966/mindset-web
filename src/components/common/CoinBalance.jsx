export default function CoinBalance({ amount = 5 }) {
  return (
    <div className="coin-balance" title="Saldo de Estudos">
      <div className="coin-icon">
        <span>STD</span>
      </div>

      <div className="coin-count">
        <strong>{amount}</strong>
        <span>Std</span>
      </div>
    </div>
  );
}
