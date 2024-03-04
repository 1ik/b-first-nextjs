import { useState } from "react";
import { Breadcrumb } from "../../components";
import { useNavigate } from "react-router-dom";
import { token } from "../../token_utils";

export default function AddEdit() {
  const [categoryName, setCategoryName] = useState("");
  const [about, setAboutText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!categoryName) return;

    try {
      const response = await fetch("https://backend.bangladeshfirst.com/api/v1/categories", {
        method: "POST",
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: categoryName,
          metadata: {
            about: about,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create category");
      }
      setCategoryName(''),
      setAboutText('');
      alert("Category created successfully!");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category. Please try again.");
    }
  };

  return (
    <div className="overflow-x-auto flex flex-col h-full">
      <div className="inline-flex h-10 justify-between items-center px-4 py-2 fixed bg-white z-10 w-[90.5%] border-b">
        <Breadcrumb items={[{ name: "Categories", link: "/categories" }, { name: "Add" }]} />
      </div>

      <form onSubmit={handleSubmit} className="mt-10">
        <div className="overflow-x-auto p-5 h-full w-full flex flex-col">
          {/*content*/}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus:ring-gray-300  sm:max-w-md pl-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Category Name"
                      value={categoryName}
                      onChange={(event)=>setCategoryName(event.target.value)}
                    />
              
                  </div>
                  <p className="mt-2 text-xs leading-6 text-gray-600">
                    Provide a name that is unique within the system
                  </p>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    value={about}
                    onChange={(event)=>setAboutText(event.target.value)}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about this category.</p>
              </div>
            </div>
          </div>

          <div className="h-10 pt-5 fixed bottom-5  -left-12 z-40   flex items-center justify-end gap-x-6 w-full border-t border-gray-200 ">
            <button type="button" onClick={()=> navigate("/categories")} className="text-sm font-semibold btn btn-sm  rounded-[5px] bg-white leading-6 text-gray-900">
              Cancel
            </button>
            <button type="submit" className="btn text-black hover:text-white btn-sm rounded-[5px] bg-white btn-accent">
              Save
            </button>
          </div>
        </div>
      </form>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis placeat voluptas nisi tenetur neque totam velit cumque veniam dolore incidunt vel, delectus magni fugiat nam cum distinctio quae, praesentium perspiciatis earum dignissimos consectetur esse facere saepe maxime. Fuga, molestiae molestias? A possimus minus animi, dolore quos et quod sequi libero quo inventore rem amet quis eum consequuntur doloribus atque at cumque illo fugit beatae dolor molestiae voluptas perspiciatis! Explicabo autem tempore molestiae, natus esse mollitia, quasi, rem voluptatem repudiandae laudantium praesentium enim sapiente quam. Aspernatur sint quam perferendis omnis id soluta quidem illum exercitationem magni nostrum voluptatem numquam dignissimos officiis doloribus, fugit consectetur facere sapiente, officia voluptatum veritatis? Harum minus odio amet, cum iusto quo nemo nesciunt soluta. Error, qui asperiores eum, voluptatibus similique earum incidunt atque consectetur eaque unde, praesentium sapiente eveniet aliquam laudantium aut? Velit ea quae reprehenderit consequatur. Dicta, ut natus. Assumenda officiis ipsam consequuntur corporis similique ut, illo modi molestiae, quas quo inventore earum excepturi numquam quidem est nobis ducimus minus deleniti id ipsum in alias. Qui, porro quae esse praesentium placeat, sed tenetur quisquam tempora magnam minima similique exercitationem dignissimos natus suscipit nihil soluta quidem! Quas tempora commodi, doloribus rerum minima id fuga ipsa repellendus adipisci quo accusamus voluptate inventore impedit quae eveniet autem fugiat eum optio. Eum, accusantium eaque cum officiis qui dolorem nihil molestias blanditiis a distinctio odio consectetur facilis debitis aperiam dolorum, rem iure earum sequi quae, porro ratione explicabo. Reiciendis asperiores ut eaque? At enim alias dicta culpa officiis. Quidem, libero nihil maiores dolorem corrupti ad, qui tenetur commodi id dolore delectus voluptas asperiores hic quo provident perferendis quasi impedit tempora esse odit placeat aut. Autem eos, veniam aspernatur quos repudiandae suscipit enim quod obcaecati aliquid eligendi reprehenderit fugit commodi labore officiis aut laudantium sed cupiditate sit? Nemo consequuntur culpa voluptatum possimus natus odit, dolores, perspiciatis inventore reiciendis deleniti doloremque magnam facere voluptatem consectetur esse velit pariatur voluptas accusamus quis vero minus illo porro non aut! Quo illo error magni perspiciatis nulla iusto maxime ipsam quisquam, ab quidem sit ipsa reprehenderit non earum aperiam qui nemo iste! Consectetur, excepturi? Eaque molestias nisi in, libero odit obcaecati velit minus repudiandae dolorem nostrum itaque laborum tempore suscipit, sapiente voluptatem inventore magnam sit sed quo? Cum temporibus dolorem alias magnam voluptas pariatur provident perspiciatis officiis veritatis nam, at eaque saepe nostrum? Veniam veritatis architecto dolorem id expedita, nobis voluptatum minus error ex perspiciatis, autem praesentium sed iure assumenda distinctio libero modi impedit ab, commodi corporis. Nesciunt dolorum accusamus explicabo eum voluptatibus quia minus in quod eligendi laudantium? Dignissimos vitae tempore sunt ducimus molestiae eligendi non obcaecati laboriosam similique? Soluta dolore praesentium ex, quae temporibus voluptate in magni obcaecati quas quod sunt ipsa optio facere quo iusto maxime aut magnam aspernatur voluptatibus quidem, a facilis repellendus deserunt voluptas. Iste necessitatibus maxime velit voluptates, repellendus eligendi a enim tenetur ab illum obcaecati, officiis sunt eius. Quam facilis beatae temporibus esse porro? Nisi sequi repellendus ullam hic quaerat, nam unde labore nulla accusamus dolores cumque molestiae possimus itaque rem? Ipsum et voluptas molestias rem corporis a cumque quisquam quam omnis cupiditate ea reprehenderit doloribus, nobis odio labore ex assumenda ut aspernatur, non similique sint. Nulla qui earum necessitatibus nostrum error. Quasi quisquam quaerat voluptates voluptatum aperiam amet et. Porro, eos, iure modi dolorem, voluptas facere pariatur laborum obcaecati iste cum ipsum? Quos, dignissimos. Eaque a voluptatibus, eos molestias veniam enim eligendi quis doloribus laboriosam nisi quae beatae nam. Velit recusandae, illo expedita aliquid, optio harum, dolorem praesentium autem cumque tempora consectetur ex. Sed eos, natus iste, officiis expedita beatae ullam reprehenderit quae voluptas saepe accusamus nobis laudantium animi facilis dolor veritatis pariatur? Quisquam, eius illum voluptate, expedita aut maxime sit error, nemo ipsum numquam quaerat aperiam doloribus voluptatibus ratione distinctio provident! Similique, voluptatibus. Velit labore laudantium accusantium ut consequuntur necessitatibus fuga ex repellat qui hic quod fugiat nostrum quidem quia deserunt quos tenetur dignissimos a eius, voluptatem eos. Optio vitae expedita doloribus temporibus fugit, ad eum deleniti veniam ipsam dicta adipisci totam enim impedit eaque ab sint. Fugit autem magni voluptatem ipsam, illo doloremque animi quia cumque a recusandae mollitia magnam nihil nulla nesciunt dicta libero aspernatur ut placeat iure odit facilis natus ex pariatur tenetur. Doloremque vel dolore ullam quos dolor voluptate, architecto perferendis nesciunt iure molestias facere praesentium nam officiis ex veniam molestiae non laudantium dolores neque saepe! Ipsa fuga suscipit, quae modi eveniet minus maiores? Recusandae iusto dolor eius velit quibusdam? Itaque rerum libero cupiditate molestiae consequatur repudiandae reprehenderit, dolore ullam minus exercitationem sit, aut nobis aliquid, quod rem est sed necessitatibus! Eligendi esse ratione aliquid, in iste sint reprehenderit quos vitae. Architecto nisi sapiente aliquid nam, error magni ex dignissimos obcaecati temporibus accusamus quae quod ab doloremque iusto placeat enim labore. Eligendi voluptas error sint amet iusto obcaecati voluptatem! Dolore, obcaecati sint ipsum unde, saepe consequuntur quas distinctio cumque nostrum non quos! Dolorum, doloribus voluptatum, asperiores necessitatibus, error aliquid deserunt aspernatur natus impedit facilis at inventore atque. Aliquam minima aliquid nostrum voluptates sit facilis qui sapiente esse similique. Consequuntur nam, eum amet alias quo vitae? Omnis atque totam incidunt. Voluptates libero et laborum ipsum veritatis perferendis at consequatur alias est placeat pariatur ipsam error autem architecto deserunt non, magni nam eaque quia tempore expedita maxime labore? Aspernatur unde modi vero, quam atque voluptatibus a distinctio sunt iste reprehenderit culpa provident libero cum perspiciatis, similique soluta ducimus aliquid omnis pariatur ea eos dolores autem incidunt officiis. Vel, ea, quisquam esse illum aspernatur veniam illo voluptas assumenda amet dolorum aperiam recusandae. Ipsam quidem voluptatem corrupti harum minus a ipsa. Nam fugit impedit eligendi laudantium neque, ipsa velit. At eos maiores, quasi pariatur officiis explicabo natus tenetur possimus tempora architecto temporibus odit cumque ut ullam sint mollitia sed nulla ducimus? Reprehenderit fugiat odit at incidunt commodi et fuga veniam provident dolorem, soluta obcaecati, tempora quod eligendi laboriosam nostrum? Eum, atque iusto officiis, quidem repudiandae a delectus, quam ad enim quo doloremque. Doloremque tenetur asperiores placeat blanditiis dolor voluptates nihil fuga, voluptate animi nostrum, nam, veniam vitae!</p>
    </div>
  );
}
