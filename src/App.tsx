import SideBar, { NavItem } from "./components/SideBar";
import { TableRow } from "./components/TableRow";
import "./styles/main.scss"



function App() {

  return (
    <div className="App">
        <header className="header">
        <div className="header__burger">
          <input id="burger__toggle" type="checkbox"/>
            <label className="burger__btn" htmlFor="burger__toggle">
               <span></span>
         </label>
           <ul className="burger__menue">
           <div className="profile">
        <img src="./imgs/Ellipse 8.webp" alt="profile_image" className="profile__image" width={42} height={42}/>
        <article className="profile__description">
           <span className="profile__name">Evano</span>
           <span className="profile__post">Project Manager</span>
        </article>
      </div>
            <NavItem title="Dashboard" imgUrl="./imgs/key-square.svg" first/>
            <NavItem title="Product" imgUrl="./imgs/3d-square 1.svg"/>
            <NavItem title="Customers" imgUrl="./imgs/user-square 1.svg" active/>
            <NavItem title="Income" imgUrl="./imgs/wallet-money 2.svg"/>
            <NavItem title="Promote" imgUrl="./imgs/discount-shape 1.svg"/>
            <NavItem title="Help" imgUrl="./imgs/message-question 1.svg"/>
          </ul>
         </div>
        <a href="#" className="logo">
         <img src="./imgs/setting 1.svg" alt="logo" className="logo__image" width={37} height={37}/>
          <span className="logo__label">Dashboard
          <span className="logo__version">v.01</span>
        </span>
       </a>
        </header>
      <main className="main">
        <SideBar/>
        <section className="infoblock"> 
          <h2 className="infoblock__title">Hello Evano 👋🏼,</h2>
           <section className="content">
            <div className="content__top">
              <article className="content__description">
                 <h3 className="content__title">All Customers</h3>
                 <span className="content__extrainfo">Active Members</span>
              </article>
              <input type="text" className="content__searchbar" placeholder="Search"/>
            </div>
            <div className="content__body">
              <table className="table">
               <thead className="table__header">
               <tr className="table__headerrow">
                  <th className="table__headeritem" style={{width: "20%"}}>Customer Name</th>
                  <th className="table__headeritem" style={{width: "15%"}}>Company</th>
                  <th className="table__headeritem" style={{width: "20%"}}>Phone Number</th>
                  <th className="table__headeritem" style={{width: "25%"}}>Email</th>
                  <th className="table__headeritem" style={{width: "20%"}}>Country</th>
                  <th className="table__headeritem" style={{width: "20%"}}>Status</th>
                </tr>
               </thead>
               <tbody className="table__body">
               <tr className="table__row">
                  <td className="table__item">Jane Cooper</td>
                  <td className="table__item">Microsoft</td>
                  <td className="table__item">(225) 555-0118</td>
                  <td className="table__item">jane@microsoft.com</td>
                  <td className="table__item">United States</td>
                  <td className="table__item"><span className="table__status table__status--active">Active</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Floyd Miles</td>
                  <td className="table__item">Yahoo</td>
                  <td className="table__item">(205) 555-0100</td>
                  <td className="table__item">floyd@yahoo.com</td>
                  <td className="table__item">Kiribati</td>
                  <td className="table__item"><span className="table__status table__status--inactive">Inactive</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Ronald Richards</td>
                  <td className="table__item">Adobe</td>
                  <td className="table__item">(302) 555-0107</td>
                  <td className="table__item">ronald@adobe.com</td>
                  <td className="table__item">Israel</td>
                  <td className="table__item"><span className="table__status table__status--inactive">Inactive</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Marvin McKinney</td>
                  <td className="table__item">Tesla</td>
                  <td className="table__item">(252) 555-0126</td>
                  <td className="table__item">marvin@tesla.com</td>
                  <td className="table__item">Iran</td>
                  <td className="table__item"><span className="table__status table__status--active">Active</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Jerome Bell</td>
                  <td className="table__item">Google</td>
                  <td className="table__item">(629) 555-0129</td>
                  <td className="table__item">jerome@google.com</td>
                  <td className="table__item">Réunion</td>
                  <td className="table__item"><span className="table__status table__status--active">Active</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Kathryn Murphy</td>
                  <td className="table__item">Microsoft</td>
                  <td className="table__item">(406) 555-0120</td>
                  <td className="table__item">kathryn@microsoft.com</td>
                  <td className="table__item">Curaçao</td>
                  <td className="table__item"><span className="table__status table__status--active">Active</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Jacob Jones</td>
                  <td className="table__item">Yahoo</td>
                  <td className="table__item">(208) 555-0112</td>
                  <td className="table__item">jacob@yahoo.com</td>
                  <td className="table__item">Brazil</td>
                  <td className="table__item"><span className="table__status table__status--active">Active</span></td>
                </tr>
                <tr className="table__row">
                  <td className="table__item">Kristin Watson</td>
                  <td className="table__item">Facebook</td>
                  <td className="table__item">(704) 555-0127</td>
                  <td className="table__item">kristin@facebook.com</td>
                  <td className="table__item">Åland Islands</td>
                  <td className="table__item"><span className="table__status table__status--inactive">Inactive</span></td>
                </tr>
               </tbody>
              </table>
            </div>
            <div className="content__mbbody">
              <table className="table">
               <thead className="table__header">
               <tr className="table__headerrow">
                  <th className="table__headeritem" style={{width: "50%"}}>Customer Name</th>
                  <th className="table__headeritem" style={{width: "40%"}}>Email</th>
                </tr>
               </thead>
               <tbody className="table__body">
              <TableRow data={{Name: "Jane Cooper", 
                Company: "Microsoft", 
                Phone: "(225) 555-0118",
                Email: "jane@microsoft.com",
                Country: "United States",
               Status: "Active"}}/>
              <TableRow data={{Name: "Floyd Miles", 
                Company: "Yahoo", 
                Phone: "(205) 555-0100",
                Email: "floyd@yahoo.com",
                Country: "Kiribati",
               Status: "Inactive"}}/>
              <TableRow data={{Name: "Ronald Richardss", 
                Company: "Adobe", 
                Phone: "(205) 555-0100",
                Email: "ronald@adobe.com",
                Country: "Israel",
               Status: "Inactive"}}/>
              <TableRow data={{Name: "Marvin McKinne", 
                Company: "Tesla", 
                Phone: "(252) 555-0126",
                Email: "marvin@tesla.com",
                Country: "Palestina",
               Status: "Active"}}/>
               <TableRow data={{Name: "Jerome Bell", 
                Company: "Google", 
                Phone: "(629) 555-0129",
                Email: "jerome@google.com",
                Country: "Réunion",
               Status: "Active"}}/>
               <TableRow data={{Name: "Kathryn Murphy", 
                Company: "Microsoft", 
                Phone: "(406) 555-0120",
                Email: "kathryn@microsoft.com",
                Country: "Curaçao",
               Status: "Active"}}/>
                 <TableRow data={{Name: "Jacob Jones", 
                Company: "Yahoo", 
                Phone: "(208) 555-0112",
                Email: "jacob@yahoo.com",
                Country: "Brazil",
               Status: "Active"}}/>
                   <TableRow data={{Name: "Kristin Watson", 
                Company: "Facebook", 
                Phone: "(704) 555-0127",
                Email: "kristin@facebook.com",
                Country: "Åland Islands",
               Status: "Inactive"}}/>
               </tbody>
              </table>
              </div>
            <div className="content__bottom">
              <span className="content__showingdata">
               Showing data 1 to 8 of  256K entries
              </span>
              <span className="content__pagination">
                <a className="content__btnpagination" href="#">{"<"}</a>
                <a className="content__btnpagination content__btnpagination--active" href="#">1</a>
                <a className="content__btnpagination" href="#">2</a>
                <a className="content__btnpagination" href="#">3</a>
                <a className="content__btnpagination" href="#">4</a>
                <a className="content__btnpagination" href="#">...</a>
                <a className="content__btnpagination" href="#">40</a>
                <a className="content__btnpagination" href="#">{">"}</a>
              </span>
            </div>
           </section>
        </section>
      </main>
    </div>
  );
}

export default App;
