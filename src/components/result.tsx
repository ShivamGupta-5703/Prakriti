// import Image from "next/image"

// interface ResultData {
//   image: string
//   description: string
//   prevention: string[]
//   supplements: { image: string; description: string }[]
// }

// export default function Result({ data }: { data: ResultData }) {
//   return (
//     <div className="mt-8 p-4 border rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Disease Detection Result</h2>
//       <div className="mb-4">
//         <Image src={data.image} alt="Detected Image" width={300} height={300} />
//         <p className="mt-2">{data.description}</p>
//       </div>
//       <div className="mb-4">
//         <h3 className="text-xl font-semibold">Prevention Steps</h3>
//         <ul className="list-disc list-inside">
//           {data.prevention.map((step, index) => (
//             <li key={index}>{step}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3 className="text-xl font-semibold">Supplements</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {data.supplements.map((supplement, index) => (
//             <div key={index} className="border p-2 rounded-lg flex flex-col items-center">
//               <Image src={supplement.image} alt="Supplement Image" width={150} height={150} />
//               <p className="mt-2 text-center">{supplement.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

import Image from "next/image"

interface ResultData {
  image: string
  description: string
  prevention: string[]
  supplements: { image: string; description: string }[]
}

export default function Result({ data }: { data: ResultData }) {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Disease Description</h1>
        <p className="mb-6">
          The fungus is an obligate pathogen which can attack all green parts of the vine. Symptoms of this disease are frequently confused
          with those of powdery mildew. Infected leaves develop pale yellow-green lesions which gradually turn brown. Severely infected leaves often drop prematurely. Infected petioles, tendrils, and shoots often curl, develop a shepherd's crook, and eventually turn brown and die. Young berries are highly susceptible to infection and are often covered with white fruiting structures of the fungus. Infected older berries of white cultivars may turn dull gray-green, whereas those of black cultivars turn pinkish red.
        </p>

        <h2 className="text-2xl font-bold mb-4">Prevent This Plant Disease By Following These Steps</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Apply dormant sprays to reduce inoculum levels.</li>
          <li>Cut it out.</li>
          <li>Open up that canopy.</li>
          <li>Don't let down your defenses.</li>
          <li>Scout early, scout often.</li>
          <li>Use protectant and systemic fungicides.</li>
          <li>Consider fungicide resistance.</li>
          <li>Watch the weather.</li>
        </ul>

        <div className="flex items-center mb-6">
          <div className="w-32 h-32 relative rounded-lg overflow-hidden">
            <Image
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6VwiZQ3fqkjXbxRnEEAP2vv47oCQlXX80iOikg-JdgS1DR3gX"
              alt="Supplement Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="ml-4">
            <p className="font-bold mb-2">Supplement</p>
            <p>
              Tebulur Tebuconazole 10% + Sulphur 65% WG, Advance Broad Spectrum Premix Fungicides
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

