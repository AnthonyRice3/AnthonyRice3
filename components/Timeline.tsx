import React from "react";
import { TimelineItems } from "@/components/ui/TimelineItems";
import Image from "next/image";

export function Timeline() {
  const data = [
    // {
    //   title: "2024",
    //   content: (
    //     <div>
    //       <p className="mb-4 text-xs font-normal text-green-200 md:text-sm dark:text-neutral-200">
    //         Deployed 5 new components on Aceternity today
    //       </p>
    //       <div className="mb-8">
    //         <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
    //           ✅ Card grid component
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
    //           ✅ Startup template Aceternity
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
    //           ✅ Random file upload lol
    //         </div>
    //         <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
    //           ✅ Himesh Reshammiya Music CD
    //         </div>
    //       </div>
    //       <div className="grid grid-cols-2 gap-4">
    //         <Image
    //           src="/labs/ftp.png"
    //           alt="startup template"
    //           width={1200}
    //           height={300}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <Image
    //           src="/labs/smbclient.png"
    //           alt="startup template"
    //           width={1200}
    //           height={300}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <Image
    //           src="/labs/msfdb.png"
    //           alt="startup template"
    //           width={1200}
    //           height={300}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //         <Image
    //           src="/labs/ms17.png"
    //           alt="startup template"
    //           width={1200}
    //           height={300}
    //           className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
    //         />
    //       </div>
    //     </div>
    //   ),
    // },
    {
      title: "MetaSploit Escalation",
      content: (
        <div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Exploit a vulnerability to get limited access on target system.
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Use local exploits to gain administrator or SYSTEM-level access.
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Create a new privileged account for persistent administrative access control.
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Establish persistence or move laterally to access other network hosts
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/labs/msfconsole.png"
              alt="hero template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/exnmap.png"
              alt="feature template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/exinfo.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/exsuccess.png"
              alt="cards template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "System Monitoring",
      content: (
        <div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Identify target system components: CPU, memory, processes, services
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Use tools like Task Manager, htop, or Sysmon
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Monitor logs (Event Viewer, journald, syslog) for anomalies
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Investigate suspicious behavior using filters or alert thresholds
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/labs/winup.png"
              alt="hero template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/winsys.png"
              alt="feature template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/winsec.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/winmon.png"
              alt="cards template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Partition Encryption",
      content: (
        <div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Launch VeraCrypt and select “Create Volume”
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Choose partition/device mode and select target drive
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Configure encryption algorithm and strong password
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅  Format and mount encrypted volume for secure usage
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/labs/veracrypt.png"
              alt="hero template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/veraes.png"
              alt="feature template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/verasuccess.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/verapart.png"
              alt="cards template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Vulnerability Analysis",
      content: (
        <div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Install and configure OpenVAS scanner and feed updates
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Define scan target and create scan task
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Run the scan and monitor progress through web GUI
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Review report for vulnerabilities, CVSS scores, and remediation steps
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/labs/ovstart.png"
              alt="hero template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/ovip.png"
              alt="feature template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/ovana.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Armitage Escalation",
      content: (
        <div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Launch Armitage and connect to Metasploit RPC server
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Perform host discovery and identify vulnerable services
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Exploit vulnerability to gain initial access (meterpreter shell)
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Use privilege escalation modules or manual techniques for SYSTEM/root access
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/labs/armitage.png"
              alt="hero template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/armitagesamp.png"
              alt="feature template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/armitagespread.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/armitagesuccess.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "SQL Injection",
      content: (
        <div>
          
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Access WebGoat and select the SQL Injection module
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ dentify injectable fields by submitting test inputs (&lsquo; OR &lsquo;1&lsquo;=&lsquo;1)
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Use crafted queries to bypass authentication or extract data
            </div>
            <div className="flex items-center gap-2 text-xs text-white md:text-sm dark:text-neutral-300">
              ✅ Analyze results and learn mitigation using parameterized queries
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/labs/wgstart.png"
              alt="hero template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/wgscript.png"
              alt="feature template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/wgcomp.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/labs/wgsuccess.png"
              alt="bento template"
              width={1200}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />     
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <TimelineItems data={data} />
    </div>
  );
}
