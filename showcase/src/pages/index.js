import React from "react";
import Nav from "./components/Nav";

function Index() {
  return (
    <div className="font-serif bg-white">
      <Nav />
      <div className="h-[85vh] flex flex-col justify-evenly items-center text-4xl text-black">
        <div className="flex justify-center items-center">
          We&apos;re
          <div className="italic ml-2 mr-2">farmers, purveyors,</div>
          and
          <div className="italic ml-2">eaters</div>
        </div>
        <button className=" px-8 py-2 rounded-lg text-2xl bg-green-800 text-white">
          Browse our shop
        </button>
      </div>
      <div className="h-[80vh] flex justify-evenly items-center">
        <img src="/greens.jpg" className="w-1/2 -pr-20" alt="Greens" />
        <div className="w-[40%] pr-20 -pl-20 flex flex-col text-black text-sm">
          <img src="/vege.webp" alt="Romanesco" />
          Romanesco - an eye-catching vegetable with an intricate, spiral-like
          shape and bright green color. What’s more, it offers several powerful
          plant compounds.
        </div>
      </div>
      <div className="h-[80vh] flex pt-10">
        <div className="w-[20vw] text-black flex justify-center font-bold">
          WHAT WE BELIEVE
        </div>
        <div className="w-[80vw] text-black pr-96">
          <p>We believe in produce. Tasty produce. Produce like: </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
            odio vitae diam dignissim tincidunt vel quis leo. Morbi sit amet
            pretium tortor, quis faucibus enim. Suspendisse potenti. Morbi sem
            metus, facilisis et blandit id, dictum sed est. Mauris in diam
            augue. Nulla aliquet, nunc sed ornare cursus, nunc arcu sollicitudin
            ligula, at fermentum odio dui eget eros. Nunc luctus purus sit amet
            magna accumsan placerat. Nunc suscipit gravida risus. Vivamus
            fringilla massa eu consequat scelerisque. Suspendisse aliquet elit
            sollicitudin libero facilisis placerat. Integer faucibus, elit
            ornare lacinia euismod, nibh neque bibendum massa, finibus mattis
            leo eros at lectus.
          </p>
          <br />
          <p>What are we forgetting?</p>
          <br />
          <p>
            Donec vel elementum tellus. Phasellus faucibus auctor ante. Quisque
            scelerisque enim mauris, sed consequat diam ornare non. Suspendisse
            in congue nibh. Sed varius aliquam metus, ut dapibus nisi auctor
            quis. Morbi congue ultrices tortor, ac commodo ipsum venenatis ut.
            Mauris mollis consequat quam, sit amet semper odio dapibus ac.
            Pellentesque euismod elit eu odio eleifend, eget feugiat justo
            rhoncus. Integer auctor ut arcu vel pulvinar. Vestibulum efficitur
            consequat nulla, sit amet suscipit lacus viverra ut. Aliquam aliquet
            dapibus leo porta accumsan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Index;
