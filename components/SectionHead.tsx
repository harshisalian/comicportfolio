export default function SectionHead({ title, num }: { title: string; num: string }) {
  return (
    <div className="section-head">
      <h2 className="display">{title}</h2>
      <span className="section-num">{num}</span>
    </div>
  );
}
