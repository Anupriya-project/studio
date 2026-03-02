export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    aria-hidden="true"
    {...props}
  >
    <path
      fill="currentColor"
      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm52-88a4 4 0 0 1-4 4h-44v44a4 4 0 0 1-8 0v-44H80a4 4 0 0 1 0-8h44V80a4 4 0 0 1 8 0v44h44a4 4 0 0 1 4 4Z"
    />
  </svg>
);

export const PyMentorLogo = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M6 2L6 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 2H18C23.5228 2 28 6.47715 28 12V12C28 17.5228 23.5228 22 18 22H6" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
