const Footer = () => {
  
  const onpageOpen = (page)=>{
         if(page=='github'){
            window.open('https://github.com/albyabhi' , '_blank', 'noopener,noreferrer')
         }
         else if(page=='twitter'){
            window.open('https://www.google.com' , '_blank', 'noopener,noreferrer')
         } else {
          window.open('https://www.instagram.com/alby.abhi/' , '_blank', 'noopener,noreferrer')

         }
  }
  

    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3 cursor-pointer">
          <div className="social-icon" onClick={()=> onpageOpen('github')}>
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon" onClick={()=> onpageOpen('twitter')} >
            <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
          </div>
          <div className="social-icon" onClick={()=> onpageOpen('instagram')} >
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </div>
        </div>
  
        <p className="text-white-500">© 2025 Alby AB. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;