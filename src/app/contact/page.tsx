import React from 'react';
import Container from '../components/Container';
import H1 from '../components/H1';

const page = () => {
    return (
        <main>
            <Container>
                <H1 text='Nous contacter' customClass='text-center' />
                <form>
                    <div className='form-group'>
                        <label htmlFor='lastname'>Nom</label>
                        <input type="text" name='lastname' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='firstname'>Prénom</label>
                        <input type="text" name='firstname' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Courriel</label>
                        <input type="email" name='email' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>Téléphone</label>
                        <input type="text" name='phone' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='object'>Objet</label>
                        <input type="text" name='object' />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Votre message</label>
                        <textarea name='message' />
                    </div>
                    <button type='submit' className='btn btn--primary'>Envoyer <span></span></button>
                </form>
            </Container>
        </main>
    );
};
export default page;