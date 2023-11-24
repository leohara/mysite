import Album from "../_components/Album";
import Music from "../_components/Music";

export default function Favorite() {
  return (
    <>
      <p className="py-[16px] text-[20px] font-semibold">Favorite</p>
      <div className="pl-[20px]">
        <Music title={"My Hall of Fame"}>
          <Album name="revolver.jpg">
            <p>Revolver</p>
            <p>The Beatles (1966)</p>
          </Album>
          <Album name="dog_caravan.jpg">
            <p>犬は吠えるがキャラバンは進む</p>
            <p>小沢健二 (1993)</p>
          </Album>
          <Album name="odessey_and_oracle.jpg">
            <p>Odessey & Oracle</p>
            <p>The Zombies (1968)</p>
          </Album>
          <Album name="white_album.png">
            <p>The Beatles (The White Album)</p>
            <p>The Beatles (1968)</p>
          </Album>
          <Album name="the_invisible_band.jpg">
            <p>The Invisible Band</p>
            <p>Travis (2001)</p>
          </Album>
          <Album name="brushfire_fairytale.jpg">
            <p>Brushfire Fairytales</p>
            <p>Jack Johnson (2001)</p>
          </Album>
        </Music>
        <Music title={"Albums I Listened to a Lot in 2023"}>
          <Album name="cafe_blue.jpg">
            <p>Café Bleu</p>
            <p>The Style Council (1984)</p>
          </Album>
          <Album name="golden_picnics.jpg">
            <p>ゴールデン・ピクニックス</p>
            <p>四人囃子 (1976)</p>
          </Album>
          <Album name="chet_baker_sings.jpg">
            <p>Chet Baker Sings</p>
            <p>Chet Baker (1956)</p>
          </Album>
          <Album name="cobalt_hour.jpg">
            <p>COBALT_HOUR</p>
            <p>荒井由美 (1975)</p>
          </Album>
          <Album name="memai.jpg">
            <p>ゆらゆら帝国のめまい</p>
            <p>ゆらゆら帝国 (2003)</p>
          </Album>
          <Album name="route20.jpg">
            <p>ROUTE 20 HIT ROAD</p>
            <p>EGO-WRAPPIN&apos; (2016)</p>
          </Album>
        </Music>
        <Music title={"Albums I Listened to a Lot in 2022"}>
          <Album name="3x3x3.jpg">
            <p>3×3×3</p>
            <p>ゆらゆら帝国 (1998)</p>
          </Album>
          <Album name="rubber_soul.jpg">
            <p>Rubber Soul</p>
            <p>The Beatles (1965)</p>
          </Album>
          <Album name="donny_hathaway.jpg">
            <p>R. Flack & D. Hathaway</p>
            <p>R. Flack & D. Hathaway (1972)</p>
          </Album>
          <Album name="siren.jpg">
            <p>Siren</p>
            <p>Roxy Music (1975)</p>
          </Album>
          <Album name="hunky_dory.jpg">
            <p>Hunky Dory</p>
            <p>David Bowie (1971)</p>
          </Album>
          <Album name="hukamidori.jpg">
            <p>深緑</p>
            <p>AJICO (2001)</p>
          </Album>
        </Music>
      </div>
    </>
  );
}
