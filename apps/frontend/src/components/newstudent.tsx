import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { v4 as uuidv4 } from 'uuid';

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

const DisabledSaveButton = styled.button`
  background-color: #cccccc;
  color: #666666;
  width: 91px;
  height: 32px;
  border-radius: 8px;
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

function NewStudent(props: {
  isNewStudentOpen: boolean;
  toggleEditNewStudentModal: () => void;
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
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1; // Months start at 0!
  const dd = today.getDate();
  let days;
  let months;
  if (dd < 10) days = '0' + dd;
  if (mm < 10) months = '0' + mm;

  const formattedToday = days + '/' + months + '/' + yyyy;
  const emptyStudent = {
    _id: uuidv4(),
    isOnline: false,
    name: '',
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    inscriptionDate: formattedToday,
    courses: [{}],
  };

  const [newStudent, setNewStudent] = useState(emptyStudent);

  function handleNameChange(value: ChangeEvent<HTMLInputElement>): void {
    const copyNewStudent = JSON.parse(JSON.stringify(newStudent));
    copyNewStudent.name = value.currentTarget.value;
    setNewStudent(copyNewStudent);
  }

  function handleLastNameChange(value: ChangeEvent<HTMLInputElement>): void {
    const copyNewStudent = JSON.parse(JSON.stringify(newStudent));
    copyNewStudent.lastName = value.currentTarget.value;
    setNewStudent(copyNewStudent);
  }

  function handleUsernameChange(value: ChangeEvent<HTMLInputElement>): void {
    const copyNewStudent = JSON.parse(JSON.stringify(newStudent));
    copyNewStudent.username = value.currentTarget.value;
    setNewStudent(copyNewStudent);
  }

  function handleEmailChange(value: ChangeEvent<HTMLInputElement>): void {
    const copyNewStudent = JSON.parse(JSON.stringify(newStudent));
    copyNewStudent.email = value.currentTarget.value;
    setNewStudent(copyNewStudent);
  }

  function handlePhoneChange(value: ChangeEvent<HTMLInputElement>): void {
    const copyNewStudent = JSON.parse(JSON.stringify(newStudent));
    copyNewStudent.phone = value.currentTarget.value;
    setNewStudent(copyNewStudent);
  }

  function closeNewStudent() {
    setNewStudent(emptyStudent);
    props.toggleEditNewStudentModal();
  }

  const PostRequest = () => {
    // sending PATCH request with fetch API in javascript
    fetch(`http://localhost:3333/api`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',

      // Fields that to be updated are passed
      body: JSON.stringify(newStudent),
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
    PostRequest();
    props.toggleEditNewStudentModal();
  }

  const isDisabled =
    newStudent.name === '' ||
    newStudent.lastName === '' ||
    newStudent.username === '' ||
    newStudent.email === '' ||
    newStudent.phone === ''
      ? true
      : false;

  return (
    <StyledModal isOpen={props.isNewStudentOpen}>
      <ButtonContainer>
        <CloseButton onClick={closeNewStudent}>Cancelar</CloseButton>
        {isDisabled && (
          <DisabledSaveButton disabled={true} onClick={handleSave}>Guardar</DisabledSaveButton>
        )}
        {!isDisabled && <SaveButton onClick={handleSave}>Guardar</SaveButton>}
      </ButtonContainer>
      <Form>
        <InputContainer style={{ display: 'flex' }}>
          <div>
            <FieldText>Nombre</FieldText>
            <Input
              style={{ width: '182px' }}
              value={newStudent.name}
              onChange={(value) => handleNameChange(value)}
            ></Input>
          </div>
          <div>
            <FieldText>Apellidos</FieldText>
            <Input
              style={{ width: '182px' }}
              value={newStudent.lastName}
              onChange={(value) => handleLastNameChange(value)}
            ></Input>
          </div>
        </InputContainer>
        <InputContainer>
          <FieldText>Nombre de usuario</FieldText>
          <Input
            style={{ width: '382px' }}
            value={newStudent.username}
            onChange={(value) => handleUsernameChange(value)}
          ></Input>
        </InputContainer>
        <InputContainer>
          <FieldText>Email</FieldText>
          <Input
            style={{ width: '382px' }}
            value={newStudent.email}
            onChange={(value) => handleEmailChange(value)}
          ></Input>
        </InputContainer>
        <InputContainer>
          <div>
            <FieldText>Phone</FieldText>
          </div>
          <Input
            style={{ width: '182px' }}
            value={newStudent.phone}
            onChange={(value) => handlePhoneChange(value)}
          ></Input>
        </InputContainer>
      </Form>
    </StyledModal>
  );
}

export default NewStudent;
