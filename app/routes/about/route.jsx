import React, { useState } from "react";

export default function About() {
  const [visibleSection, setVisibleSection] = useState("education");

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  return (
    <div className="max-w-full flex flex-col items-center mt-12 mx-10 md:mx-44 xl:mx-72 min-h-[100vh]">
      <p className="text-xl md:text-2xl mt-4 text-center min-w-full">
        Ingvild Netland Nystein
      </p>
      <div className="md:flex md:justify-between md:items-center md:gap-4 md:min-w-full ">
        <div className="flex justify-center gap-4 items-center">
          <div className="flex flex-col gap-4">
            <img src="/public/Vector 15.png" alt="" />
            <img src="/public/Vector 15.png" alt="" />
            <img src="/public/Vector 15.png" alt="" />
          </div>
          <img
            className="mt-4 md:w-full md:h-auto"
            src="/public/skiprofil.png"
            alt="Ingvild"
          />
          <div className="flex flex-col gap-4">
            <img src="/public/Vector 15.png" alt="" />
            <img src="/public/Vector 15.png" alt="" />
            <img src="/public/Vector 15.png" alt="" />
          </div>
        </div>
        <div className="mt-8 md:max-w-[50%]">
          <p className="md:text-xl">
            Jeg er en engasjert person som har drevet med kreative hobbyer og
            prosjekter så lenge jeg kan huske. Samlet har jeg 4 år med utdanning
            innenfor brukersentert design. Med både et årsstudium i UX-Design
            fra Noroff og en bachelor fra NTNU i interaksjonsdesign
          </p>
        </div>
      </div>

      <div className="flex flex-row mb-2 gap-10 mt-4 w-full">
        <div className="flex justify-start w-[50%]">
          <h2
            className={`font-normal mb-4 text-tertiary cursor-pointer justify-self-start ${
              visibleSection === "education" ? "text-black underline" : ""
            }`}
            onClick={() => toggleSection("education")}
          >
            Utdanning
          </h2>
        </div>
        <div className="flex justify-center w-[50%]">
          <h2
            className={`font-normal text-tertiary flex justify-start cursor-pointer justify-self-end ${
              visibleSection === "hobbies" ? "text-black underline" : ""
            }`}
            onClick={() => toggleSection("hobbies")}
          >
            Fritid
          </h2>
        </div>
      </div>

      {visibleSection === "education" && (
        <section className="mb-4">
          <div className="lg:flex lg:flex-row lg:gap-10">
            <div>
              <p className="text-lg">
                <strong>NTNU</strong> Bachelor Interaksjonsdesign
              </p>
              <p className="font-bold">2021-2024</p>
              <p className="mt-4">
                En dypere gjennomgang av UX-Design rollen og arbeidsoppgaver.
                Lærer mye om hvordan jobbe tverrfaglig.
              </p>
              <p className="text-lg mt-4">
                <strong>Noroff </strong> UX-Design
              </p>
              <p className="font-bold">2020-2021</p>
              <p className="mt-4">
                Her lærte jeg Miro, Adobe XD og Figma. Vi jobbet med flere
                versjoner at Design Thinking prosessen. Lærte verdien og
                utførelsen av accessibility.
              </p>
              <p className="text-lg mt-4 font-bold">Valdres Folkehøgskule</p>
              <p className="font-bold">2019-2020</p>
              <p className="mt-4">
                På folkehøyskolen gikk jeg på idrett og ski linjen.
              </p>
              <p className="text-lg mt-4 font-bold">
                Hetland videregående skole
              </p>
              <p className="font-bold">2016-2019</p>
              <p className="mt-4">
                Jeg gikk medier og kommunikasjon. Vi brukte flere
                Adobeprogrammer. Samt en tidlig innføring i kreative prosesser.
              </p>
            </div>

            <div className="flex flex-col mt-8 justify-start w-full md:mt-0">
              <h2 className="font-normal text-tertiary">Jobber og erfaring</h2>
              <p className="text-lg mt-4 font-bold">
                UX-Designer praktikant - NRK
              </p>
              <p className="font-bold">Høst 2023</p>
              <p className="mt-4">
                Her jobbet jeg på NRK Radio appen med brukertesting, prototyping
                og løsningsforslag for fremsiden og flere askpekter som NRK
                Radio utforsket.
              </p>
              <p className="text-lg mt-4 font-bold">UX-Designer - Bouvet</p>
              <p className="font-bold">sommer 2023</p>
              <p className="mt-4">
                Jeg gikk medier og kommunikasjon. Vi brukte flere
                Adobeprogrammer. Samt en tidlig innføring i kreative prosesser.
              </p>
              <p className="text-lg mt-4 font-bold">
                Bedrifts komité leder - Darling linjeforening
              </p>
              <p className="font-bold">2022-2023</p>
              <p className="mt-4">
                Opprettet og styrte bedrifts komitéen. Lærte om organisering,
                lederrollen og kontaktet bedrifter.
              </p>
              <p className="text-lg mt-4 font-bold">
                Institutt Tillitsvalgt - NTNU{" "}
              </p>
              <p className="font-bold">2022</p>
              <p className="mt-4">
                Jobbet for NTNU som representant for studentene på Institutt for
                design.
              </p>
              <p className="text-lg mt-4 font-bold">Schibsted mentorprogram</p>
              <p className="font-bold">2021-2022</p>
              <p className="mt-4">Hadde månedlige møter med UX mentor.</p>
            </div>
          </div>
          <div className="flex justify-between w-full gap-3 mt-4 md:mt-10">
            <div className="flex flex-col w-full justify-start text-[12px] md:text-[14px]">
              <h3 className="font-normal">Indusrty skills</h3>
              <ul className="flex flex-col gap-1">
                <li>Innsiktsamling</li>
                <li>Wireframing</li>
                <li>Informasjonsarkitektur</li>
                <li>Prototyping</li>
                <li>Brukertesting</li>
                <li>Universell Utforming</li>
              </ul>
            </div>
            <div className="flex flex-col w-full justify-start text-[12px] md:text-[14px]">
              <h3 className="font-normal">Personlige ferdigheter</h3>
              <ul className="flex flex-col gap-1">
                <li>Arbeidsstruktur</li>
                <li>Glad i gruppearbeid</li>
                <li>Organisering av arrangementer</li>
                <li>Organisering av flere folk</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {visibleSection === "hobbies" && (
        <section className="mb-4">
          <p className="my-4">
            På fritiden driver jeg med en rekke friluftsaktiviteter som
            randonée, slalom, klatring, buldring og tur.
          </p>
          <div className="flex flex-wrap gap-2 ">
            <img src="/skiiing.png" alt="" />
            <img src="/alpene.png" alt="" />
            <img src="/klatring.png" alt="" />
            <img src="/Fjellet.png" alt="" />
          </div>

          <p className="my-4">
            En annen viktig del av fritiden min er vennene mine som jeg bruker
            mye tid med.
          </p>
          <div className="flex flex-wrap gap-2 md:justify-evenly md:gap-10">
            <img className="md:w-24 md:h-32" src="Tusenfryd.png" alt="" />
            <img src="Frisbee.png" alt="" />
            <img src="Siste.png" alt="" />
          </div>
          <p className="my-4">
            Når jeg kjenner på inspirasjon bruker jeg også tid på slappe av med
            å tegne eller male med forskjellige materialer.
          </p>
          <div className="flex flex-wrap gap-2 md:justify-evenly md:flex-row md:gap-10 md md:bg-greenText">
            <div className="w-full flex justify-between">
              <img src="tegning.png" alt="" />
              <img src="midtart.png" alt="" />
            </div>
            <div className="flex w-full justify-between">
              <img className="cover" src="hallo.png" alt="" />
              <img
                className=" max-w-16 max-h-auto contain"
                src="/hode.png"
                alt=""
              />
              <img className=" max-w-16 max-h-auto" src="halv.png" alt="" />
            </div>
            <div className="grid grid-cols-2 gap-0">
              <img src="/redart.png" alt="" />
              <img src="/lastart.png" alt="" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
