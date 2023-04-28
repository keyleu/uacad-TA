import styled from 'styled-components';
import { BsGraphUp } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import DashboardRows from './dashboardrows';

const Navbar1 = styled.div`
  padding-left: 40px;
  padding-top: 30px;
  display: flex;
  gap: 87px;
`;

const DashboardIcon = styled.div`
  padding-top: 15px;
  display: flex;
  gap: 10px;
`;
const Text = styled.text`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
`;
const Button = styled.button`
  display: flex;
  background: #0abb87;
  border: 1px solid #0abb87;
  border-radius: 8px;
  color: white;
  padding: 15px;
  gap: 5.7px;
`;

const TableContainer = styled.div`
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 50px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: left;
`;

const TableHeader = styled.th`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
`;

const TableRow = styled.tr`
  height: 40px;
  border-bottom: 2px solid #262D34;
`;

function Dashboard() {
  const globalPrefix = 'api';
  const port = process.env['PORT'] || 3333;
  const [jsonData, setJsonData] = useState(
    [] as {
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
    }[]
  );

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStudents = async () => {
    const response = await fetch(`http://localhost:${port}/${globalPrefix}`);
    const json = await response.json(); //extract JSON from the http response
    // do something with myJson
    setJsonData(json[0]);
  };

  return (
    <>
      <Navbar1>
        <DashboardIcon>
          <BsGraphUp size={'21px'} />
          <Text style={{ fontSize: '15px' }}>Dashboard</Text>
        </DashboardIcon>
        <Button>
          <AiOutlinePlusCircle size={'19px'} />
          <Text style={{ fontSize: '13px', paddingTop: '2.5px' }}>
            Nuevo estudiante
          </Text>
        </Button>
      </Navbar1>
      <TableContainer>
        <Table>
          <TableRow>
            <TableHeader style={{ width: '10%' }}>Conexión</TableHeader>
            <TableHeader style={{ width: '20%' }}>
              Nombre y apellidos
            </TableHeader>
            <TableHeader style={{ width: '20%' }}>
              Nombre de usuario
            </TableHeader>
            <TableHeader style={{ width: '30%' }}>Email</TableHeader>
            <TableHeader style={{ width: '20%' }}>Móvil</TableHeader>
          </TableRow>
          {Object.keys(jsonData).length !== 0 && (
            <DashboardRows students={jsonData} />
          )}
        </Table>
      </TableContainer>
    </>
  );
}

export default Dashboard;
