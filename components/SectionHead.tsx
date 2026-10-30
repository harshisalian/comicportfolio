export default function SectionHead({ title, num }: { title: string; num: string }) {
  return (
    <div className="section-head">
      <h2 className="display" data-reveal="left">{title}</h2>
      <span className="section-num" data-reveal="right">{num}</span>
    </div>
  );
}
