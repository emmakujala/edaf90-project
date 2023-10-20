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
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${state.spiritCategory}`;
    

    useEffect(() => {
          async function fetchCocktails() {
            try {
              const response = await fetch(url);
              const data = await response.json();
              setCocktails(data.drinks);
            } catch (error) {
              console.error(error);
               
            }
          }
          fetchCocktails();
        
    })
     


    return (
      <div>
        {cocktails ? (
          <section id="spirits" className="block spirits-block">
            <Container fluid>
              <Row className="spiritsList">
                {cocktails.map((cocktail) => {
                  return (
                    
                    <Col sm={4} key={cocktail.idDrink}>
                      <div className="spirits-wrapper" >
                          <Image src={cocktail.strDrinkThumb} width={200} height={200} />
                          <div className="label text-center" >
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