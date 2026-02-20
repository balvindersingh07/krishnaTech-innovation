import { Search, Lightbulb, Rocket, Settings } from "lucide-react";
import { ProcessStep } from "../components/ProcessStep";

export default function Process() {
  return (
    <section
      id="process"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-100/50 via-cyan-100/50 to-blue-100/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4 font-bold">
            Our Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep icon={Search} title="Discovery" description="Understand requirements & vision" stepNumber={1} />
          <ProcessStep icon={Lightbulb} title="Planning" description="Strategy and architectural design" stepNumber={2} />
          <ProcessStep icon={Rocket} title="Development" description="Build, test and deliver quality solutions" stepNumber={3} />
          <ProcessStep icon={Settings} title="Support" description="Ongoing maintenance & optimization" stepNumber={4} />
        </div>
      </div>
    </section>
  );
}
