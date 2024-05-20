export default function About() {
  return (
    <div className=" max-w-full flex flex-col items-center mt-12 mx-10 md:mx-44 xl:mx-96 min-h-[100vh]">
      <p className="text-xl mt-4 text-center min-w-full">
        Ingvild Netland Nystein
      </p>
      <div className="flex justify-center gap-4 items-center">
        <div className="flex flex-col gap-4">
          <img src="/public/Vector 15.png" alt="" />
          <img src="/public/Vector 15.png" alt="" />
          <img src="/public/Vector 15.png" alt="" />
        </div>
        <img className="mt-4" src="/public/skiprofil.png" alt="Ingvild" />
        <div className="flex flex-col gap-4">
          <img src="/public/Vector 15.png" alt="" />
          <img src="/public/Vector 15.png" alt="" />
          <img src="/public/Vector 15.png" alt="" />
        </div>
      </div>
      <div className="mt-8">
        <p>
          Jeg er en engasjert person som har drevet med kreative hobbyer og
          prosjekter så lenge jeg kan huske. Samlet har jeg 4 år med utdanning
          innenfor brukersentert design. Med både et årsstudium i UX-Design fra
          Noroff og en bachelor fra NTNU i interaksjonsdesign
        </p>
      </div>

      <div className="flex justify-between w-full">
        <h2 className="font-normal mb-4 text-tertiary">Utdanning</h2>
        <h2 className="font-normal text-tertiary">Fritid</h2>
      </div>
      <div>
        <p className="text-lg">
          <strong>NTNU</strong> Bachelor Interaksjonsdesign
        </p>
        <p className="font-bold">2021-2024</p>
        <p className="mt-4">
          En dypere gjennomgang av UX-Design rollen og arbeidsoppgaver. Lærer
          mye om hvordan jobbe tverrfaglig.
        </p>
        <p className="text-lg mt-4">
          <strong>Noroff </strong> UX-Design
        </p>
        <p className="font-bold">2020-2021</p>
        <p className="mt-4">
          Her lærte jeg Miro, Adobe XD og Figma. Vi jobbet med flere versjoner
          at Design Thinking prosessen. Lærte verdien og utførelsen av
          accessibility.
        </p>
        <p className="text-lg mt-4 font-bold">Valdres Folkehøgskule</p>
        <p className="font-bold">2019-2020</p>
        <p className="mt-4">
          På folkehøyskolen gikk jeg på idrett og ski linjen.
        </p>
        <p className="text-lg mt-4 font-bold">Hetland videregående skole</p>
        <p className="font-bold">2016-2019</p>
        <p className="mt-4">
          Jeg gikk medier og kommunikasjon. Vi brukte flere Adobeprogrammer.
          Samt en tidlig innføring i kreative prosesser.
        </p>
      </div>
    </div>
  );
}
