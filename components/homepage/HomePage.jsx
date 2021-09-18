import React from "react";
export default function HomePage() {
  return (
    <>
      <div className="flex flex-col md:flex-col-reverse xl:flex-row w-screen md:items-center h-screen p-9 m-9">
        <div className="flex-1 items-center justify-center self-center">
          <div className="px-6">
            <h1 className="font-display text-xl md:text-2xl lg:text-3xl ">
              มาแลกเปลี่ยนประสบการณ์
            </h1>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl ">
              ที่เกิดขึ้นรอบรั้ว
              <span className="font-display text-xl md:text-2xl lg:text-3xl text-kmitl-normal ">
                พระจอมเกล้าลาดกระบัง
              </span>
            </h2>
            <span className="font-display text-sm hover:transform translate-x-4 translate-y-4  md:text-2xl lg:text-3xl max-w-xs min-w-min font-thin text-gray-400 ">
              ถ้าเกิดคุณอยากอ่านหรือ มีอะไรอยากจะมาแนะนำเราก็อย่ารอช้า มีเพื่อน
              ๆ น้อง ๆ รออ่านอยู่นะ{" "}
            </span>
            <div className="mt-6">
              <div className="hidden  h-12 md:h-20 xl:flex items-center rounded-full shadow-md">
                <input
                  type="text"
                  className="rounded-l-full w-full placeholder-opacity-50 py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                  id="search"
                  placeholder="วันนี้จะอ่านเรื่องอะไรดี ?"
                />
              </div>
            </div>
            <div className="mt-6 ">
              <div className="   h-12 md:h-20 flex xl:hidden w-1/2 text-xl justify-center items-center font-display text-white hover:bg-opacity-50 cursor-pointer bg-kmitl-normal rounded-full shadow-md">
                เข้าสู่ระบบ
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col w-full h-full justify-center items-center">
          <div className="self-center content-center ">
            
          </div>
        </div>
      </div>
    </>
  );
}

function Logo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="b6e4aa1d-5ec3-48ae-976a-dca097aa13b8"
      data-name="Layer 1"
      {...props}
      viewBox="0 0 892.70784 705.62662"

    >
      <polygon
        points="561.335 643.116 547.84 643.115 541.42 591.063 561.338 591.064 561.335 643.116"
        fill="#9e616a"
      ></polygon>
      <path
        d="M718.4229,753.38344l-43.51322-.00161v-.55037a16.93749,16.93749,0,0,1,16.93656-16.9363h.00107l26.5764.00108Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <polygon
        points="512.903 643.116 499.408 643.115 492.988 591.063 512.905 591.064 512.903 643.116"
        fill="#9e616a"
      ></polygon>
      <path
        d="M669.9902,753.38344l-43.51323-.00161v-.55037a16.93749,16.93749,0,0,1,16.93656-16.9363h.00108l26.57639.00108Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M509.37836,375.56423a12.54442,12.54442,0,0,0,19.19038,1.315l26.7024,10.42745,10.29446-14.68146-37.91578-14.19595a12.61241,12.61241,0,0,0-18.27146,17.135Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#9e616a"
      ></path>
      <polygon
        points="512.732 367.331 477.575 378.799 489.319 627.783 516.453 628.454 530.339 452.867 533.492 627.761 567.042 629.61 579.41 367.331 512.732 367.331"
        fill="#2f2e41"
      ></polygon>
      <path
        d="M642.6566,317.74514l90.23317-19.6054,10.0342,77.696-8.3553,37.12373,3.34673,56.41749s-71.34867,35.51146-106.69453,6.60851c0,0,28.40914-74.61909,11.942-109.55Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#e4e4e4"
      ></path>
      <path
        d="M658.28369,328.7349,642.6566,317.74514s-.92307-1.27842-13.94564,13.94564-39.44042,39.44041-39.44042,39.44041L545.24081,354.62l-8.02156,29.63746L588.39082,408.104l72.44654-48.3833Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#e4e4e4"
      ></path>
      <path
        d="M737.93174,498.50112a12.54441,12.54441,0,0,0,4.86707-18.60945l15.21948-24.29233L745.51168,442.75l-21.011,34.60734a12.61241,12.61241,0,0,0,13.43109,21.14379Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#9e616a"
      ></path>
      <path
        d="M718.81591,313.44562l14.07386-15.30588s15.68148-5.461,28.49357,22.75782S788.5051,406.355,788.5051,406.355l-33.457,64.44549L729.065,459.19066,755.04814,405.9l-27.49563-39.46456Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#e4e4e4"
      ></path>
      <circle
        cx="680.90194"
        cy="266.06641"
        r="29.28987"
        transform="translate(-197.82604 262.01949) rotate(-28.66316)"
        fill="#9e616a"
      ></circle>
      <path
        d="M705.60078,239.87467c-1.38563-5.81614-6.23442-10.40678-11.81236-12.55948s-11.7895-2.13192-17.68394-1.1304c-9.78415,1.66241-18.92046,5.88181-27.923,10.05871l6.93892,3.31968-9.57539.54935,7.399,3.82645a12.97887,12.97887,0,0,0-4.80645,13.15793c.38093,1.58573,1.39866,3.3333,3.02857,3.38805,1.97036.06619,2.99887-2.23,4.37817-3.63858,1.83492-1.87392,4.733-2.28976,7.33177-1.93668s5.06388,1.353,7.62766,1.90575a22.847,22.847,0,0,0,18.683-4.32872l9.22674,22.21734a5.46559,5.46559,0,1,1,10.387,1.75144c3.99431-6.02437,7.20731-12.86895,7.31751-20.09636s-3.47444-14.84117-10.03572-17.87387"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M366.15615,688.67941l-12.47644,19.61513,7.26723-25.53535c-15.34387-16.01047-36.58559-27.72271-36.58559-27.72271s-26.15584,42.98733-19.116,69.43032,25.21777,31.49085,44.60947,26.32827c19.39138-5.16249,32.65325-18.58044,25.61344-45.02344C373.90131,699.886,370.49755,694.10783,366.15615,688.67941Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#f2f2f2"
      ></path>
      <path
        d="M349.64869,710.24978l.347,1.30339c3.95606,15.17124,4.548,27.67259,1.75031,37.33113-.03832.14149-.08483.27824-.1232.41975l-.65241-.19252-.62487-.193c3.16916-10.46918,1.75475-23.6982-1.69241-36.93192-.10692-.42761-.21555-.86164-.33711-1.29223-1.50875-5.58924-3.35725-11.15706-5.3693-16.50864-.1521-.41559-.31236-.83587-.47263-1.25615-2.69224-7.05-5.63414-13.688-8.35963-19.40932-.19081-.40527-.38807-.80879-.58362-1.20589-4.653-9.665-8.5974-16.51293-9.4837-18.0252-.10485-.18629-.16634-.28737-.17967-.31145l.56662-.33743.00474-.00818.57307-.33915c.01334.02412.22094.36272.58368.9986,1.37069,2.37137,5.01119,8.83031,9.20862,17.51106.18737.39236.38464.79592.57544,1.20116,2.21666,4.64066,4.56687,9.86075,6.80211,15.40162q.84559,2.08628,1.61772,4.12987c.16668.41857.327.83886.479,1.25444Q347.54219,702.46691,349.64869,710.24978Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M334.80418,671.80266c-.41684.17318-.84015.34808-1.27336.51175a36.83529,36.83529,0,0,1-3.58943,1.156,35.83282,35.83282,0,0,1-15.87008.60426c-.18.41411-.3599.82826-.5446,1.25055a37.15967,37.15967,0,0,0,16.75825-.5643,38.1109,38.1109,0,0,0,3.82948-1.24063c.42674-.162.85005-.33688,1.26518-.51648a36.847,36.847,0,0,0,9.46212-5.85655q-.5579-.42153-1.09132-.82887A35.70966,35.70966,0,0,1,334.80418,671.80266Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M343.79945,692.53531q-.65754.21649-1.32538.39431c-.1338.04253-.27573.08032-.41125.1164a36.023,36.023,0,0,1-32.5453-7.31817c-.15673.44938-.3135.89882-.462,1.35295a37.3606,37.3606,0,0,0,33.35092,7.25573c.18069-.0481.36134-.0962.54031-.15076.44993-.1267.89171-.25815,1.33179-.396a37.1629,37.1629,0,0,0,17.34529-11.80407c-.30783-.3257-.61567-.65145-.93-.97544A35.77551,35.77551,0,0,1,343.79945,692.53531Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M349.64869,710.24978c-.44134.159-.88616.305-1.33269.44463-.47879.14817-.95929.28993-1.44323.41877A36.1204,36.1204,0,0,1,306.724,694.90851c-.15122.6-.30416,1.1935-.44247,1.79a37.44311,37.44311,0,0,0,40.93482,15.70516c.48395-.12884.96617-.26414,1.43678-.41705.45471-.13489.89953-.28094,1.34258-.43347a37.33359,37.33359,0,0,0,20.71612-17.95989c-.26264-.4414-.54289-.8712-.82487-1.30746A36.00382,36.00382,0,0,1,349.64869,710.24978Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M852.82017,690.72483,840.525,710.055l7.16165-25.16436c-15.12095-15.77786-36.05406-27.32-36.05406-27.32s-25.77585,42.3628-18.83831,68.42162,24.8514,31.03334,43.96137,25.94577c19.10965-5.08749,32.17886-18.3105,25.24132-44.36933C860.4528,701.76857,857.0985,696.07439,852.82017,690.72483Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#f2f2f2"
      ></path>
      <path
        d="M836.55254,711.98182l.34195,1.28445c3.89859,14.95083,4.48189,27.27056,1.72489,36.78877-.03777.13944-.08361.27421-.12142.41366l-.64293-.18972-.61579-.19017c3.12311-10.31708,1.72926-23.35391-1.66782-36.39536-.10537-.4214-.21243-.84913-.33221-1.27346-1.48683-5.508-3.30848-10.995-5.2913-16.2688-.14989-.40954-.30782-.82372-.46576-1.2379-2.65313-6.94754-5.55229-13.48911-8.23818-19.12733-.188-.39939-.38243-.797-.57514-1.18837-4.58537-9.52463-8.47249-16.273-9.34592-17.76333-.10332-.18358-.16392-.2832-.17706-.30692l.55839-.33253.00467-.00806.56475-.33422c.01314.02376.21772.35745.5752.98408,1.35077,2.33693,4.93838,8.702,9.07483,17.25666.18465.38666.37905.78436.56708,1.18371,2.18446,4.57324,4.50052,9.71749,6.70328,15.17786q.83333,2.056,1.59422,4.06987c.16426.41249.3222.82667.47209,1.23622Q834.47663,704.312,836.55254,711.98182Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M821.92369,674.09327c-.41079.17067-.82794.343-1.25486.50432a36.30182,36.30182,0,0,1-3.53728,1.13921,35.3123,35.3123,0,0,1-15.63952.59548c-.17734.40809-.35467.81623-.53668,1.23238a36.61979,36.61979,0,0,0,16.51478-.55609A37.56,37.56,0,0,0,821.244,675.786c.42054-.15963.8377-.332,1.2468-.509a36.3116,36.3116,0,0,0,9.32465-5.77147q-.5498-.41539-1.07546-.81682A35.19106,35.19106,0,0,1,821.92369,674.09327Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M830.78827,694.52471q-.648.21334-1.30612.38858c-.13185.04192-.27173.07916-.40528.11471a35.49958,35.49958,0,0,1-32.07247-7.21185c-.15446.44286-.30894.88576-.45534,1.33329a36.81778,36.81778,0,0,0,32.86639,7.15032c.17806-.0474.35609-.0948.53246-.14857.44339-.12486.87876-.2544,1.31245-.39026a36.62309,36.62309,0,0,0,17.09329-11.63258c-.30336-.321-.60673-.642-.91646-.96127A35.25577,35.25577,0,0,1,830.78827,694.52471Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M836.55254,711.98182c-.43493.15665-.87329.30057-1.31333.43817-.47184.146-.94536.28572-1.42227.41268a35.59559,35.59559,0,0,1-39.56549-15.96924c-.149.59128-.29975,1.17616-.43605,1.764a36.89915,36.89915,0,0,0,40.34012,15.477c.47691-.127.95212-.2603,1.4159-.411.4481-.13293.88646-.27686,1.32307-.42718a36.79119,36.79119,0,0,0,20.41515-17.699c-.25882-.435-.535-.85854-.81288-1.28846A35.48081,35.48081,0,0,1,836.55254,711.98182Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#fff"
      ></path>
      <path
        d="M598.35392,210.48508c0-46.23777-32.23542-83.72093-72-83.72093s-72,37.48316-72,83.72093c0,41.93563,26.5164,76.66889,61.11628,82.76947v7.88976a5.61981,5.61981,0,0,0,5.61968,5.61984H531.618a5.61981,5.61981,0,0,0,5.61968-5.61984V293.2546C571.83752,287.154,598.35392,252.42077,598.35392,210.48508Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#e35205"
      ></path>
      <path
        d="M513.73926,300.00391a21.41794,21.41794,0,0,1,16.97919-5.6796,20.12933,20.12933,0,0,1,15.04573,9.81171,21.01624,21.01624,0,0,1,1.94393,17.54757c-1.89264,5.76536-5.91536,10.56337-10.03951,14.88758-4.3268,4.53671-9.03229,8.72062-13.09975,13.50179a64.21875,64.21875,0,0,0-12.9655,58.21023,64.74278,64.74278,0,0,0,21.11934,32.42971q1.93871,1.5845,3.99392,3.01869c1.58513,1.10948,3.086-1.49021,1.51416-2.59041a61.59724,61.59724,0,0,1-23.2439-31.99339,61.01,61.01,0,0,1,13.16342-58.61335c4.29079-4.73735,9.09494-8.97813,13.38436-13.71686,4.10922-4.53966,7.85516-9.66142,9.46029-15.659A23.93226,23.93226,0,0,0,548.54,302.93574a23.27012,23.27012,0,0,0-14.91158-11.15757,24.6826,24.6826,0,0,0-18.2892,3.1664,23.632,23.632,0,0,0-3.72129,2.938c-1.3932,1.34186.72974,3.46162,2.12132,2.12132Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#3f3d56"
      ></path>
      <path
        d="M320.903,175.42652c-22.03029-50.64433-75.19691-76.34093-118.75114-57.39484s-61.00265,75.36026-38.97236,126.00459c19.98051,45.93218,65.57286,71.34167,106.37684,61.53831l3.75914,8.64168a6.71255,6.71255,0,0,0,8.83286,3.47788l11.53142-5.01616a6.71257,6.71257,0,0,0,3.47764-8.833l-3.75911-8.64162C328.389,272.03608,340.88353,221.35876,320.903,175.42652Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#e35205"
      ></path>
      <path
        d="M270.65554,313.53427a25.66491,25.66491,0,0,1,15.37392-14.11085,24.23026,24.23026,0,0,1,20.31689,2.25724,25.42,25.42,0,0,1,12.02356,17.16071c1.53764,8.22862-.95726,16.61009-3.7923,24.27119-2.97183,8.03078-6.67516,15.83045-8.74156,24.17005A76.40425,76.40425,0,0,0,321.73921,434.871a77.10228,77.10228,0,0,0,37.22494,23.77293c1.77394.5,3.56632.9268,5.37257,1.29258,1.88493.38172,2.69132-2.50932.79752-2.89283a74.11325,74.11325,0,0,1-39.23946-22.02414,72.37025,72.37025,0,0,1-19.041-43.75333,73.17642,73.17642,0,0,1,2.24082-24.59878c2.27954-8.456,6.13806-16.373,9.047-24.61194,2.77584-7.862,4.743-16.30449,2.999-24.62427a28.30036,28.30036,0,0,0-12.35927-17.76551,27.34,27.34,0,0,0-20.73641-3.91742,29.17775,29.17775,0,0,0-17.73076,12.12244,27.55959,27.55959,0,0,0-2.55142,4.86606c-.73759,1.78215,2.16376,2.5591,2.89284.79752Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#3f3d56"
      ></path>
      <polygon
        points="782.652 689.952 798.823 689.951 806.515 627.578 782.649 627.579 782.652 689.952"
        fill="#ffb6b6"
      ></polygon>
      <path
        d="M932.17323,781.85881l31.84588-.00129h.00129a20.29578,20.29578,0,0,1,20.29468,20.29436v.6595l-52.14088.00193Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <polygon
        points="686.94 676.201 702.358 681.077 728.505 623.93 705.75 616.732 686.94 676.201"
        fill="#ffb6b6"
      ></polygon>
      <path
        d="M838.24562,767.10969l30.36318,9.604.00123.00039a20.29576,20.29576,0,0,1,13.22844,25.47044l-.19891.62879-49.71324-15.72469Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M876.99614,502.27548,868.02282,527.584l-.25445,136.63144L842.3205,757.76183l31.23829,8.718L908.06527,678.274l11.06792-77.47551,14.58493,77.92594-2.00758,92.62045H964.486l2.474-142.72914a312.93843,312.93843,0,0,0-20.66-117.36668l0-.00006Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <polygon
        points="712.663 302.57 765.64 302.57 787.776 324.706 794.389 416.206 714.377 429.082 688.674 341.778 702.671 304.674 712.663 302.57"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="693.611 342.651 612.045 311.962 609.922 299.276 661.362 255.749 678.483 268.591 647.451 302.57 702.671 304.674 693.611 342.651"
        fill="#e4e4e4"
      ></polygon>
      <circle cx="671.25495" cy="260.3624" r="13.18995" fill="#ffb6b6"></circle>
      <path
        d="M855.491,374.16568l5.96017-26.87593A36.88871,36.88871,0,1,1,933.47865,363.263L927.51847,390.139a4.96078,4.96078,0,0,1-5.9105,3.76483l-62.35217-13.8276A4.96079,4.96079,0,0,1,855.491,374.16568Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <circle
        cx="889.02569"
        cy="358.31914"
        r="27.04551"
        transform="translate(-218.24565 164.39488) rotate(-16.15937)"
        fill="#ffb6b6"
      ></circle>
      <path
        d="M852.45433,347.55038a29.21361,29.21361,0,0,1,34.80628-22.17071l5.37545,1.19209A29.2134,29.2134,0,0,1,914.80651,361.378l-.11921.53751-11.35954-2.51916L901.85927,347.688l-3.18073,10.67724-5.87072-1.30192-.74088-5.90738-1.605,5.38714-38.12682-8.45523Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M879.76268,387.79479a4.88187,4.88187,0,0,1,.74345-5.14423c8.09888-9.57114,20.51389-27.8219,12.66577-42.51566l-.56414-1.05586,30.73253,6.81544L913.10788,392.035l-29.01055-1.26544a5.062,5.062,0,0,1-.87291-.11428A4.93528,4.93528,0,0,1,879.76268,387.79479Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <polygon
        points="763.533 303.124 849.813 315.392 854.638 327.316 813.862 380.963 794.363 372.141 817.287 332.24 762.925 342.163 763.533 303.124"
        fill="#e4e4e4"
      ></polygon>
      <path
        d="M1046.35392,226.38344c0-55.22845-38.50342-100-86-100s-86,44.77155-86,100c0,50.08978,31.67236,91.57672,73,98.86353v9.42388a6.71256,6.71256,0,0,0,6.7124,6.71259h12.5752a6.71256,6.71256,0,0,0,6.7124-6.71259V325.247C1014.68156,317.96022,1046.35392,276.47328,1046.35392,226.38344Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#e35205"
      ></path>
      <path
        d="M945.08016,333.10247a25.86452,25.86452,0,0,1,20.59-6.85815,24.2775,24.2775,0,0,1,17.89435,11.48326,25.38179,25.38179,0,0,1,2.73435,21.06285c-2.12175,6.87049-6.77874,12.62283-11.6334,17.77906-5.17883,5.50054-10.85193,10.53017-15.80363,16.24542a76.41147,76.41147,0,0,0-15.992,69.21825,77.00714,77.00714,0,0,0,25.39047,39.21423q2.24392,1.82682,4.61848,3.4842c1.58574,1.10867,3.08671-1.491,1.51415-2.59041a73.85656,73.85656,0,0,1-27.81675-38.12951,73.1901,73.1901,0,0,1,15.36163-70.15842c5.08981-5.68156,10.82213-10.743,15.96982-16.36973,4.92951-5.38829,9.45532-11.43765,11.4805-18.55777a28.272,28.272,0,0,0-2.58757-21.622,27.5725,27.5725,0,0,0-17.49386-13.461,29.16127,29.16127,0,0,0-21.8908,3.63045,27.62142,27.62142,0,0,0-4.45707,3.50795c-1.39121,1.34382.73157,3.46374,2.12132,2.12132Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#3f3d56"
      ></path>
      <circle
        cx="801.83546"
        cy="383.02894"
        r="13.18995"
        fill="#ffb6b6"
      ></circle>
      <path
        d="M818.03372,361.252c-.69152,1.09389-2.36827.93492-3.30981.25105-1.30708-.94938-.88388-2.778.01617-3.8585,2.86065-3.43409,7.59183.19151,8.23,3.60193a8.57974,8.57974,0,0,1-4.037,8.54326c-3.26388,1.93405-7.50332.96413-10.30948-1.35069-5.85369-4.82876-4.25987-14.49685,2.24211-17.99027,4.1495-2.22946,9.39543-1.25094,13.4831.61662,4.6014,2.10227,8.5581,5.32453,12.81334,8.01044a71.44334,71.44334,0,0,0,30.85958,10.53745c1.91888.19568,1.90522-2.80572,0-3a68.62636,68.62636,0,0,1-17.73183-4.26958,77.92485,77.92485,0,0,1-15.93327-8.7453c-5.01026-3.43425-10.24458-6.77033-16.44506-7.33782a14.26627,14.26627,0,0,0-13.15127,5.72243,14.56888,14.56888,0,0,0-2.18953,12.77983,13.4923,13.4923,0,0,0,10.285,8.85514,11.03,11.03,0,0,0,11.62837-5.3725c2.28221-3.947,2.208-9.249-1.23906-12.52138a7.95786,7.95786,0,0,0-7.738-2.10456,6.80754,6.80754,0,0,0-4.60315,5.85854c-.3326,5.12341,6.94023,7.68557,9.72018,3.28806,1.03465-1.63668-1.56033-3.14362-2.59042-1.51415Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#3f3d56"
      ></path>
      <polygon
        points="64.196 425.291 60.234 430.262 46.22 421.972 50.182 417 64.196 425.291"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="78.819 446.651 82.319 451.874 67.597 459.197 64.097 453.974 78.819 446.651"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="94.059 423.945 101.053 424.192 100.357 438.826 93.363 438.579 94.059 423.945"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="229.196 29.291 225.234 34.262 211.22 25.972 215.182 21 229.196 29.291"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="243.819 50.651 247.319 55.874 232.597 63.197 229.097 57.974 243.819 50.651"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="259.059 27.945 266.053 28.192 265.357 42.826 258.363 42.579 259.059 27.945"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="618.196 81.291 614.234 86.262 600.22 77.972 604.182 73 618.196 81.291"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="632.819 102.651 636.319 107.874 621.597 115.197 618.097 109.974 632.819 102.651"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="648.059 79.945 655.053 80.192 654.357 94.826 647.363 94.579 648.059 79.945"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="499.196 8.291 495.234 13.262 481.22 4.972 485.182 0 499.196 8.291"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="513.819 29.651 517.319 34.874 502.597 42.197 499.097 36.974 513.819 29.651"
        fill="#e4e4e4"
      ></polygon>
      <polygon
        points="529.059 6.945 536.053 7.192 535.357 21.826 528.363 21.579 529.059 6.945"
        fill="#e4e4e4"
      ></polygon>
      <rect
        x="775.35392"
        y="478.38344"
        width="7"
        height="17"
        transform="translate(-217.03684 756.15659) rotate(-55.52447)"
        fill="#e4e4e4"
      ></rect>
      <rect
        x="793.35392"
        y="512.38344"
        width="7"
        height="17"
        transform="translate(590.53651 1374.23421) rotate(-120)"
        fill="#e4e4e4"
      ></rect>
      <rect
        x="817.35392"
        y="487.38344"
        width="7"
        height="17"
        transform="translate(1467.05962 927.78906) rotate(-177.6523)"
        fill="#e4e4e4"
      ></rect>
      <polygon
        points="322.899 643.871 335.014 641.997 326.708 545.197 299.708 550.197 322.899 643.871"
        fill="#ffb6b6"
      ></polygon>
      <path
        d="M472.84244,737.57983,496.70287,733.89l.001-.00015a15.38728,15.38728,0,0,1,17.5566,12.85477l.0764.49413-39.06643,6.04113Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <polygon
        points="195.562 642.671 207.81 643.192 222.708 557.196 195.708 557.197 195.562 642.671"
        fill="#ffb6b6"
      ></polygon>
      <path
        d="M346.25366,735.72514l24.12217,1.0275.001,0a15.3873,15.3873,0,0,1,14.71709,16.0277l-.0213.49954-39.49494-1.68246Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M373.32352,459.67753a10.02457,10.02457,0,0,0-1.76757-.32933l7.63589-62.5007,25.90893-54.86806A15.08,15.08,0,0,0,378.86,327.2619l0,.00006a118.97065,118.97065,0,0,0-15.22467,33.59584l-10.88518,39.35664,7.95951,67.49264a9.9971,9.9971,0,1,0,12.61388-8.02955Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#ffb6b6"
      ></path>
      <path
        d="M389.05439,402.13776l-32.73377-37.44653,16.21625-38.14182A20.80156,20.80156,0,0,1,411.205,341.86357Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <circle
        cx="417.38277"
        cy="268.501"
        r="29.72868"
        transform="translate(-172.06239 408.75972) rotate(-61.33683)"
        fill="#ffb6b6"
      ></circle>
      <path
        d="M422.35392,232.38344h-19.2041c-12.58985,0-22.7959,11.48193-22.7959,25.64563l.88867,34.35437a149.22541,149.22541,0,0,1,39.541,10.57574l1.79248-7.65448,3.53564,10.08081q4.71679,2.28534,9.35352,4.99793c-3.60791-16.95111-5.09278-33.86285-2.61572-47h6.50439v-7.1181l2.208,7.1181h11.792v-.00006A30.9998,30.9998,0,0,0,422.35392,232.38344Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M484.97111,647.64259l-2.78223.67011-2.335-43.42926-17-130-19.5-49.5,9.5-34.5s11-24-16.5-42.5l-22-37c-15.19678-9.93646-27.7002-3.43933-34.36523,13.45013-5.80762,14.71595-10.31592,33.33332-7.63477,52.54987,6.00635,43.04559,11,48,11,48s-37.5,41.5-29.5,94.5l-4.4585,137.22424-4.0791-.16723-.44677,10.89947,35.63623,1.461.44677-10.89947-2.956-.12122,12.85742-54.39679,19-72,33,88,11.09961,35.22925-3.65674.88067,2.5542,10.60541,34.67432-8.35077Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M509.46046,401.22731a10.02459,10.02459,0,0,0-1.08438,1.43417l-52.50325-34.75706L418.3625,320.21006a15.08,15.08,0,0,0-24.89132,16.89988l0,0a118.9708,118.9708,0,0,0,23.25336,28.63131l30.34607,27.323L511.008,416.09973a9.9971,9.9971,0,1,0-1.54751-14.87242Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#ffb6b6"
      ></path>
      <path
        d="M465.01231,361.44481l-48.12648,12.55324-26.87729-31.5496a20.80156,20.80156,0,0,1,30.97771-27.7512Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#2f2e41"
      ></path>
      <path
        d="M838.0403,754.29853h-647.294a1.19068,1.19068,0,1,1,0-2.38136h647.294a1.19068,1.19068,0,1,1,0,2.38136Z"
        transform="translate(-153.64608 -97.18669)"
        fill="#cacaca"
      ></path>
    </svg>
  );
}
