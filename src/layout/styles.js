export default {
  root: { 
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  headerToolbar : {minHeight : "54px !important"},
  HeaderLogo :{
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'serif',
    fontWeight: 700,
    letterSpacing: '.13rem',
    color: 'inherit',
    textDecoration: 'none',
    fontSize: '1.5rem',
  },
  HeaderMenuBox :{
    flexGrow: 1, display: 'flex', alignItems: 'center', textAlign: 'center' , marginLeft : "5%"
  },
  HeaderMenuButton :{
    color: 'white', textTransform: 'inherit', fontFamily: "sans-serif", fontSize: '1rem', marginRight:"1rem"
  },
  HeaderSubMenu :{ 
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    }
  }
};