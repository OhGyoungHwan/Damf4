export default function Footer() {
  return (
    <div className="inset-y-0 bottom-0 bg-gray-900 font-gothic">
      <div className="grid grid-cols-2 mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <p className="pc-h5 col-span-2 sm:col-span-1">Dampi</p>
        <p className="pc-h6 col-span-2 sm:col-span-1 sm:text-right">
          이메일 | okh5317797@gmail.com
        </p>
        <br />
        <p className="pc-caption col-span-2 text-left">
          'Dampi'는 비공식 웹사이트 입니다. EA Sports 및 NEXON의 승인을 받지
          않았으며, EA Sports 및 NEXON의 공식 의견이나 관리를 받지 않습니다.
          웹사이트 내에 포함된 피파온라인4와 관련된 이미지는 EASports 및 NEXON의
          재산 및 등록 상표입니다. 저작권 침해 의도가 없습니다.
        </p>
      </div>
    </div>
  );
}
