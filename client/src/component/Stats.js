export default function Stats({ items, amount }) {
  const packedAmount = items.filter((item) => item.packed).length;
  const percent = Math.round((packedAmount / amount) * 100);

  if (amount === 0) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );
  }
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${amount} items on your list, and you already packed ${packedAmount} 
        (${percent}%)`}
      </em>
    </footer>
  );
}
