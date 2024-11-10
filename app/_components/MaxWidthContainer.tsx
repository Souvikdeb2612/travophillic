// components/MaxWidthContainer.js

export default function MaxWidthContainer({ children }: any) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-8xl px-3">{children}</div>
    </div>
  );
}
