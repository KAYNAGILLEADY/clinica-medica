import './Header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="company">
        <img 
          src="https://media.istockphoto.com/id/1222357475/pt/vetorial/image-preview-icon-picture-placeholder-for-website-or-ui-ux-design-vector-illustration.jpg?b=1&s=170x170&k=20&c=i852GanRwef9Q2xmrdfd0nj_-FLYbyRKE48hGEjfeyA=" 
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
