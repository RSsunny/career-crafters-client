const SectionOne = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 max-w-7xl mx-auto my-20 px-2 md:px-5 lg:px-0 ">
      <div className="flex-1">
        <h1 className="text-4xl font-playfair font-bold mb-5">
          What can I do with{" "}
          <span className="text-green-500"> Career Crafters</span>?
        </h1>

        <p>
          Streamline your hiring process with strategic channels to reach
          qualified candidates
        </p>
        <img
          className="mt-10 h-96 w-full"
          src="https://i.ibb.co/K5R07Fw/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg"
          alt=""
        />
      </div>
      <div className="flex-1">
        <div>
          <h1 className="text-2xl font-bold font-playfair mb-5">
            Access To Millions Of Candidates
          </h1>
          <p className="mb-3">
            Reach 80M+ Unique, Diverse U.S. Job Seekers Annually, When You Post
            Your Jobs Through The Large Number Of Targeted Talent Acquisition
            CareerBuilder Channels.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-playfair my-5">
            Automate Candidate Engagement
          </h1>
          <p className="mb-3">
            Use CareerBuilders AI Data To Get Exclusive Insights Into Your Ideal
            Candidate That Can Help You Get The Attention Of The Top Candidates.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-playfair my-5">
            Boost Performance with an Outsourced Talent Acquisition Team
          </h1>
          <p className="mb-3">
            Use Our Proven Process To Quickly Drive The Qualified, Targeted
            Profiles Into Your Sourcing Pipeline And Receive Qualified
            Applicants In Real-Time.
          </p>
        </div>
        <div>
          <h1 className="text-2xl font-bold font-playfair my-5">
            Pipeline Management on Your Terms
          </h1>
          <p className="mb-3">
            Take Full Control Of How You Manage Job Postings, Candidate Pools
            And Outreach Campaigns. Choose To Use The CareerBuilder Platform Or
            Your Own And Utilize The Analytics And Labor Market Data To Build
            Out Your Candidate Pipelines And Pools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
