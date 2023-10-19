import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';
import { useCocktailContext } from './CocktailProvider';
import SpiritButtons from './SpiritButtons';

export default function Spirits() {

    
    const [cocktails, setCocktails] = useState(null);
    const { state } = useCocktailContext();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${state.spiritCategory}`;
    console.log(state.spiritCategory);

    useEffect(() => {
      if (!state.spiritCategory) {
        return;
      
      }
          async function fetchCocktails() {
            try {
              const response = await fetch(url);
              const data = await response.json();
              console.log(data);
              setCocktails(data.drinks);
              console.log(data.drinks);
            } catch (error) {
              console.error(error);
               
            }
          }
          //fetchCocktails();
        
    },  [])


    return (
      <div>
        <SpiritButtons />
        {cocktails ? (
          <section id="spirits" className="block spirits-block">
            <Container fluid>
              <Row className="spiritsList">
                {cocktails.map((cocktail) => {
                  return (
                    <Col sm={4} key={cocktail.idDrink}>
                      <div className="spirits-wrapper">
                        <a href="#">
                          <Image src={cocktail.strDrinkThumb} width={200} height={200} />
                          <div className="label text-center">
                            <p>{cocktail.strDrink}</p>
                          </div>
                        </a>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>
        ) : null}
      </div>
    );

  }