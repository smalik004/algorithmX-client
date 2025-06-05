import React from "react";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const CloudStrategy = () => {
  return (
    <div className="bg-black text-white py-20 px-8">
      <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
        <h2 className={`text-[30px] mb-[60px] ${monsterfont1.className}`}>
          OUR PROCESS: BUILT FOR CLOUD-FIRST RESILIENCE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img
              src="/images/icons-clouds-new-1.png"
              alt="Backlink Analysis"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">
                Strategic Consultation
              </h2>
              <p className="text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]">
                We assess current-state architecture, business priorities, and
                compliance requirements to design a cloud operating model that
                fits.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img
              src="/images/Re-assessment.svg"
              alt="Manual Review"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">
                Implementation
              </h2>
              <p className="text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]">
                We deploy secure, scalable infrastructure across public,
                private, or hybrid environments using Terraform, Ansible, and
                Kubernetes.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img
              src="/images/Re-assessment.svg"
              alt="Removal Requests"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">
                Optimization & Security Hardening
              </h2>
              <p className="text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]">
                Post-deployment, we fine-tune performance, enforce policy, and
                implement continuous monitoring with tools like Datadog,
                Sentinel, and GuardDuty.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img
              src="/images/Re-assessment.svg"
              alt="Link Disavow"
              className="w-12 h-12 mr-4"
            />
            <div>
              <h2 className="text-[18px] leading-[1.75rem] mb-[0.25rem] font-[Helvetica] font-[500] ">
                Ongoing Support and Governance
              </h2>
              <p className="text-[12px] leading-[1rem] mb-[0.25rem] font-[Helvetica] font-[500]">
                We offer SLA-backed managed services with cost governance,
                incident response, patch management, and maturity assessments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudStrategy;
