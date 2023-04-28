import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const TableField = styled.td`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
`;

const TableFieldButton = styled.td`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  padding-left: 15px;
`;

const TableRow = styled.tr`
  height: 60px;
  border-bottom: 1px solid #cdcdcd;
`;

const TextBox = styled.div`
  display: inline-block;
  padding: 5px;
  background-color: #f0f4f3;
  border: 0.5px solid #9e9e9e;
  border-radius: 5px;
`;

function DashboardRows(props: {
  students: {
    _id: string;
    isOnline: boolean;
    name: string;
    avatar: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    inscriptionDate: Date;
    courses: {
      _id: string;
      title: string;
      percentCompleted: number;
      inscriptionDate: Date;
    }[];
  }[];
}) {
  const dashboardrows = props.students.map(
    (student: {
      _id: string;
      isOnline: boolean;
      name: string;
      avatar: string;
      lastName: string;
      username: string;
      email: string;
      phone: string;
      inscriptionDate: Date;
      courses: {
        _id: string;
        title: string;
        percentCompleted: number;
        inscriptionDate: Date;
      }[];
    }) => {
      return (
        <TableRow key={uuidv4()}>
          {student.isOnline && (
            <TableFieldButton style={{ width: '10%' }}>
              <TextBox>Online</TextBox>
            </TableFieldButton>
          )}
          {!student.isOnline && (
            <TableFieldButton style={{ width: '10%' }}>
              <TextBox>Offline</TextBox>
            </TableFieldButton>
          )}
          <TableField style={{ width: '20%' }}>
            {student.name} {student.lastName}
          </TableField>
          <TableField style={{ width: '20%' }}>{student.username}</TableField>
          <TableField style={{ width: '30%' }}>{student.email}</TableField>
          <TableField style={{ width: '20%' }}>{student.phone}</TableField>
        </TableRow>
      );
    }
  );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{dashboardrows}</>;
}

export default DashboardRows;
