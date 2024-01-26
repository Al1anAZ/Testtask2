import "../../styles/sideBar.scss"

type LisItemProps = {
  title: string;
  imgUrl: string;
  active?: boolean;
  first? : boolean;
}

export const NavItem : React.FC<LisItemProps>  = ({title,imgUrl,active,first}) =>{
  return (
    <li className={`navbar__item ${active && 'navbar__item--active'}`}>
          <article className="navbar__description">
          <img src={imgUrl} alt="navimg" className="navbar__img" width={24} height={24}/>
            <a href="#" className={`navbar__link ${active && 'navbar__link--active'}`}>
            {title}
            </a>
          </article>
         {!first &&  <img src={`${active ? "./imgs/arrow_white.svg" : "./imgs/arrow.svg" }`} alt="arrow" />}
     </li>
  )
}

export default function SideBar() {
  return (
    <aside className="aside">
      <a href="#" className="logo">
         <img src="./imgs/setting 1.svg" alt="logo" className="logo__image" width={37} height={37}/>
         <span className="logo__label">Dashboard
         <span className="logo__version">v.01</span>
         </span>
      </a>
      <nav className="navbar">
        <ul className="navbar__menue">
          <NavItem title="Dashboard" imgUrl="./imgs/key-square.svg" first/>
          <NavItem title="Product" imgUrl="./imgs/3d-square 1.svg"/>
          <NavItem title="Customers" imgUrl="./imgs/user-square 1.svg" active/>
          <NavItem title="Income" imgUrl="./imgs/wallet-money 2.svg"/>
          <NavItem title="Promote" imgUrl="./imgs/discount-shape 1.svg"/>
          <NavItem title="Help" imgUrl="./imgs/message-question 1.svg"/>
        </ul>
      </nav>
      <div className="profile">
        <img src="./imgs/Ellipse 8.webp" alt="profile_image" className="profile__image" width={42} height={42}/>
        <article className="profile__description">
           <span className="profile__name">Evano</span>
           <span className="profile__post">Project Manager</span>
        </article>
      </div>
    </aside>
  )
}
