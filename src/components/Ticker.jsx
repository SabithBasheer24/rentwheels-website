import { TICKER_TAGS } from "../data";

export default function Ticker() {
  // Duplicate the list so the CSS scroll animation loops seamlessly
  const tags = [...TICKER_TAGS, ...TICKER_TAGS];

  return (
    <div className="ticker">
      <div className="ticker-track">
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </div>
  );
}
