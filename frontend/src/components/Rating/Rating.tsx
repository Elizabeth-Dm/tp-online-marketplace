import "./Rating.scss";

type RatingProps = {
  value: number;
  class?: string;
};

export function Rating({ value, class: className = "" }: RatingProps) {
  return (
    <div
      class={`rating ${className}`}
      role="img"
      aria-label={`Оценка: ${value} из 5`}
    >
      {Array.from({ length: value }, (_, i) => (
        <span class="rating__star" key={i}>
          ★
        </span>
      ))}
    </div>
  );
}