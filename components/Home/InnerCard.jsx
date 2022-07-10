export default function InnerCard({ highlight, title, content }) {
  return (
    <div className="flex flex-col">
      <h1 className="my-4 text-[100px] font-bold leading-[1] text-[#1d1d1f]">
        {highlight}
      </h1>
      <h1 className="text-2xl font-semibold leading-[30px] text-[#1d1d1f]">
        {title}
      </h1>
      <p className="mt-1 mb-4 font-normal text-[#1d1d1f]">{content}</p>
    </div>
  );
}
