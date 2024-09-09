import HeroSection from '@/components/HeroSection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import AboutSection from '@/components/AboutSection'; 
import { GetStaticProps } from 'next';
import Sponsors from '@/components/Sponsors';
import Service from '@/components/Service';
import Testimonials from '@/components/Testimonials';
import Blogs from '@/components/Blogs';
import OurLocation from '@/components/OurLocation';
import Contact from '@/components/Contact';


interface Service {
  url: string;
  icon: string;
}


interface HomepageData {
  homepage: {
    arrowImage:string;
    heroSection: {
      title: string;
      heading: string;
      contentURL: string;
      arrowURL: string;
      content: string;
      heroBannerImage:string;

    };
    sponsors: Service[];
    aboutus: {
      label: string;
      title: string;
      description: string;
      statistics: { experience: string; description: string }[];
      contentTitle: string;
      contentDescription: string;
    };
    service:{
      label: string;
      title: string;
      description: string;
      statistics: {  id:string;icon: string;titlecard:string;description:string; arrowImage: string; arrowURL:string }[];
    };
    testimonials: {
      label: string;
      title: string;
      description: string;
      statistics: {  id:string;icon: string;description:string; name: string; role:string }[];
      leftcarouselbutton: string;
      rightcarouselbutton:string;
    };
    blogs: {
      label: string;
      title: string;
      description: string;
      heading: string;
      content: string;
      arrowImage: string;
      arrowURL: string;
    },
    ourlocation:{
      label: string;
      title: string;
      description: string;
    },
    contactsection: {
      label: string;
      title: string;
      description: string;
      name: string;
      country: string;
      comments: string;
      phone: string;
      email: string;
      buttonlabel: string;
    };
  };
}


const Index= ({ data }: { data: HomepageData }) => {
  if (!data || !data.homepage) {
    return <div>Homepage data is currently unavailable.</div>;
  }

  const { heroSection, sponsors, aboutus, service, testimonials, blogs, ourlocation, contactsection} = data.homepage;

  return (
    <Main
      meta={
        <Meta
          title="Credentech"
          description="At Credentech Technologies, we provide multi-dimensional IT services that caters to high-end internet strategy, software development and design solutions for..."
        />
      }
    >
      <div className=''>
        <div className='bg-[#F7F7F7] dark:bg-[#1A1A1A] p-[32px]'>
          <HeroSection 
            title={heroSection.title}
            heading ={heroSection.heading}
            content={heroSection.content}
            contentURL={heroSection.contentURL}
            arrowURL={heroSection.arrowURL}
            heroBannerImage={heroSection.heroBannerImage}
          />
        </div>
        <div>
          <Sponsors sponsors={sponsors} />
        </div>
        <div className='bg-[#F7F7F7] dark:bg-[#1A1A1A]'>
          <AboutSection
              label={aboutus.label}
              title={aboutus.title}
              description={aboutus.description}
              statistics={aboutus.statistics}
              contentTitle={aboutus.contentTitle}
              contentDescription={aboutus.contentDescription}
            />
        </div>
        <div className='bg-white dark:bg-[#333333]'>
          <Service 
             label={service.label}
             title={service.title}
             description={service.description}
             statistics={service.statistics}
          />
        </div>
        <div className='bg-[#F7F7F7] dark:bg-[#1A1A1A]'>
          <Testimonials 
            label={testimonials.label}
            title={testimonials.title}
            description={testimonials.description}
            statistics={testimonials.statistics}
            leftcarouselbutton={testimonials.leftcarouselbutton}
            rightcarouselbutton={testimonials.rightcarouselbutton}
          />

        </div>
        <div className='bg-white dark:bg-[#333333]'>
          <Blogs 
            label={blogs.label}
            title={blogs.title}
            description={blogs.description}
            heading={blogs.heading}
            content={blogs.content}
            arrowImage={blogs.arrowImage}
            arrowURL={blogs.arrowURL}
          />
        </div>
        <div className='bg-[#F7F7F7] dark:bg-[#1A1A1A]'>
          <OurLocation 
            label={ourlocation.label}
            title={ourlocation.title}
            description={ourlocation.description}
          />
        </div>
        <div className='bg-white dark:bg-[#333333]'>
          <Contact 
            label={contactsection.label}
            title={contactsection.title}
            description={contactsection.description}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;





const defaultHomepageData: HomepageData = {
  homepage: {
    arrowImage: '',
    heroSection: {
      title: 'Default Title',
      heading: 'Default Heading',
      contentURL: '',
      arrowURL: '',
      content: 'Fallback content is currently unavailable.',
      heroBannerImage: ''
    },
    sponsors: [],
    aboutus: {
      label: 'Fallback About Us',
      title: 'Fallback Title',
      description: 'Fallback description.',
      statistics: [{ experience: 'N/A', description: 'N/A' }],
      contentTitle: 'Fallback Content Title',
      contentDescription: 'Fallback Content Description'
    },
    service: {
      label: 'Fallback Services',
      title: 'Fallback Title',
      description: 'Fallback description.',
      statistics: [{  id:'',icon: '', titlecard: 'N/A', description: 'N/A', arrowImage: '', arrowURL: '' }]
    },
    testimonials:{
      label: 'Fallback Services',
      title: 'Fallback Title',
      description: 'Fallback description.',
      statistics: [{  id:'',icon: '', description: 'N/A', name: 'N/A', role: 'N/A' }],
      leftcarouselbutton: 'Fallback leftcarouselbutton',
      rightcarouselbutton:'Fallback rightcarouselbutton',
    },
    blogs:{
      label: 'Fallback blogsServices',
      title: 'Fallback blogsTitle',
      description: 'Fallback blogsdescription.',
      heading: 'Fallback heading',
      content:'Fallback content',
      arrowImage: '',
      arrowURL:'',
    },
    ourlocation:{
      label: 'Fallback Location',
      title: 'Fallback ourlocationTitle',
      description: "Fallback ourlocationdescription",
    },
    contactsection: {
      label: 'Fallback Connect',
      title: 'Fallback title',
      description: "Fallback description",
      name:'Fallback Name',
      country:'Fallback Country',
      comments:'Fallback Comments',
      phone: 'Fallback Phone',
      email: 'fallback@example.com',
      buttonlabel:'Submit'
    }
  }
};


export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Homepage`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data: ${res.statusText}`);
    }

    const data: HomepageData = await res.json();

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching homepage data:", error);

    return {
      props: {
        data: defaultHomepageData,
      },
    };
  }
};