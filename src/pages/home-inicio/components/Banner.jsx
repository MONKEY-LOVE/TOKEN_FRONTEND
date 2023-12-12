import {Container, Row, Col} from 'react-bootstrap';
import { BsArrowRightCircle } from 'react-icons/bs';
import profesor from '../../../assets/img/profesor.png';

export const Banner = () => {
    return(
        <section className="banner" id='none'>
            <Container>
                <Row className="align-items-center">
                    <col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome</span>
                        <h1>{`test test comillas invertidas`}<span className='wrap'>web test</span></h1> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corrupti doloribus veritatis nisi labore. Cum nam aliquid accusamus, aspernatur voluptatum, ex similique dolor autem repellendus, deserunt quisquam fuga rerum?</p>
                        <button onClick={() => console.log('hola')}>Let test <BsArrowRightCircle size={25}/> </button>
                    </col>    
                        <Col xs={12} md={6} xl={5}> 
                            <img src={profesor} alt='Headder Img' />

                        </Col>
                </Row>
            </Container>
        </section>
    )
}