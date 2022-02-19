import "./Student.scss";
import studentImage from "../../assets/images/test-account.png";

function Student(props) {
  return (
    <>
      <div className="student">
        <div className="student__content">
          <img
            className="student__image"
            src={studentImage}
            alt="Test Student Account"
          />
        </div>
        <h4 className="student__title">{props.name}</h4>
      </div>
    </>
  );
}

export default Student;
