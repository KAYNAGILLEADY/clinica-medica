import './Header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="company">
        <img 
          src="https://media.licdn.com/dms/image/C4E0BAQEK4coXlsqw5A/company-logo_200_200/0/1642679289278?e=2147483647&v=beta&t=FV1x7tjaOHD6S3wkdwAuJSUYPBZ9CZUy2MYKLmHWiVM" 
          alt="logo da Farmacia"
          />
        <h1>Pharma Inc</h1>
      </div>
      <div className="user-img">
        <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="usuário" />
      </div>
    </header>
  )
}

export default Header