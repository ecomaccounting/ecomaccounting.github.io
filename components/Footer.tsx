import PoweredBy from "@/components/PoweredBy"
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 mt-6 
                    flex flex-col items-center justify-center space-y-2">      
      <PoweredBy/>
      <p>© {new Date().getFullYear()} My Static Site. All rights reserved.</p>
    </footer>
  );
}