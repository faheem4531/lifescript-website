import { Box, Typography } from '@mui/material'
import Content from '@/app/components/headings/Content'
import styles from "./FeatureSection.module.css"
import Image from 'next/image'

import AssistedEditing from "@/app/_assets/gif/assisted-editing.gif"
import AutoPhoto from "@/app/_assets/gif/auto-photo.gif"
import FamilyTree from "@/app/_assets/gif/family-tree.gif"
import FormattingFeatures from "@/app/_assets/gif/formatting-features.gif"
import Narrative from "@/app/_assets/gif/narrative.gif"
import VoiceToText from "@/app/_assets/gif/voice-to-text.gif"

import NarrativeLogo from "@/app/_assets/pngs/narative-icon.png"
import AssistedLogo from "@/app/_assets/pngs/assisted-icon.png"
import AutoPhopoLogo from "@/app/_assets/pngs/auto-photo.png"
import FamilyLogo from "@/app/_assets/pngs/family-icon.png"
import Formatting from "@/app/_assets/pngs/formatting-icon.png"
import VoiceLogo from "@/app/_assets/pngs/voice-icon.png"
import Pen from "@/app/_assets/svgs/writing-pen.svg"
import Button from '@/app/components/button/Button'

const FeaturesItems = () => {
  const Data = [
    {
      logo: NarrativeLogo,
      gif: Narrative,
      heading: "Narrative Fusion",
      details: "Eliminates the need to write complex texts. Simply answer as many questions as you like and fuse these answers into a cohesive, captivating and chronologically-organized chapter with a single click.",
      flex: "row"
    },
    {
      logo: AssistedLogo,
      gif: AssistedEditing,
      heading: "Assisted Editing",
      details: "Automatically edits and proofreads your text with real-time suggestions. From grammatical errors to sentence structure, it ensures a polished and professional narrative, saving you time and effort in the editing process.",
      flex: "row-reverse"

    },
    {
      logo: VoiceLogo,
      gif: VoiceToText,
      heading: "Voice-to-Text",
      details: "Captures your spoken words, transforming them into written text. Ideal for the storyteller on the move, those who prefer speaking to typing, or anyone who loves to tell their tales out loud. Just press to start, speak your heart, and click to finish. It's that simple.",
      flex: "row"

    },
    {
      logo: FamilyLogo,
      gif: FamilyTree,
      heading: "Family Tree",
      details: "Visually represents your ancestry at the end of your book. You simply add picture, name and age for the family members you wish to include. With family tree, you provide a rich personal and historical context to your story.",
      flex: "row-reverse"
    },

    {
      logo: Formatting,
      gif: FormattingFeatures,
      heading: "Formatting Features",
      details: "Allows you to customise your text and its font, style, size, color, layout and more. This empowers you to create a book as unique and beautiful as your own story.",
      flex: "row"

    },
    {
      logo: AutoPhopoLogo,
      gif: AutoPhoto,
      heading: "Auto Photo Improvement",
      details: "Automatically adjusts your photos for high-quality printing by managing size, resolution, and aspect ratio. This eliminates manual editing, saving you time and effort in meeting printing requirements.",
      flex: "row-reverse",
      button: true,
    },

  ]
  return (
    <Box sx={{ padding: "200px 120px 0" }}>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", width: "90%", textAlign: "center" }}>
        <Typography sx={{ fontSize: "52px", fontWeight: 500, marginBottom: "20px" }}>Features That Shape Your Storytelling Experience Fun and Easy</Typography>
        <Typography sx={{ fontSize: "16px", width: "80%" }}>Lifescript features make crafting your autobiography easy and engaging. Capture your life&apos;s journey, design with style, and visually represent your family heritage. Create a lasting legacy with a high-quality, printed book to share.</Typography>
      </Box>
      <Box sx={{ marginTop: "200px", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {Data.map((item, index) => <DetailFeature
          key={index}
          logo={item.logo}
          gif={item.gif}
          heading={item.heading}
          details={item.details}
          flex={item.flex}
          button={item.button}
        />)}
      </Box>
    </Box>

  )
};

export default FeaturesItems


function DetailFeature({ logo, heading, details, flex, gif, button }) {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      columnGap: "20px",
      marginBottom: "250px",
      maxWidth: "1200px",
      width: "100%"
    }}
      flexDirection={flex}
    >
      <Box sx={{ maxWidth: "355px" }}>
        <Image src={logo} alt="icon" className={styles.gifIcon} />
        <Content
          subWidth="330px"
          heading={heading}
          subHeading={details} />
        {button && <Box sx={{ marginTop: "50px" }}>
          <Button
            title='Get Started'
            width='200px'
            height='50px'
            img1={Pen}
          />
          <Typography
            sx={{ fontSize: '11px', lineHeight: '24px', fontWeight: 500, margin: '10px 0 0px', fontFamily: "myfamily" }}
          >NStart Free Trial (no credit card required)
          </Typography>
        </Box>
        }
      </Box>
      <Image src={gif} alt="gif" className={styles.gif} />
    </Box >
  )

}
