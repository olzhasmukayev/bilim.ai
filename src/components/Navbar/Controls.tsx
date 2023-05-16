import ControlItem from "./ControlItem";

const Controls: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-row justify-center w-full gap-6">
        <ControlItem label="Предметы" onClick={() => {}} />
        <ControlItem label="Экзамены" onClick={() => {}} />
        <ControlItem label="Учебные Центры" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Controls;
