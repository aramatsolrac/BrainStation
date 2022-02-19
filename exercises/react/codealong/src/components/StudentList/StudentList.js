import Student from "../Student/Student";
import "./StudentList.scss";

function StudentList() {
  return (
    <>
      <section className="student-list">
        <Student name="Robson" />
        <Student name="Preto" />
        <Student name="Lucas" />
      </section>
    </>
  );
}

export default StudentList;
