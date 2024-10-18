import { useState } from "react"
import ImageSlider from "./components/ImageSlider"
import pic1 from "./assets/pic1.jpg"
import pic2 from "./assets/pic2.jpg"
import pic3 from "./assets/pic3.jpg"

function App() {
  const slides = [pic1, pic2, pic3]

  return (
    <>
      <div
        style={{
          maxWidth: "70%",
          width: "100%",
          aspectRatio: "10 / 4",
          margin: " auto",
          marginTop: "4rem",
          marginBottom: "4rem",
        }}
      >
        <ImageSlider slides={slides} />
      </div>
    </>
  )
}

export default App
