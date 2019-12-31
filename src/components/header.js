import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="sticky bg-black z-50" >
      <div className="">
        <div className="flex flex-wrap items-center justify-between ml-16 mr-16 mx-auto py-4 md:py-8">
          <Link className="flex items-center no-underline text-white" to="/">
            <svg
              className="fill-current h-10 w-8"
              viewBox="10 2 70 80"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g><g><g><path d="M35.0098724,54.96875c-0.2802734,0-0.5566406-0.1176758-0.7519531-0.3398438l-24-27.3193359     c-0.3461914-0.3945313-0.3286133-0.9897461,0.0405273-1.3632813c0.1875-0.1899414,0.4858398-0.3393555,0.7529297-0.3393555     h15.543457c0.3251953,0,0.6298828,0.1582031,0.8173828,0.4238281c0.1074219,0.1523438,0.168457,0.3291016,0.1801758,0.5097656     l8.3725586,27.1333008c0.1391602,0.4506836-0.0556641,0.9375-0.4672852,1.1674805     C35.3443451,54.9272461,35.1763763,54.96875,35.0098724,54.96875z M13.1817474,27.6069336L32.6753998,49.796875     l-6.8466797-22.1899414H13.1817474z"></path></g></g><g><g><path d="M58.9669037,27.6069336H43.4239349c-0.4248047,0-0.8027344-0.2680664-0.9433594-0.6689453L38.7657318,16.355957     c-0.1074219-0.3056641-0.0600586-0.6450195,0.1274414-0.9091797c0.1875-0.2646484,0.4916992-0.421875,0.815918-0.421875     h8.6811523c0.2651367,0,0.5195313,0.1054688,0.7075195,0.2929688l10.5766602,10.5820313     c0.2856445,0.2861328,0.3710938,0.7163086,0.2163086,1.0898438S59.3712006,27.6069336,58.9669037,27.6069336z      M44.1329193,25.6069336h12.4204102l-8.5776367-8.5820313h-6.855957L44.1329193,25.6069336z"></path></g></g><g><g><path d="M26.5948334,27.6069336h-15.543457c-0.4042969,0-0.769043-0.2436523-0.9238281-0.6171875     c-0.1547852-0.3740234-0.0693359-0.8037109,0.2167969-1.0898438l10.5820313-10.5820313     c0.1875-0.1875,0.4418945-0.2929688,0.7070313-0.2929688h8.6782227c0.3242188,0,0.628418,0.1572266,0.815918,0.421875     s0.2348633,0.6035156,0.1274414,0.909668l-3.7167969,10.5820313     C27.3975677,27.3388672,27.0191498,27.6069336,26.5948334,27.6069336z M13.4654388,25.6069336h12.4208984l3.0141602-8.5820313     h-6.8530273L13.4654388,25.6069336z"></path></g></g><g><g><path d="M35.0152435,54.9750977c-0.2646484,0-0.519043-0.1049805-0.7070313-0.2929688     c-0.262207-0.262207-0.3608398-0.6503906-0.2514648-1.0048828l8.3935547-27.2163086     c0.0239258-0.1484375,0.0795898-0.2910156,0.1665039-0.4130859c0.1879883-0.2631836,0.4838867-0.440918,0.8071289-0.440918     h15.5429688c0.2651367,0,0.5195313,0.1054688,0.7070313,0.2929688c0.3730469,0.3725586,0.4345703,1.0131836,0.0869141,1.4091797     L35.7667084,54.6347656c-0.1826172,0.2080078-0.4428711,0.3310547-0.7192383,0.3398438     C35.0367279,54.9750977,35.0259857,54.9750977,35.0152435,54.9750977z M44.1895599,27.6069336L37.3428802,49.809082     l19.4951172-22.2021484H44.1895599z"></path></g></g><g><g><path d="M35.0118256,54.9736328c-0.0039063,0-0.0078125,0-0.0117188,0     c-0.4345703-0.0048828-0.8168945-0.2890625-0.9443359-0.7045898l-0.0019531-0.0063477     c-0.1396484-0.4526367,0.0581055-0.9414063,0.4731445-1.1699219c0.4150391-0.2290039,0.9335938-0.1347656,1.2416992,0.2250977     c0.2285156,0.2666016,0.3032227,0.637207,0.1923828,0.9707031     C35.8248138,54.6972656,35.4420013,54.9736328,35.0118256,54.9736328z"></path></g></g><g><g><path d="M43.4239349,27.6069336H26.5948334c-0.3242188,0-0.628418-0.1572266-0.815918-0.421875     s-0.2348633-0.6035156-0.1274414-0.909668l3.7167969-10.5820313c0.140625-0.4003906,0.519043-0.668457,0.9433594-0.668457     h9.3974609c0.4248047,0,0.8027344,0.2680664,0.9433594,0.6689453l3.7148438,10.5820313     c0.1074219,0.3056641,0.0600586,0.6450195-0.1274414,0.9091797     C44.0523529,27.449707,43.7481537,27.6069336,43.4239349,27.6069336z M28.0059662,25.6069336h14.0073242l-3.0131836-8.5820313     h-7.9799805L28.0059662,25.6069336z"></path></g></g><g><g><path d="M35.0123138,54.972168c-0.2885742,0-0.5668945-0.125-0.7592773-0.3491211     c-0.0888672-0.1040039-0.1586914-0.2285156-0.1992188-0.359375l-8.4296875-27.3193359     c-0.0634766-0.2060547-0.0585938-0.4272461,0.0136719-0.6303711c0.1420898-0.3984375,0.5341797-0.7070313,0.9570313-0.7070313     h16.8291016c0.4267578,0,0.8061523,0.2705078,0.9453125,0.6738281l0.0146484,0.0424805     c0.0693359,0.2006836,0.0727539,0.4179688,0.0102539,0.6210938l-8.4262695,27.3227539     c-0.1074219,0.3481445-0.3955078,0.6103516-0.7524414,0.684082C35.148056,54.965332,35.0796967,54.972168,35.0123138,54.972168z      M27.9214935,27.6069336l7.0898438,22.9755859l7.0854492-22.9755859H27.9214935z"></path></g></g></g></svg>
            <span className="paragraphFont text-xl tracking-tight">
              {site.siteMetadata.title}
            </span>
          </Link>

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
              } md:block md:flex md:items-center w-full md:w-auto`}
          >
            {[
              {
                route: `/`,
                title: `HOME`
              },
              {
                route: `#services`,
                title: `SERVICES`
              }
            ].map(link => (
              <Link
                className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
            <Link
              className=" text-center block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white bg-red p-2 rounded w-40"
              key={`GET A QUOTE`}
              to={`/quote`}
            >
              GET A QUOTE
            </Link>

          </nav>
        </div>
      </div>
    </header >
  );
}

export default Header;
