import Modal from 'styled-react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../styles/global.css';
import { useState } from 'react';
import styled from 'styled-components';
import { SlUser } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { CiMobile3 } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';

const StyledModal = Modal.styled`
  width: 480px;
  height: 611px;
  background-color: white;
  box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  padding-left: 25px;
  padding-right: 25px;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-top: 26px;
  padding-right: 34px;
`;
const Button = styled.button`
  background: #262d34;
  width: 151px;
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

const CloseButton = styled.button`
  background: white;
  width: 77px;
  height: 32px;
  color: #262d34;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 8px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
const StudentImageContainer = styled.div`
  padding-left: 145px;
  padding-bottom: 30px;
`;
const StudentImage = styled.img`
  border-radius: 50%;
  width: 131px;
  height: 131px;
`;

const NameSection = styled.div`
  display: flex;
  gap: 24px;
  padding-left: 72px;
`;

const Separator = styled.hr`
  width: 340px;
  margin-left: 50px;
  margin-bottom: 10px;
  border: 1px solid #cdcdcd;
`;
const DescriptionSection = styled.div`
  width: 100%;
  padding-bottom: 8px;
`;
const HeaderText = styled.text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 11px;
`;

const DescriptionText = styled.text`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
function EditStudent(props: {
  idOpen: string;
  toggleModal: () => void;
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
}) {
  const isOpen = props.idOpen === '' ? false : true;
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={props.toggleModal}
      onEscapeKeydown={props.toggleModal}
    >
      <MainContainer>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Perfil</Tab>
            <Tab>Cursos</Tab>
          </TabList>
          <TabPanel>
            <StudentImageContainer>
              <StudentImage src={props.student.avatar} alt="new" />
            </StudentImageContainer>
            <NameSection>
              <SlUser size={'19px'} />
              <HeaderText>Nombre y apellidos</HeaderText>
            </NameSection>
            <DescriptionSection
              style={{ marginLeft: '114px', borderBottom: '1px solid #CDCDCD' }}
            >
              <DescriptionText>
                {props.student.name} {props.student.lastName}
              </DescriptionText>
            </DescriptionSection>
            <DescriptionSection
              style={{ marginLeft: '114px', paddingTop: '8px' }}
            >
              <HeaderText>Nombre de usuario</HeaderText>
            </DescriptionSection>
            <DescriptionSection style={{ marginLeft: '114px' }}>
              <DescriptionText>{props.student.username}</DescriptionText>
            </DescriptionSection>
            <Separator />
            <NameSection>
              <CiMail size={'19px'} />
              <HeaderText>Email</HeaderText>
            </NameSection>
            <DescriptionSection style={{ marginLeft: '114px' }}>
              <DescriptionText>{props.student.email}</DescriptionText>
            </DescriptionSection>
            <Separator />
            <NameSection>
              <CiMobile3 size={'19px'} />
              <HeaderText>Móvil</HeaderText>
            </NameSection>
            <DescriptionSection style={{ marginLeft: '114px' }}>
              <DescriptionText>{props.student.phone}</DescriptionText>
            </DescriptionSection>
            <Separator />
            <NameSection>
              <CiCalendar size={'19px'} />
              <HeaderText>Fecha de inscripción</HeaderText>
            </NameSection>
            <DescriptionSection style={{ marginLeft: '114px' }}>
              <DescriptionText>{props.student.inscriptionDate}</DescriptionText>
            </DescriptionSection>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
        <Button>Editar estudiante</Button>
      </MainContainer>
      <FooterContainer>
        <CloseButton onClick={props.toggleModal}>Cerrar</CloseButton>
      </FooterContainer>
    </StyledModal>
  );
}

export default EditStudent;
