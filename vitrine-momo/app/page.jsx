import "./globals.css";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen min-w-full  bg-gray-200">
      <div className="h-4 bg-[#f79b20]"></div>
      <div className=" mt-5 ">
        {" "}
        <div className="   w-full   font-mono text-sm ">
          <div className=" flex flex-col md:flex-row md:justify-around">
            <h1 className=" flex flex-row text-left text-[#484848] mt-5 ml-10 mb-4 text-4xl  md:text-5xl  lg:text-7xl lg:ml-20 lg:mb-10">
              Hammam <p className="text-[#f79b20] ml-2"> Oriental</p>
            </h1>
            <div
              className=" text-l   ml-10 md:ml-20 md:text-xl
              text-[#484848] lg:text-3xl lg:items-center   mb-4 md:mt-5"
            >
              <p className="mb-2 ">
                {" "}
                Véritable moment de détente et de plaisir grâce à la chaleur
                humide qu'il dégage. Permet d'éliminer efficacement les
                fatigues, tension musculaires et d'évacuer le stress. Venez
                profiter d'un moment détente totale. Avec un verre de thé à la
                menthe et une confiserie orientale offerts.{" "}
              </p>{" "}
              <p className="text-2xl">&#9990; : 06 03 74 39 23</p>{" "}
            </div>
          </div>
          <div className="bg-[#484848]">
            <h2 className=" text-3xl  w-full ml-2 md:text-center text-neon lg:text-5xl lg:ml-20 ">
              <strong className="text-normal">Rénovation & création</strong>
            </h2>
          </div>

          <p className="h-1 w-full bg-neon mb-10 "></p>
          <div className="flex flex-col md:flex-row   text-[#484848] text-2xl m-5 lg:ml-20 lg:text-3xl    ">
            <Image
              className="h-auto md:w-64  lg:ml-20"
              src="/RenovationComplete.jpg"
              alt="photo de renovation"
              width={400}
              height={400}
            />{" "}
            <p className="m-5 w-5/6 text-left text-xl  w-9/10 ml-5  text-[#484848] lg:text-2xl lg:ml-20 ">
              {" "}
              {`Que vous souhaitiez rénover une pièce existante, créer un nouvel espace ou redonner vie à vos murs, notre équipe d'experts est là pour vous accompagner. Nous transformons vos idées en réalité.`}
            </p>
          </div>
          <p className="flex  h-1 w-[90%] bg-neon mb-10 mt-5 mr-5 ml-5 shadow-neon "></p>
          <div className="flex flex-col md:flex-row   text-[#484848] text-2xl m-5 lg:ml-20 lg:text-3xl    ">
            <Image
              className="h-auto md:w-64  lg:ml-20"
              src="/plancherChauffant.jpg"
              alt="plancher chauffant"
              width={400}
              height={400}
            />{" "}
            <p className="m-5 w-5/6 text-left text-xl  w-9/10 ml-5  text-[#484848] lg:text-2xl lg:ml-20 ">
              {" "}
              {`mise en place de plancher chauffant`}
            </p>
          </div>
          <p className="flex  h-1 w-[90%] bg-neon mb-10 mt-5 mr-5 ml-5 shadow-neon "></p>
          <div className="flex flex-col     text-[#484848] text-xl m-5 lg:ml-20 lg:text-2xl    ">
            <div className="flex flex-col md:flex-row justify-between  align-top text-[#484848] text-xl m-5 lg:ml-20 lg:text-2xl    ">
              {" "}
              <p className="ml-5  mr-5 w-5/6  align-text-top ">
                Rafraichissement des murs
              </p>
              <p className="ml-5 md:ml-20">
                Laissez nos artistes du mur donner un nouveau souffle à votre
                intérieur. Peinture, papier peint, textures , nous faisons des
                murs une toile pour votre créativité.
              </p>
            </div>
            <p className="flex  h-1 w-[90%] bg-neon mb-10 mt-5 mr-5 ml-5 shadow-neon "></p>
            <div className="flex flex-col md:flex-row  justify-between  text-[#484848] text-xl m-5 lg:ml-20 lg:text-2xl    ">
              {" "}
              <p className="ml-5  mr-5  w-5/6   ">Bricolage</p>
              <p className="ml-5 md:ml-20">
                {" "}
                {`Nous sommes là pour les projets de bricolage que vous avez en
                tête. Des petites réparations aux projets plus complexes, nous
                sommes prêts à relever le défi.`}
              </p>
            </div>
            <p className="flex  h-1 w-[90%] bg-neon mb-10 mt-5 mr-5 ml-5 shadow-neon "></p>
            <div className="flex flex-col md:flex-row   text-[#484848] text-xl m-5 lg:ml-20 lg:text-2xl    ">
              {" "}
              <p className="ml-5  mr-5   w-5/6  ">Reparations diverses</p>
              <p className="ml-5 md:ml-[100px]">
                {" "}
                {`Les problèmes dans la maison ne sont pas un problème pour nous. Que ce soit la plomberie, l'électricité, la menuiserie ou autre, nous sommes là pour réparer et améliorer.`}
              </p>
            </div>
            <p className="flex  h-1 w-[90%] bg-neon mb-10 mt-5 mr-5 ml-5 shadow-neon "></p>
            <div className="flex flex-col md:flex-row   text-[#484848] text-xl m-5 lg:ml-20 lg:text-2xl    ">
              {" "}
              <p className="ml-5  mr-5   w-5/6  ">Montage des meubles</p>
              <p className="ml-5 md:ml-[100px]">
                {" "}
                {`Vous avez acheté des meubles en kit ? Laissez-nous les assembler
                de manière professionnelle, pour que vous puissiez profiter de
                votre nouvel ameublement sans tracas.`}
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center pt-4 pb-4 bg-[#484848] text-neon text-center text-3xl flex items-center md:text-5xl text-center">
            <p className="h-16">
              {" "}
              DEVIS GRATUIT :{" "}
              <Link
                className="hover:border-b-2  hover:border-neon"
                href="/contact"
              >
                Contactez nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
