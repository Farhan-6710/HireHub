import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionComponent() {
  return (
    <div className="container mx-auto xl:px-52 md:px-20 px-4 pb-[100px]">
      <div className="backdrop-blur-sm dark:bg-slate-800/30 bg-gray-100/30 border border-white/10 rounded-lg shadow-xl px-8 py-4">
        <Accordion type="single" collapsible>
          {/* FAQ for Job Seekers */}
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg md:text-2xl xl:text-3xl">
              How do I create an account on Hirehub?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg">
              To create an account on Hirehub, simply click on the &quot;Log
              In&quot; button at the top right of the homepage. You&apos;ll need
              to provide basic information like your name, email address, and
              create a password.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg md:text-2xl xl:text-3xl">
              How can I apply for a job on Hirehub?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg">
              Once you find a job you&apos;re interested in, click on the job
              listing and you&apos;ll see an&quot;Apply Now&quot; button. You
              can upload your resume and cover letter, then submit your
              application directly through the platform.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg md:text-2xl xl:text-3xl">
              What should I include in my resume on Hirehub?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg">
              Make sure your resume includes a summary of your work experience,
              education, skills, certifications, and contact details. It&apos;s
              also a good idea to tailor your resume for the specific job
              you&apos;re applying for.
            </AccordionContent>
          </AccordionItem>

          {/* FAQ for Recruiters */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg md:text-2xl xl:text-3xl">
              How do I post a job on Hirehub?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg">
              To post a job, log into your recruiter account, navigate to the
              &quot;Post a Job&quot; section, and fill in the job details such
              as title, description, requirements, and location. Once
              you&apos;re done, click &quot;Submit&quot; to publish the listing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg md:text-2xl xl:text-3xl">
              How can I manage my job listings?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg">
              You can manage your job listings by going to the&quot;Manage
              Listings&quot; section of your recruiter dashboard. Here, you can
              edit, delete, or repost any active listings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg md:text-2xl xl:text-3xl">
              How do I shortlist candidates on Hirehub?
            </AccordionTrigger>
            <AccordionContent className="md:text-lg">
              You can shortlist candidates by reviewing their resumes and
              profiles. Simply click on the&quot;Shortlist&quot; button next to
              the candidate&apos;s name to add them to your shortlist for
              further review.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default AccordionComponent;
