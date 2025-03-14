import { ImageTextEditor } from '@/components/ui/image-editor'
import React from 'react'

const page = () => {
  return (
    <ImageTextEditor
          imageSrc="/placeholder.svg?height=600&width=800"
          initialTexts={[
            { id: "1", content: "Edit this text", x: 50, y: 50, fontSize: 24, color: "#ffffff", fontFamily: "Arial" },
          ]}
        />
  )
}

export default page