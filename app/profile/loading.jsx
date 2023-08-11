import Image from "next/image";

function loading() {
  return (
    <div className="w-full flex-center">
      <Image
        src="/assets/icons/loader.svg"
        alt="loader"
        width="50"
        height="50"
        className="object-contain"
      />
    </div>
  );
}

export default loading;
