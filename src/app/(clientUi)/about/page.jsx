import About from '@/components/clientUiComponent/About';
import Experience from '@/components/clientUiComponent/Experience';
import React from 'react';
export const metadata = {
  title: "About",
  description: "This is a Abdul Portfolio about  section",
};
const Page = () => {
    return (
        <div>
            <About/>
            <Experience/>
        </div>
    );
}

export default Page;
