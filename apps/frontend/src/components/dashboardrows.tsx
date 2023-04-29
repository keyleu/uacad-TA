import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { SlInfo } from 'react-icons/sl';
import React from 'react';

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

const PhoneField = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: flex-start;
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
    inscriptionDate: string;
    courses: {
      _id: string;
      title: string;
      percentCompleted: number;
      inscriptionDate: string;
    }[];
  }[];
  setId: (arg0: string) => void;
  setStudent: (arg0: {
    _id: string;
    isOnline: boolean;
    name: string;
    avatar: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    inscriptionDate: string;
    courses: {
      _id: string;
      title: string;
      percentCompleted: number;
      inscriptionDate: string;
    }[];
  }) => void;
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
      inscriptionDate: string;
      courses: {
        _id: string;
        title: string;
        percentCompleted: number;
        inscriptionDate: string;
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
          <TableField style={{ width: '25%' }}>{student.email}</TableField>
          <TableField style={{ width: '25%' }}>
            <PhoneField>
              {student.phone}
              <div
                onClick={() => {
                  props.setId(student._id); props.setStudent(student);
                }}
              >
                <SlInfo cursor={"pointer"} size={'24px'}></SlInfo>
              </div>
            </PhoneField>
          </TableField>
        </TableRow>
      );
    }
  );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{dashboardrows}</>;
}

export default React.memo(DashboardRows);
