import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ProgressBar from './progressbar';

const CoursesContainer = styled.div`
  overflow: scroll;
  width: 420px;
  height: 440px;
`;
const BarContainer = styled.div`
  display: flex;
  margin: 10px;
  gap: 10px;
`;

const HeaderText = styled.text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
`;

const DateText = styled.text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
`;

function Courses(props: {
  courses: {
    _id: string;
    title: string;
    percentCompleted: number;
    inscriptionDate: string;
  }[];
}) {
  const courses = props.courses.map(
    (course: {
      _id: string;
      title: string;
      percentCompleted: number;
      inscriptionDate: string;
    }) => {
      return (
        <div style={{marginBottom: "25px"}} key={uuidv4()}>
          <HeaderText>{course.title}</HeaderText>
          <BarContainer>
            <ProgressBar bgcolor='linear-gradient(90deg, #0ABB87 6.77%, #6FD466 93.23%)' completed={course.percentCompleted}></ProgressBar>
            <HeaderText>{course.percentCompleted}%</HeaderText>
          </BarContainer>
          <DateText>Fecha de inscripción: {course.inscriptionDate}</DateText>
        </div>
      );
    }
  );

  return <CoursesContainer>{courses}</CoursesContainer>;
}

export default Courses;
