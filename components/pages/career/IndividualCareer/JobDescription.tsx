'use client';

import { useEffect, useRef, useState } from 'react';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

import ApplyForm from './ApplyForm';

const JobDescription: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  const shareUrl = window.location.href;

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='flex flex-col gap-8 p-6 xl:flex-row xl:p-24'>
      <div className='flex flex-col gap-4 xl:w-3/5 2xl:w-2/3'>
        <div className='flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between'>
          <p className='text-[32px] font-black text-mainBlack'>Job Specification</p>
          <div className='relative' ref={dropdownRef}>
            <button
              onClick={handleToggleDropdown}
              className='flex flex-row items-center gap-2 rounded-lg border-2 border-primary px-4 py-3 text-mainBlack'
            >
              <IoShareSocialOutline className='text-xl' />
              <p>Share this job</p>
            </button>

            {isDropdownOpen && (
              <div className='absolute top-full z-10 mt-2 flex flex-row gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-lg'>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={40} round={true} />
                </LinkedinShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </div>
            )}
          </div>
        </div>
        <div contentEditable='false' dangerouslySetInnerHTML={{ __html: 'Hello' }}></div>
        <p className='text-justify'>
          Leapfrog is on a mission to be a role model technology company. Since 2010, we have relentlessly worked on
          crafting better digital products with our team of superior engineers. We re a full-stack company specializing
          in SaaS products and have served over 100 clients with our mastery of emerging technologies. We re thinkers
          and doers, creatives and coders, makers and builders- but most importantly, we are trusted partners with
          world-class engineers. Hundreds of companies in Boston, Seattle, Silicon Valley, and San Francisco choose us
          to gain speed, agility, quality, and stability, giving them an edge over their competitors.Job description
          Architect solutions for all possible deployment environments (production, QA, development etc.) and different
          programming languages. Ensure deployment, monitoring and maintenance of production environments. Maintain and
          scale cloud infrastructures such as AWS and Azure Identify and drive opportunities to improve automation for
          deployment, management, tooling. Plan, design, manage and monitor the network. Encourage, involve, motivate,
          lead team members for learning and achieving project and departmental goals. Identify training needs,
          organize, and coach team members on various aspects of their career growth. Actively involved in ensuring
          implementation of organizational culture, process and standards. Keep up with trends in the constantly
          evolving technology. Responding to support requests from users of the system to assist with troubleshooting
          issues. Learn & perform any devops related tasks if needed. Job requirements Minimum 5 years of professional
          experience Experience of leading a technical team. Experience with Cloud Computing platforms (e.g. Amazon AWS,
          Microsoft Azure, Google App Engine). Architect production and development level environment in SaaS ecosystems
          (AWS preferred). Good experience with Agile methodologies like Scrum/Kanban Excellent analytical and problem
          solving abilities Excellent written and verbal communication skills, comfortable with client communication
          Good leadership skills - ability to motivate and mentor team members, ability to plan and make sound
          decisions, ability to negotiate tactfully with the client and team Good documentation skills (API
          Documentation, Deployment Documents, Application Architecture Documents etc.) Solid hands-on expertise with
          Linux, including system installation/configuration, file system concepts, resource monitoring, user
          administration, package management, and process control/management (Preferred platforms Ubuntu, Centos and
          Amazon AMI) Plan, design, configure and secure web stacks and environments such as web, application and DB
          servers for Java, JavaScript (NodeJS), etc. Also update and upgrade these settings accordingly. Expert
          knowledge on medium/large size company networks. Advanced knowledge of scripting/programming in any
          administrative language (Bash, Python, Go, etc.) Work experience with AWS services (EC2, ELB, EBS, VPC, S3,
          SES, RDS, Route53) and other cloud based computing administration like digital ocean, Azure etc. Hands-on
          experience with virtualization technology. Experience with virtual development environments such as docker.
          Hands on experience on orchestration tools like Kubernetes. Hands on experience on infrastructure
          orchestration with Terraform. Hands-on experience with Grafana, Prometheus, Nagios, DataDog, New Relic or
          other systems monitoring software. Experience with CI and deployment tools such as GitHub Action, Travis CI,
          AWS CodePipeline etc. Experience with GIT, or other version control source code repositories Good knowledge
          and concept of web based security and testing tools and methodology (pentesting, OS hardening, web server
          hardening, container security) Global certification AWS Solution Architect Professional, AWS DevOps
          Professional, Certified Kubernetes Administrator, RHCE, CCNA, CCNSP will be an advantage Demonstrable
          knowledge of TCP/IP, HTTP, web application security, and experience supporting multi-tier web application
          architectures. Solid understanding of systems and application design, including the operational trade-offs of
          various designs. 🌞 Life at Leapfrog: Work with talented engineers and remarkable professionals in Nepal, the
          US and Europe, building state-of-the-art digital health products. Have an amazing career growth plan with
          support from experienced mentors and unlimited learning opportunities. Be a part of an experienced team—apply
          the best industry practices, get mentored by experienced professionals and be ready to mentor the new ones.
          Get exposure to clients who are leading entrepreneurs and startups from Silicon Valley. Your work will be at
          the cutting edge of healthcare innovation and make a difference in the lives of thousands of people worldwide.
          You will get the flexibility to work remotely or in the office— we value accountable freedom. Get growth
          opportunities, not just in your work. We organize various internal initiatives where you can be a part of a
          bigger learning community with webinars, Knowledge Sharing Sessions (KSS), and internal conferences. Be a part
          of a safe workplace where its okay to fail fast— get constructive feedback and grow as you move ahead. Get
          recognized for your work and all the changes you will make. We always look for, NO, create opportunities to
          celebrate efforts, play games, and have fun together! You will have a lot of fun at Leapfrog— therell never be
          a dull day.
        </p>
      </div>
      <div className='flex h-fit flex-col items-center gap-4 rounded-lg bg-lightShad2 p-4 xl:w-2/5 2xl:w-1/3'>
        <p className='text-[32px] font-black text-mainBlack'>Apply Now</p>
        <ApplyForm />
      </div>
    </div>
  );
};

export default JobDescription;
