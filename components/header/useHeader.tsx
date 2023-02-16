// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const useHeader = () => {
  const headerData = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "works", name: "Works" },
    { id: "team", name: "Team" },
    { id: "testimonials", name: "Testimonials" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contact" },
  ];

  return { headerData };
};

export default useHeader;
