import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./shop.css";

function Shop() {
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(!popup);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    console.log("i ran");
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    console.log(data);
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>SHOP ALL YOU WANT</h1>
      </header>
      <div>
        {items.length === 0 ? (
          <div>
            <h2>No items found</h2>
            <br></br>
            Check your internet connection<br></br>
            <button onClick={fetchItems}>Try again</button>
          </div>
        ) : (
          <div className="relative">
            {items.map((item) => (
              <h2 key={item.itemId}>
                <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
              </h2>
            ))}
            {popup ? (
              <div className="popup" >
                <button className="close-popup" onClick={handlePopup}>X</button>
                <div className="main">
                  Haha. Just trying things out you know. lorem23Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Sed culpa debitis
                  distinctio iusto vel a beatae et incidunt pariatur odio iure
                  modi voluptas molestias harum eligendi, exercitationem quia
                  quae accusantium! Numquam, ab a voluptatibus cupiditate odio
                  modi ipsam quasi repellendus assumenda nihil. Laborum aliquam
                  nostrum, dolorum inventore repellat neque impedit delectus
                  vero placeat. Nobis provident voluptatibus, enim quasi vitae
                  ut molestias facilis explicabo ab saepe, maxime quam, nesciunt
                  nulla veritatis in sit quae placeat accusamus dolores
                  perspiciatis aliquam id repellendus. Explicabo, quidem
                  doloremque. Aliquam, pariatur autem. Accusantium doloribus
                  culpa ab fuga ducimus? Pariatur laboriosam placeat quis
                  fugiat, non, beatae laudantium neque corrupti tempora qui
                  voluptatem numquam quibusdam corporis quos quo dicta nihil
                  tempore quod praesentium. Dolor delectus praesentium
                  veritatis, minima voluptatum impedit architecto optio atque ad
                  aut consectetur quo molestias perspiciatis consequuntur.
                  Dolorum, ipsa hic ex molestiae at, quae, praesentium
                  aspernatur accusantium earum cupiditate suscipit itaque magnam
                  non velit adipisci odio totam quibusdam tenetur. Minus nulla
                  doloribus fugit temporibus adipisci aperiam nam, quod,
                  voluptatibus aliquid, ipsam neque. Quasi minima recusandae
                  fugiat. Hic corporis, cumque quo qui iste magnam itaque
                  sapiente provident possimus optio nemo quos in voluptates
                  voluptate! Ipsum adipisci reprehenderit eos expedita, sapiente
                  debitis. Unde, laudantium veniam. Tenetur unde consequatur
                  nihil hic dolore fugit eaque harum corrupti quis eveniet
                  voluptatem eius reiciendis, blanditiis similique cum. Culpa
                  voluptatibus sequi pariatur veritatis possimus tempora tempore
                  consequatur cumque, debitis accusantium repellat quod
                  aspernatur ducimus nam vitae necessitatibus fuga laudantium
                  deleniti, placeat expedita, animi repellendus provident.
                  Consequatur iure explicabo porro, maiores facere ut nam
                  deleniti eum consectetur, maxime vitae voluptatem esse omnis
                  culpa harum reiciendis dolor odio. Cum id magnam odit laborum
                  quo illum vitae consequuntur culpa officiis. Cumque
                  reprehenderit earum fuga corporis! Natus ipsam consectetur
                  suscipit alias doloremque ab praesentium, provident eius
                  molestiae aut minima earum, tempore maxime sunt, saepe quae
                  ullam officiis repudiandae laboriosam? Suscipit animi beatae
                  quis optio mollitia dignissimos ipsam eligendi assumenda
                  debitis ab numquam in officiis similique facilis, sit
                  molestiae facere eius dicta a corporis eos voluptas aliquam
                  quia! Reprehenderit et fugiat accusantium tempore adipisci
                  perferendis ducimus incidunt vel ratione ullam cumque modi
                  iure fuga suscipit nihil natus, harum similique possimus
                  provident delectus placeat qui nisi. Ab, beatae impedit,
                  voluptas necessitatibus deleniti tempora rerum porro nihil
                  voluptatem accusamus totam laudantium? Laboriosam, quasi
                  asperiores commodi quis quae perspiciatis unde architecto
                  suscipit ipsum consequuntur iste, et nobis animi quod
                  aspernatur quidem porro eius accusantium incidunt ex quaerat
                  non soluta temporibus? Nobis illum aliquid quia exercitationem
                  debitis ea quos placeat voluptatibus reprehenderit error
                  officia, similique tenetur quod tempora, explicabo sed. Quod
                  ab, laboriosam commodi vel incidunt ad cum exercitationem
                  explicabo dignissimos placeat ut culpa, molestiae minus esse
                  sequi illum et laudantium maxime accusantium atque in numquam
                  doloribus? Dolorum reprehenderit tempore animi consequatur
                  exercitationem eius iusto at mollitia aut incidunt
                  perspiciatis excepturi sequi, minima eveniet amet obcaecati
                  eaque delectus necessitatibus aperiam odit? Amet, possimus,
                  aliquam, repellat voluptatibus est dignissimos exercitationem
                  unde illo non odio veniam quod recusandae eos. Tempore nemo,
                  qui facere exercitationem sequi molestias veniam? Enim eaque
                  fugit qui saepe rem!
                </div>
              </div>
            ) : null}
            <div onClick={handlePopup}>Preview.{console.log(popup)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shop;
