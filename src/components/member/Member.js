import "./Member.css";
export function Member(props) {
  console.log(props.name);
  const memberName = props.name;
  const memberCity = props.city;
  return (
    <div className="memberCard">
      <h2>{memberName}</h2>
      <p className="member-sub-heading">{memberCity}</p>
    </div>
  );
}
