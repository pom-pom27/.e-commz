import "./announcer.scss";
interface IAnnouncer {}

const Announcer: React.FC<IAnnouncer> = () => {
  return (
    <div className="anno">Super Deal! Free shipping on orders over $50</div>
  );
};

export default Announcer;
