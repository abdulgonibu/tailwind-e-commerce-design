module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens:{
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container:{
      center:true,
      padding:'1rem'
    },
    extend: {
      fontFamily: {
        Pacifico: "'Pacifico', cursive",
        Roboto: "'Roboto', sans-serif",
        Poppins: "'Poppins', sans-serif",
      },
      colors:{
           'primary' : '#FD3D57'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
