export default function Contact() {
  return (
    <div className="flex-col py-[16px]">
      <div className="pb-[16px] text-[20px] font-semibold">Contact Email</div>
      <div className="pl-[20px]">
        <p>
          If you have any questions or requests, please feel free to contact me
          at the following email address.
        </p>
        <div className="pt-[16px] text-center">
          <a href="mailto:address" className="text-blue-400">
            devbeatleos [at] gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
