"use client"

// Import necessary modules and components
import LeafSVG from "@/components/assets/Leaf";
import { Button } from "@/components/ui/button";
import { ChangeEvent, FormEvent, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Result, { ResultData } from "@/components/result"; // Assuming you have Result component defined correctly
import { ReloadIcon } from "@radix-ui/react-icons";

export function ImageBox() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageURL, setImageURL] = useState<string>();
  const { toast } = useToast();
  const router = useRouter();

  // Function to handle image upload
  function onImageUpload(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || !e.target.files[0]) return;
    setImageFile(e.target.files[0] ?? null);
    toast({
      variant: "success",
      title: "Image Uploaded",
      description: `${e.target.files[0].name} Uploaded Successfully`,
    });
    setImageURL(URL.createObjectURL(e.target.files[0]));
  }

  // React Query hook to fetch data from API
  const { isFetching, error, data, refetch } = useQuery<ResultData>({
    queryKey: ["plantData"],
    enabled: false, // Start disabled until form submission
    queryFn: async () => {
      const formData = new FormData();
      formData.append("image", imageFile!);

      const response = await fetch(
        "https://your-api-url.com/plant_disease_detection",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data from server");
      }

      return response.json();
    },
  });

  // Handle form submission
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!imageFile) return;

    await refetch(); // Trigger refetch of data from API

    // Redirect to results page if data is available
    if (data) {
      router.push({
        pathname: "/results",
        query: { data: JSON.stringify(data) },
      });
    } else {
      // Show toast if data is not available
      toast({
        variant: "destructive",
        title: "Data Not Found",
        description: "Unable to detect disease. Please try again.",
      });
    }
  }

  return (
    <section className="mt-8 md:mt-4">
      <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center">
          {/* Upload image UI */}
          <label htmlFor="plant-image" className="cursor-pointer">
            <div className="relative w-72 mt-4 flex items-center justify-center aspect-square mx-auto border-2 dark:border-white border-black border-dashed rounded-lg">
              {imageURL ? (
                // Display uploaded image if available
                <Image src={imageURL} alt="Image" width={200} height={200} className="rounded-lg" />
              ) : (
                // Placeholder UI when no image uploaded
                <div className="flex flex-col gap-2 p-4 justify-center items-center">
                  <LeafSVG />
                  <p className="text-center">Upload Plant Image Here</p>
                </div>
              )}
              {/* File input for uploading image */}
              <input
                type="file"
                name="plant-image"
                id="plant-image"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={onImageUpload}
                required
              />
            </div>
          </label>
          {/* Button section for form submission */}
          <div className="mt-4">
            {imageFile === null ? (
              // Button disabled if no image selected
              <Button disabled className="select-none">
                Add Image to Proceed
              </Button>
            ) : (
              // Button enabled to submit form and detect disease
              <div className="flex flex-col justify-center gap-4 items-center">
                <p>{imageFile.name} Uploaded!</p>
                <Button type="submit" disabled={isFetching}>
                  {/* Display spinner icon during loading */}
                  {isFetching && (
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Detect Disease
                </Button>
              </div>
            )}
          </div>
        </div>
      </form>
      {/* Display result component when data is available */}
      {data && <Result data={data} />}
    </section>
  );
}
