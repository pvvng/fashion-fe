import { PhotoIcon } from "@heroicons/react/24/outline";

interface ImageInputProps {
  preview: string | undefined;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
}

export default function ImageInput({
  preview,
  onImageChange,
}: ImageInputProps) {
  return (
    <>
      <label
        htmlFor="photo"
        className="border-3 border-dashed border-neutral-300 rounded-xl aspect-square 
        flex items-center justify-center text-neutral-300 cursor-pointer bg-center bg-cover"
        style={{ backgroundImage: `url(${preview ?? ""})` }}
      >
        {!preview && <PhotoIcon className="w-20" />}
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        className="hidden"
        accept="image/*"
        onChange={onImageChange}
      />
    </>
  );
}
