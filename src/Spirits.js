import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Outlet } from "react-router-dom";
import { useCocktailContext } from './CocktailProvider';

export default function Spirits() {

    
    const [cocktails, setCocktails] = useState([]);
    const { state } = useCocktailContext();
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
    

    useEffect(() => {
          async function fetchCocktails() {
            try {
              const response = await fetch(url + state.spiritCategory, {
                method: 'POST'
              });
              const data = await response.json();
              setCocktails(data.drinks);
            } catch (error) {
              console.error(error);
               
            }
          }
          fetchCocktails();
        
    }, [state])
     


    return (
      <div>
        {cocktails ? (
          <section id="spirits" className="block spirits-block">
            <Container fluid>
              <Row className="spiritsList" style = {{maxWidth: '800px', margin: '0 auto'}}>
                {cocktails.map((cocktail) => {
                  return (
                    
                    <Col sm={4} key={cocktail.idDrink}>
                      <div className="spirits-wrapper" >
                          <Image src={cocktail.strDrinkThumb} width={200} height={200} className = 'rounded' />
                          <div className="label text-center" style = {{padding: '10px'}} >
                            <p>{cocktail.strDrink}</p>
                          </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          
          </section>
        ) : null}   
          <Outlet></Outlet>
      </div>
    );

  }