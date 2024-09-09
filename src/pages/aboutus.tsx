import React from 'react';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const AboutUsPage = () => {
    return (
        <Main
            meta={
                <Meta
                    title="Credentech"
                    description="At Credentech Technologies, we provide multi-dimensional IT services that caters to high-end internet strategy, software development and design solutions for..."
                />
            }
        >
            <div  className='screen-size'>
                This is AboutUs page Under development
            </div>

        </Main>
    )
}

export default AboutUsPage
