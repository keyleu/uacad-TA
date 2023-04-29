import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 480px;
  height: 611px;
  background-color: white;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 24px;
  padding-right: 24px;
  gap: 8px;
`;

const CloseButton = styled.button`
  background: white;
  width: 152px;
  height: 32px;
  color: #262d34;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const SaveButton = styled.button`
  background: #262d34;
  width: 91px;
  height: 32px;
  border-radius: 8px;
  color: white;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const FieldText = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
`;

const Input = styled.input`
  type: 'string';
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  height: 30px;
  margin-top: 5px;
`;

const Form = styled.form`
  padding-top: 60px;
  padding-left: 50px;
  padding-right: 26px;
`;

const InputContainer = styled.div`
  padding-bottom: 20px;
`;

function EditStudent(props: {
  isEditOpen: boolean;
  toggleEditModal: () => void;
  toggleParentModal: () => void;
  student: {
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
  };
  setJsonData: (
    arg0: {
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
    }[]
  ) => void;
}) {
  const [studentCopy, setStudentCopy] = useState(
    JSON.parse(JSON.stringify(props.student))
  );
  function handleNameChange(value: ChangeEvent<HTMLInputElement>): void {
    const newStudent = JSON.parse(JSON.stringify(studentCopy));
    newStudent.name = value.currentTarget.value;
    setStudentCopy(newStudent);
  }

  function handleLastNameChange(value: ChangeEvent<HTMLInputElement>): void {
    const newStudent = JSON.parse(JSON.stringify(studentCopy));
    newStudent.lastName = value.currentTarget.value;
    setStudentCopy(newStudent);
  }

  function handleUsernameChange(value: ChangeEvent<HTMLInputElement>): void {
    const newStudent = JSON.parse(JSON.stringify(studentCopy));
    newStudent.username = value.currentTarget.value;
    setStudentCopy(newStudent);
  }

  function handleEmailChange(value: ChangeEvent<HTMLInputElement>): void {
    const newStudent = JSON.parse(JSON.stringify(studentCopy));
    newStudent.email = value.currentTarget.value;
    setStudentCopy(newStudent);
  }

  function handlePhoneChange(value: ChangeEvent<HTMLInputElement>): void {
    const newStudent = JSON.parse(JSON.stringify(studentCopy));
    newStudent.phone = value.currentTarget.value;
    setStudentCopy(newStudent);
  }

  function closeEdit() {
    setStudentCopy(JSON.parse(JSON.stringify(props.student)));
    props.toggleEditModal();
  }

  const PatchRequest = () => {
    // sending PATCH request with fetch API in javascript
    fetch(`http://localhost:3333/api/${studentCopy._id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',

      // Fields that to be updated are passed
      body: JSON.stringify(studentCopy),
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (data) {
        props.setJsonData(data);
      });
  };

  function handleSave() {
    PatchRequest();
    props.toggleEditModal();
    props.toggleParentModal();
  }

  return (
    <StyledModal isOpen={props.isEditOpen}>
      <ButtonContainer>
        <CloseButton onClick={closeEdit}>Cancelar edición</CloseButton>
        <SaveButton onClick={handleSave}>Guardar</SaveButton>
      </ButtonContainer>
      <Form>
        <InputContainer style={{ display: 'flex' }}>
          <div>
            <FieldText>Nombre</FieldText>
            <Input
              style={{ width: '182px' }}
              value={studentCopy.name}
              onChange={(value) => handleNameChange(value)}
            ></Input>
          </div>
          <div>
            <FieldText>Apellidos</FieldText>
            <Input
              style={{ width: '182px' }}
              value={studentCopy.lastName}
              onChange={(value) => handleLastNameChange(value)}
            ></Input>
          </div>
        </InputContainer>
        <InputContainer>
          <FieldText>Nombre de usuario</FieldText>
          <Input
            style={{ width: '382px' }}
            value={studentCopy.username}
            onChange={(value) => handleUsernameChange(value)}
          ></Input>
        </InputContainer>
        <InputContainer>
          <FieldText>Email</FieldText>
          <Input
            style={{ width: '382px' }}
            value={studentCopy.email}
            onChange={(value) => handleEmailChange(value)}
          ></Input>
        </InputContainer>
        <InputContainer>
          <div>
            <FieldText>Phone</FieldText>
          </div>
          <Input
            style={{ width: '182px' }}
            value={studentCopy.phone}
            onChange={(value) => handlePhoneChange(value)}
          ></Input>
        </InputContainer>
      </Form>
    </StyledModal>
  );
}

export default EditStudent;
