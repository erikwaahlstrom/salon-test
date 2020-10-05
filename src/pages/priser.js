import React from "react"
import AppFrame from "../components/AppFrame"
import NavComponent from "../components/NavComponent"
import facepaint from "facepaint"

const mq = facepaint(["@media(min-width: 668px)", "@media(min-width: 1024px)"])

export default () => {
  return (
    <AppFrame>
      <div
        css={mq({
          padding: ["0px 20px 0 20px", "0px 20px 0 20px", "0 40px 0 40px"],
          margin: "0 auto",
          maxWidth: "1200px",
        })}
      >
        <NavComponent />

        <div
          css={mq({
            padding: ["0 20px 0 20px", "0 20px 0 20px", "0 40px 0 40px"],
            margin: "0 auto",
            maxWidth: "1200px",
          })}
        >
          <div
            css={mq({
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"],
              gridGap: "30px",
              padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
            })}
          >
            <div>
              <h2>
                Prislista med montering inom 10 mil från vår företagsadress i
                Odensbacken. Detta ingår:
              </h2>
            </div>
            <div>
              <p>
                1 st dispenser för ½ vikt papperskydd för toalettsits (42 x 28 x
                4,5), plus startpaket av tre ½ vikta papperskydd för toalettsits
                (250 x 2st), inkl montering.
              </p>
              <p css={{ fontWeight: "bold", marginBottom: "30px" }}>
                Pris: 1000 kr
              </p>
              <hr></hr>
              <p>
                1 st dispenser för ¼ vikt papperskydd för toalettsits (21,5 x 31
                x 5,5), plus startpaket av två ¼ vikta papperskydd för
                toalettsits (200 x 2st), inkl montering.
              </p>
              <p css={{ fontWeight: "bold", marginBottom: "30px" }}>
                Pris: 1000 kr
              </p>
              <hr></hr>
              <p>
                Önskar ni fler dispensers monterade och även på fler adresser
                inom en 10 mils radie från Odensbacken kontakta oss för att få
                ett kostnadsförslag.
              </p>
            </div>
          </div>
          <hr />
          <div
            css={mq({
              display: "grid",
              gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr"],
              gridGap: "30px",
              padding: ["40px 0 52px 0", "40px 0 52px 0", "80px 0 52px 0"],
            })}
          >
            <div>
              <h2>
                Prislista med montering inom 20 mil från vår företagsadress i
                Odensbacken. Detta ingår:
              </h2>
            </div>
            <div>
              <p>
                1 st dispenser för ½ vikt papperskydd för toalettsits (42 x 28 x
                4,5), plus startpaket av tre ½ vikta papperskydd för toalettsits
                (250 x 3st), inkl montering.
              </p>
              <p css={{ fontWeight: "bold", marginBottom: "30px" }}>
                Pris: 1300 kr
              </p>
              <hr></hr>
              <p>
                1 st dispenser för ¼ vikt papperskydd för toalettsits (21,5 x 31
                x 5,5), plus startpaket av två ¼ vikta papperskydd för
                toalettsits (200x 2st), inkl montering.
              </p>
              <p css={{ fontWeight: "bold", marginBottom: "30px" }}>
                Pris: 1300 kr
              </p>
              <hr></hr>
              <p>
                Önskar ni fler dispensers monterade och även på fler adresser
                inom en 20 mils radie från Odensbacken kontakta oss via email
                för ett kostnadsförslag.
              </p>
              <hr css={{ marginBottom: "30px" }}></hr>
              <h3 css={{ fontWeight: "bold" }}>Andra alternativ:</h3>
              <p>
                Önskar ni montering av dispensers utanför denna 20 milsradie
                från Odensbacken så kontakta oss via email för ett
                kostnadsförslag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}
