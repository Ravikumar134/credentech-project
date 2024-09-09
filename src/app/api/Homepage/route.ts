// src/app/api/Homepage/route.ts
import { NextRequest, NextResponse } from 'next/server';

const basePath = ''; 

export async function GET(req: NextRequest) {
  if (req.nextUrl.searchParams.get('error') === 'true') {
    return NextResponse.json({ error: 'This is a simulated server error' }, { status: 500 });
  }

  const homepageData = {
    homepage: {
      heroSection: {
        title: 'Presenting Next-Gen',
        heading: 'Digital Experience',
        content: 'Discover Our Solutions',
        contentURL: 'https://google.com',
        arrowURL: `${basePath}/assets/images/arrow-right.png`,
        heroBannerImage: `${basePath}/assets/images/HeroImage.png`
      },
      sponsors: [
        {
          id: '1', 
          url: 'https://google.com',
          icon: `${basePath}/assets/images/Home/Lighttheme/sitecore-logo-black.svg`
        },
        {
          id: '2', 
          url: 'https://google.com',
          icon: `${basePath}/assets/images/Home/Lighttheme/optimizely-logo-black.svg`
        },
        {
          id: '3', 
          url: 'https://google.com',
          icon: `${basePath}/assets/images/Home/Lighttheme/drupal-logo-black.svg`
        }
      ],
      aboutus: {
        label: 'ABOUT US',
        title: 'Your digital partner',
        description: 'Updating business tech for the new era',
        statistics: [
          {
            id: '1', 
            experience: '14+',
            description: 'Year of Experience'
          },
          {
            id: '2', 
            experience: '90+',
            description: 'Projects Done'
          },
          {
            id: '3', 
            experience: '50+',
            description: 'Trustable Clients'
          },
          {
            id: '4', 
            experience: '50+',
            description: 'Resources'
          }
        ],
        contentTitle: 'Transforming your visions into digital reality',
        contentDescription: 'Credentech is dedicated to aligning technology with business processes to enhance your digital experience. We drive digital maturity through personalized solutions, improved user engagement, and an omnichannel approach, boosting your revenue and competitive edge'
      },
      service: {
        label: 'OUR SERVICES',
        title: 'Services for your unique needs',
        description: 'Updating business tech for the new era',
        statistics: [
          {
            id: '1', 
            icon: `${basePath}/assets/images/ServiceIconOne.svg`,
            titlecard: 'Web and Mobile Development',
            description: 'Building responsive, user-friendly apps',
            arrowImage: `${basePath}/assets/images/arrow-right.png`,
            arrowURL: 'https://google.com',
          },
          {
            id: '2', 
            icon: `${basePath}/assets/images/ServiceIconTwo.svg`,
            titlecard: 'Software and Product Development',
            description: 'Creating innovative software solutions',
            arrowImage: `${basePath}/assets/images/arrow-right.png`,
            arrowURL: 'https://google.com',
          },
          {
            id: '3', 
            icon: `${basePath}/assets/images/ServiceIconThree.svg`,
            titlecard: 'Marketing and Branding',
            description: 'Enhancing brand visibility and reach',
            arrowImage: `${basePath}/assets/images/arrow-right.png`,
            arrowURL: 'https://google.com',
          },
          {
            id: '4', 
            icon: `${basePath}/assets/images/ServiceIconFour.svg`,
            titlecard: 'Support and Services',
            description: 'Providing reliable customer support',
            arrowImage: `${basePath}/assets/images/arrow-right.png`,
            arrowURL: 'https://google.com',
          }
        ],
      },
      testimonials: {
        label: 'TESTIMONIALS',
        title: 'What our clients say',
        description: "See how we’ve transformed businesses positively",
        statistics: [
          {
            id: '1', 
            icon: `${basePath}/assets/images/blackquote.svg`,
            description: "Credentech prioritizes customers with pragmatic solutions and complete transparency. Our Project Manager was always available, and leadership was consistently present. They delivered 99% of projects on time with no issues. Thank you, Credentech. You're Sitecore experts.",
            name: 'Din',
            role: 'Largest Life Insurance, Singapore',
          },
          {
            id: '2', 
            icon: `${basePath}/assets/images/blackquote.svg`,
            description: "Credentech Solutions understood our business and developed software to meet our KPIs, exceeding industry standards. We're proud of our work with them and would choose them again.",
            name: 'Chas G',
            role: 'Founder and CEO of Vitality',
          },
          {
            id: '3', 
            icon: `${basePath}/assets/images/blackquote.svg`,
            description: "Credentech prioritizes customers with pragmatic solutions and complete transparency. Our Project Manager was always available, and leadership was consistently present. They delivered 99% of projects on time with no issues. Thank you, Credentech. You're Sitecore experts.",
            name: 'Deane Chong',
            role: 'Gioco, Singapore',
          },
          {
            id: '4', 
            icon: `${basePath}/assets/images/blackquote.svg`,
            description: "Our Project Manager was always available, and leadership was consistently present. They delivered 99% of projects on time with no issues. Thank you, Credentech. You're Sitecore experts.",
            name: 'Din',
            role: 'Largest Life Insurance, Singapore',
          },
          {
            id: '5', 
            icon: `${basePath}/assets/images/blackquote.svg`,
            description: "We're proud of our work with them and would choose them again.",
            name: 'Chas G',
            role: 'Founder and CEO of Vitality',
          },
          {
            id: '6', 
            icon: `${basePath}/assets/images/blackquote.svg`,
            description: "They delivered 99% of projects on time with no issues. Thank you, Credentech. You're Sitecore experts.",
            name: 'Deane Chong',
            role: 'Gioco, Singapore',
          },
        ],
        leftcarouselbutton: `${basePath}/assets/images/LeftCarousel.svg`,
        rightcarouselbutton: `${basePath}/assets/images/RightCarousel.svg`,
      },
      blogs:{
        label: 'BLOGS',
        title: 'Your digital knowledge hub',
        description: "Latest trends and tips for your success",
        heading: 'Fallback heading',
        content:'Fallback content',
        arrowImage: '',
        arrowURL:'',
      },
      ourlocation:{
        label: 'OUR Location',
        title: 'Lets catchup for a cup of coffee',
        description: "Find us here and get in touch today",
      },
      contactsection: {
        label: "Let’s Connect",
        title: 'Get in touch',
        description: "Connect with us to begin your transformation",
        placeHolderName:'Name*',
        placeHolderEmail: 'Email*',
        placeHolderCountry:'Country*',
        placeHolderPhone: 'Phone Number*',
        placeHolderComments:'How Can We Help?',
        buttonlabel:'Submit'
      }
    }
  };

  // Return homepage data
  return NextResponse.json(homepageData);
}
