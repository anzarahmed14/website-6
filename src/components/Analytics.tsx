import laptop from "../assets/img/laptop.jpg";
export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <div className="max-w-container mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={laptop} alt="laptop" />
            <div className="flex flex-col justify-center">
                <p className="text-brand font-bold">DATA ANALYTICS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                    molestiae delectus culpa hic assumenda, voluptate reprehenderit
                    dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
                    eveniet ex deserunt fuga?
                </p>
                <button className="bg-black text-brand font-medium w-[200px] rounded-md py-3 my-6 mx-auto md:mx-0">Get Started</button>
            </div>
        </div>
        
    </div>
  )
}
