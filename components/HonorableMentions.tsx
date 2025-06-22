import { FocusCards } from "@/components/ui/FocusCards";

export function HonorableMentions() {
  const cards = [
    {
      title: "NESSUS",
      src: "/Nessus1.png",
    },
    {
      title: "Kubernetes",
      src: "/Kubernetes1.png",
    },
    {
      title: "Active Directory",
      src: "/ActiveDirectory.png",
    },
    {
      title: "OpenVas",
      src: "/Openvas1.png",
    },
    {
      title: "Nmap",
      src: "/Nmap1.png",
    },
    {
      title: "Etherscan",
      src: "/Etherscan1.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
