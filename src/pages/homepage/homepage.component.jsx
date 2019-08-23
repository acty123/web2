import React from 'react';
import './homepage.styles.scss';
import s1 from '../../assets/SeccionMagento-03-1024x396.png';
import ss1 from '../../assets/SeccionMagento-02-300x83.png';
import s3 from '../../assets/SeccionMagento-14-1024x378.png';
import ss3 from '../../assets/SeccionMagento-15-300x98.png';

import Section from '../../components/section/section.component';
import ColletionPreview from '../../components/collection-preview/collection-preview.component';
import eccomerce from './eccomerce.data';

const HomePage = () => (
    <div className='home'>
        <Section
            color='white' 
            size='mid'           
            title='Expertos en ecommerce y partners oficiales de Magento'
            hr={true}
            background={s1}
            image={ss1}
        >
            Ayudamos a empresas <b>B2B</b> y <b>B2C</b> grandes y medianas
            a crecer sus ventas con la plataforma de ecommerce mas flexible
            del mundo.
            
        </Section>
        <Section
            color='gray'
            size='sml'
            title='Ecommerce Aventi.co'
            hr={true}
            eccomerce={eccomerce}
        >
        
        </Section>
        {
            eccomerce.map(({id, ...otherCollectionProps}) => (
                <ColletionPreview key={id} {...otherCollectionProps}/>
            ))
        }
        <Section
            color='white'
            size='sml2'
            title='Caso de éxito Saluti.com.co'
            hr={true}
            background={s3}
            image={ss3}
        >
        <b>Saluti</b> es considerada la mayor tienda online de equipos e insumos 
        médicos en Colombia. Cerro 2017 con un crecimiento en ventas del 74% y acabó de
         lanzar una nueva versión de su tienda online en <b>Magento 2</b>
        </Section>
    </div>
);

export default HomePage;