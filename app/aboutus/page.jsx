import Image from "next/image";

function AboutUs() {
  return (
    <>
      <section className="w-full flex flex-col gap-8 md:w-3/6 mx-auto">
        <div className="p-8 flex flex-col gap-4">
          <p className="text-primarycolor">Introducting</p>
          <h1 className="text-6xl font-bold">
            Sadorect, delivering services, teams, training and products{" "}
          </h1>

          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>

          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>
          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>
        </div>

        <div className="p-8 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">The Vision</h1>

          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>

          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            fugiat, vero sequi voluptas possimus in aperiam numquam
            necessitatibus quisquam nihil officiis! Maiores odit neque deleniti.
            Quod veniam iusto debitis! Quibusdam eius deleniti aperiam velit
            distinctio, nulla, dolorum accusamus eum, iusto ipsa molestiae
            nostrum tenetur blanditiis perferendis impedit temporibus iste
            culpa. Esse ipsam porro quo provident aut adipisci illo earum ipsa
            dolores eos saepe aliquam ex aliquid, excepturi assumenda ab
            cupiditate.
          </p>
        </div>

        <div className="p-8 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Mision Statement</h1>

          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>

          <div className="w-full h-[600px]">
            <Image
              src={"/img.png"}
              width={1000}
              height={1000}
              alt="alt"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
            commodi sed vel rem excepturi. Nam sunt enim quibusdam tempore
            molestiae ut aspernatur optio facere porro! Consequuntur fuga sint
            qui illo!
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            fugiat, vero sequi voluptas possimus in aperiam numquam
            necessitatibus quisquam nihil officiis! Maiores odit neque deleniti.
            Quod veniam iusto debitis! Quibusdam eius deleniti aperiam velit
            distinctio, nulla, dolorum accusamus eum, iusto ipsa molestiae
            nostrum tenetur blanditiis perferendis impedit temporibus iste
            culpa. Esse ipsam porro quo provident aut adipisci illo earum ipsa
            dolores eos saepe aliquam ex aliquid, excepturi assumenda ab
            cupiditate.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
