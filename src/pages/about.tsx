import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className='conatiner p-8'>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
        voluptatibus distinctio recusandae autem esse explicabo molestias officia
        placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus labore
        voluptatibus distinctio recusandae autem esse explicabo molestias officia
        placeat, accusamus aut saepe.
      </p>
    </div>
  </Main>
);

export default About;
