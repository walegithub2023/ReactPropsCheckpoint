//import React, boostrap.min.css
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import Container, Row, col and PlayersList
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PlayersList from './PlayersList';








function App() {
  return (
    <div className="App">

      {/*container1 section*/}
      <Container className='' id='container1' fluid>
      <Row>
        <Col md={2} className='' id='Row1Col1'>
          <div id='div1'><img src='images/logo.jpg' id='logo1' alt="arsenalLogo"/></div>
          <div id="div2" className='bg-danger text-light'>Coach: Mikel Arteta</div>
          <div id="div3">Substitutes</div>
          <div id="div4">Aaron Ramsdale</div>
          <div id="div4">Takehiro Tomiyasu</div>
          <div id="div5">Jorginho</div>
          <div id="div6">Leandro Trossard</div>
          <div id="div7">Jorginho</div>
          <div id="div8">Injuries/Suspensions</div>
          <div id="div9">Mohamed Elneny</div>
          <div id="div10">Fabio Vieira</div>
          <div id="div11">Jurrien Timber</div>
          <div id="div12">Thomas Partey</div>
  
        </Col>

        <Col md={10} className='' id='Row1Col2'>

          {/*The header section */}
          <Row id='Row1Col2Row1' className='bg-danger'>
            <Col md={12}>
              ARSENAL FC
            </Col>
          </Row>


           {/*The field section */}
          <Row id='Row1Col2Row2'>
          <div><PlayersList /></div>
          </Row>

        

          
        </Col>
      </Row>
    </Container>

    <Container fluid id='containerFooter' className='bg-danger text-light'>
      copyright @ gomycode 2023
    </Container>


  
       
  
    </div>
  );
}

export default App;
